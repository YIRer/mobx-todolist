import React, { Component } from "react";
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class TodoItem extends Component {
  @observable
  editMode = false
  @observable
  editData = ''; 
  handleUpdate = () =>{
    const { todo } = this.props;
    todo.toggleState();
  }
  handleRemove = ()=>{
    const { todo } = this.props;
    todo.removeTodo();
  }

  @action
  toggleEdit = ()=>{
    this.editMode = !this.editMode;
  }

  @action
  changeEditData =(e)=>{
    const value = e.target.value
    this.editData = value;
  }
  @action
  updateTodoData = ()=>{
    if(this.editMode){
      const { todo } = this.props;
      todo.editTodo(this.editData);
      this.toggleEdit();
    }else{
      return;
    }
  }
  render() {
    const { todo } = this.props;
    const { editMode } = this;
    return (
      <li>
        <input 
          type="checkbox" 
          checked={todo.complated}
          onChange={this.handleUpdate}
        />
        {
          editMode?(
            <input 
              type="text"
              onChange={this.changeEditData}
              defaultValue={todo.todo}
            />
          ):(
            <span>{todo.todo}</span>
          )
        }
        {` `}
        <span>complated : {`${todo.complated}`}</span>
        {
          editMode?(
            <button type="button" onClick={this.updateTodoData}>Confirm</button>
          ) : null
        }
        <button type="button" onClick={this.toggleEdit}>
          {
            editMode? 'Cancle':'Edit'
          }
        </button>
        <button type="button" onClick={this.handleRemove}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
