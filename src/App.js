import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
@inject('todoStore')
@observer
class App extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>{todoStore.title}</h1>
        </header>
        <hr/>
        <TodoInput store={todoStore} />
        <ul>
          {
            todoStore.todos.map((todo)=>{
              return <TodoItem key={todo.id} todo={todo}/>
            })
          }
        </ul>
        <DevTools />
      </div>
    );
  }
}

export default App;
