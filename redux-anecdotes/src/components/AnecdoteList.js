import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { createNotification,removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {


    const filter = useSelector(state => state.filter)

    const anecdotes = useSelector(state => {
      
      if(filter !== '') {
        return state.anecdote.filter(anec => anec.content.includes(filter))
      }
      else {
        return  state.anecdote
      }
    
    })

   

    const dispatch = useDispatch()

    const voteAnecdote = (anecdote) => {
  
      dispatch(vote(anecdote))
     
      dispatch(createNotification( `Anecdote ${anecdote.content} was voted`,5000))

    }
  
  
    return (
    <>

{anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote)}>vote</button>
          </div>
        </div>   
      )}

    </>
    )
}

export default AnecdoteList