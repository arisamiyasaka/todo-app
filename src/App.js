import React, { Component } from 'react'
import MyForm from './components/MyForm'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'
import v4 from 'uuid/v4'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props)

    const serializedState = localStorage.getItem('myTodo')
    let persistState = null
    if (serializedState !== null) {
      persistState = JSON.parse(serializedState)
    }

    this.state = {
      tasks: store.getState(),
      current: 'all',
    }
  }
  toggleTask(state, id) {
    const tasks = state.tasks.map(task => {
      if (task.id !== id) return { ...task }
      return { ...task, completed: !task.completed }
    })
    const newState = { ...state, tasks }
    localStorage.setItem('myTodo', JSON.stringify(newState))
    return newState
  }
  addTask(description) {
    const tasks = [...this.state.tasks, { id: v4(), completed: false, description }]
    const newState = { ...this.state, tasks }
    localStorage.setItem('myTodo', JSON.stringify(newState))

    this.setState(newState)
  }

  render() {
    const { tasks, current } = this.state
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)} />
        <TodoList
          tasks={tasks}
          current={current}
          $parent={(id) => this.setState(this.toggleTask(this.state, id))} />
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
