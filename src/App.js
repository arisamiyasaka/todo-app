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
    const { tasks } = state
    const newTasks = tasks.map(task => {
      if (task.id !== id) return { ...task }
      return { ...task, completed: !task.completed }
    })
    const newState = { ...state, tasks: newTasks }
    localStorage.setItem('myTodo', JSON.stringify(newState))
    return newState
  }

  addTask(description = 'New Task!') {
    const { tasks } = this.state
    const newTasks = [...tasks, { id: v4(), completed: false, description: description }]
    const newState = { ...this.state, tasks: newTasks }
    localStorage.setItem('myTodo', JSON.stringify(newState))

    this.setState(newState)
  }

  render() {
    const { tasks } = this.state
    const that = this
    return (
      <div>
        <MyForm myEvent={(desc) => this.addTask(desc)} />

        <ul>
          {tasks.map(function (task) {　/* JS ここから */
            /* React ここから */
            return (
              <li key={task.id} style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
                onClick={() => {
                  that.setState(that.toggleTask(that.state, task.id))
                }
                }>
                {task.description}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
