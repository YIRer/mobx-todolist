import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer
class TodoInput extends Component {
  constructor(props){
    super(props);
    this.todoInput = React.createRef();
    this.updateTodoValue = this.updateTodoValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.submitTodoValue = this.submitTodoValue.bind(this);
  }
  updateTodoValue(e){
    const { store } = this.props;
    const value = this.todoInput.current.value
    store.updateTodoValue(value);
  }
  addTodo(){
    const { store } = this.props;
    store.addTodo()
  }
  submitTodoValue(e){
    if(e.key === "Enter"){
      this.addTodo();
    }
    return;
  }
  render() {
    const { store } = this.props;
    return (
      <Fragment>
        <input 
          ref={this.todoInput} 
          type="text" 
          onKeyUp={this.submitTodoValue} 
          onChange={this.updateTodoValue} 
          value={store.todoValue} 
        />
        <button onClick={this.addTodo}>add Todo</button>
      </Fragment>
    )
  }
}

export default TodoInput
