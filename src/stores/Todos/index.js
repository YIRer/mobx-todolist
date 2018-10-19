import { observable, action, computed } from "mobx";
import uuid from "uuid/v4";
import TodoModel from "../../models/TodoModel";

class Todos {
  @observable
  title = "MOBX TODOLIST";
  @observable
  todos;
  @observable
  todoValue;
  constructor() {
    this.todos = [];
    this.todoValue = "";
  }
  @computed
  get getComplatedTodos() {
    const complateds = this.todos.filter(todo => todo.complated);
    return !!complateds ? complateds.length : 0;
  }

  @computed
  get getDoingTodos() {
    const doing = this.todos.filter(todo => !todo.complated);
    return !!doing ? doing.length : 0;
  }

  @computed
  get getTotalTodos() {
    return this.todos.length;
  }

  @action
  addTodo() {
    if (this.todoValue.length < 1) return;
    const duplicateCheck = this.todos.filter(
      todo => todo.todo === this.todoValue
    );
    if (duplicateCheck.length > 0) {
      this.todoValue = "";
      return;
    }
    const id = uuid();
    const todo = new TodoModel(this, id, this.todoValue, false);
    this.todos.push(todo);
    this.todoValue = "";
  }
  @action
  updateTodoValue(value) {
    this.todoValue = value;
  }
  @action
  allTodosChecked() {
    const allChecked = this.getTotalTodos === this.getComplatedTodos;
    this.todos.forEach(todo => {
      if (!!todo.toggleState) {
        if (allChecked) {
          todo.toggleState();
        } else if (!todo.complated) {
          todo.toggleState();
        }
      }
    });
  }
  @action
  allTodosToggle() {
    this.todos.forEach(todo => {
      if (!!todo.toggleState) {
        todo.toggleState();
      }
    });
  }
  @action
  deleteComplated() {
    const filtering = this.todos.filter(todo => !todo.complated);
    this.todos.replace(filtering);
  }
}
const todos = new Todos();
export default todos;
