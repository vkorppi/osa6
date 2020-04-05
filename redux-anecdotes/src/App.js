import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
//import dbservice from './services/anecdotes'
import { useDispatch } from 'react-redux'
import { resetAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App