//@flow
import { observable, action } from "mobx";

export default class TodoModel {
  store: any;
  id: string;
  @observable
  todo = {};
  @observable
  complated: boolean;

  constructor(store: any, id: string, todo: {}, complated: boolean) {
    this.store = store;
    this.id = id;
    this.todo = todo;
    this.complated = complated;
  }
  @action
  toggleState() {
    this.complated = !this.complated;
  }
  @action
  removeTodo() {
    if (this.complated) {
      this.store.todos.remove(this);
    }
  }
  editTodo(value:string) {
    const duplicateCheck = this.store.todos.filter(todo => todo.todo === value);
    if (duplicateCheck.length > 0 || value.length < 1) {
      return;
    }
    this.todo = value;
  }
}
