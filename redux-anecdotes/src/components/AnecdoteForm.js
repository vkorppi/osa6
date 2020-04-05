import React from 'react'
import { create } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { createNotification,removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {


    const createAnecdote = (event) => {
    
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
    
        props.create(newAnecdote)
      
      
       props.createNotification(`New anecdote ${newAnecdote} was added`,5000)
      
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

const mapDispatchToProps = {
  create,
  createNotification
}


export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
