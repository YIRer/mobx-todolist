import { observable, action } from 'mobx';

export default class TodoModel{

  store;
  id;
  @observable todo
  @observable complated

  constructor(store, id, todo, complated){
    this.store = store;
    this.id = id;
    this.todo = todo;
    this.complated = complated;
  }
  @action
  toggleState(){
    this.complated = !this.complated;
    if(this.complated){
      this.removeTodo();
    }
  }
  @action
  removeTodo(){
    this.store.todos.remove(this);
  }
  editTodo(value){
    this.todo = value;
  }
}