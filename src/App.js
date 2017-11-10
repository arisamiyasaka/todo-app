import React, { Component } from 'react'
import MyForm from './components/MyForm'
import v4 from 'uuid/v4'


class App extends Component {
  constructor(props) {
    super(props)

    const serializedState = localStorage.getItem('myTodo')
    let persistState = null
    if (serializedState !== null) {
      persistState = JSON.parse(serializedState)
    }

    this.state = persistState ? persistState : {
      tasks: []
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
    const { tasks } = this.state
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)} />

        <ul>
          {tasks.map(({ id, completed, description }) => (
            <li
              key={id}
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
              onClick={() => this.setState(this.toggleTask(this.state, id))}
            >
              {description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
