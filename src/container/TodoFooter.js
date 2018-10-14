import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoFooter extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <span>{store.getComplatedTodos}</span>
        <span> / </span>
        <span>{store.getTotalTodos}</span>
      </div>
    )
  }
}

export default TodoFooter
