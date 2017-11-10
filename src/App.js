import React, { Component } from 'react';
import MyForm from './components/MyForm';
import v4 from 'uuid/v4'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          id:
          completed: false,
          description: 'My Task 1'
        },
        {
          completed: false,
          description: 'My Task 2'
        },
        {
          completed: false,
          description: 'My Task 3'
        }
      ]
    }
  }

  render() {
    const { tasks } = this.state
    return (
      <div>
        <MyForm />
        <ul>{tasks.map(function (task, key) {　/* JS ここから */
          /* React ここから */
          return (
            <li key={key} style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
              onClick={() => {
                if ()
              }



                this.setState({
              task: {
                completed: !task.completed,
                description: task.description
              }
            })
        } >
          { task.description }
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default App;
