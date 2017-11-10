import React, { Component } from 'react'
import MyForm from './components/MyForm'
import v4 from 'uuid/v4'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          id: v4(),
          completed: false,
          description: 'My Task 1'
        },
        {
          id: v4(),
          completed: false,
          description: 'My Task 2'
        },
        {
          id: v4(),
          completed: false,
          description: 'My Task 3'
        }
      ]
    }
  }

  toggleTask(state, id) {
    const { tasks } = state
    const newTasks = tasks.map(task => {
      if (task.id !== id) return { ...task }
      return { ...task, completed: !task.completed }
    })
    return { ...state, tasks: newTasks }
  }

  addTask() {
    const { tasks } = this.state
    const newTasks = [...tasks, { id: v4(), completed: false, description: 'My New Task!!!' }]
    console.log(newTasks)
    this.setState({ ...this.state, tasks: newTasks })
  }

  render() {
    const { tasks } = this.state
    const that = this
    return (
      <div>
        <MyForm myEvent={() => this.addTask()} />

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
