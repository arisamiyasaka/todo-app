import React from 'react'
import MyForm from './components/MyForm'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'

const App = ({match}) => (
  <div>
    <MyForm />
    <TodoList filter={match.params.filter || 'all'} />
    <ToggleButton type={'done'}>done</ToggleButton>
    <ToggleButton type={'not yet'}>not yet</ToggleButton>
    <ToggleButton type={'all'}>all</ToggleButton>
  </div >
)

export default App;
