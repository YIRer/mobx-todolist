import { observable, action } from 'mobx';
import uuid from 'uuid/v4';
import TodoModel from '../../models/TodoModel';

class Todos {
  @observable title = "MOBX TODOLIST"
  @observable todos;
  @observable todoValue;
  constructor(){
    this.todos = [];
    this.todoValue = '';
  }
  @action
  addTodo(){
    if (this.todoValue.length < 1) return;
    const duplicateCheck =  this.todos.filter((todo)=>todo.todo === this.todoValue);
    if(duplicateCheck.length > 0){
      this.todoValue = '';
      return;
    }
    const id = uuid();
    const todo = new TodoModel(this, id, this.todoValue, false )
    this.todos.push(todo);
    this.todoValue = '';
  }
  @action
  updateTodoValue(value){
    this.todoValue = value;
  }
}
const todos = new Todos()
export default todos; 