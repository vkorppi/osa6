import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { createNotification,removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = (event) => {
    
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
    
        dispatch(create(newAnecdote))
       dispatch(createNotification( `New anecdote ${newAnecdote} was added`,5000))
   
      
      }


    return (
        <>
        <h2>create new</h2>
        <form onSubmit={createAnecdote}>
          <div><input  name="anecdote"/></div>
          <button>create</button>
        </form>
        </>
    )


}

export default AnecdoteForm