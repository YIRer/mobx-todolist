import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import DevTools from "mobx-react-devtools";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./container/TodoFooter";
@inject("todoStore")
@observer
class App extends Component {
  allTodosChecked = () => {
    const { todoStore } = this.props;
    todoStore.allTodosChecked();
  };
  allTodosToggle = () => {
    const { todoStore } = this.props;
    todoStore.allTodosToggle();
  };
  deleteTodosComplated = () => {
    const { todoStore } = this.props;
    todoStore.deleteComplated();
  };
  render() {
    const { todoStore } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>{todoStore.title}</h1>
        </header>
        <hr />
        <TodoInput store={todoStore} />
        <br />
        <button onClick={this.allTodosChecked}>All Todo Checked</button>
        <button onClick={this.allTodosToggle}>All Todo Toggle</button>
        <button onClick={this.deleteTodosComplated}>
          Remove Complated Todos
        </button>
        <ul>
          {todoStore.todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
        <TodoFooter store={todoStore} />
        <DevTools />
      </div>
    );
  }
}

export default App;
