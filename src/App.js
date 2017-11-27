import React, { Component } from 'react'
import MyForm from './components/MyForm'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'
import v4 from 'uuid/v4'
import store from './store'
import { addTodoAction, toggleTodoAction } from './actions'

class App extends Component {
  constructor(props) {
    super(props)

    const serializedState = localStorage.getItem('myTodo')
    let persistState = null
    if (serializedState !== null) {
      persistState = JSON.parse(serializedState)
    }

    this.state = {
      current: 'all',
    }
  }

  render() {
    const { current } = this.state
    const tasks = store.getState()
    return (
      <div>
        <MyForm myEvent={desc => store.dispatch(addTodoAction(desc))} />
        <TodoList
          tasks={tasks}
          current={current}
          $parent={id => store.dispatch(toggleTodoAction(id))} />
        <p>{this.state.current}</p>

        <ToggleButton
          onClick={() => this.setState(prev => ({ ...prev, current: 'done' }))}
        >
          done
        </ToggleButton>

        <ToggleButton
          onClick={() => this.setState(prev => ({ ...prev, current: 'not yet' }))}
        >
          not yet
        </ToggleButton>

        <ToggleButton
          onClick={() => this.setState(prev => ({ ...prev, current: 'all' }))}
        >
          all
        </ToggleButton>
      </div >
    );
  }
}

export default App;
