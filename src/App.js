import React from 'react'
import MyForm from './components/MyForm'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'

const App = () => (
  <div>
    <MyForm />
    <TodoList />
    <ToggleButton type={'done'}>done</ToggleButton>
    <ToggleButton type={'not yet'}>not yet</ToggleButton>
    <ToggleButton type={'all'}>all</ToggleButton>
  </div >
)

export default App;
