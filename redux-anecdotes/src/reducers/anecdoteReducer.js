
import dbservice from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const _ = require('lodash');
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const vote = (updateAnecdote) => {

  return  async dispatch => { 
    const updatedAnecdote =  (await dbservice.putAnecdote(
        
        {
            "id": updateAnecdote.id,
            "content":updateAnecdote.content,
            "votes":updateAnecdote.votes + 1
        }
      
      )).data

      dispatch({ content: updatedAnecdote, type: 'VOTE'})
   }
}

export const create = (newAnecdote) => {

  return async dispatch => { 
     const createdAnectode = (await dbservice.postAnecdote({"content":newAnecdote,"votes":0})).data
     dispatch({ content: createdAnectode,type: 'CREATE'})
  }
}

export const resetAnecdotes = () => {
  
  return async dispatch => { 
    const anecdotes = await dbservice.getAnecdotes()
    dispatch({ type: 'RESET', content: anecdotes })
  }
}


const reducer = (state = initialState, action) => {

  
  switch (action.type) {

    case 'VOTE':

      const newstate= state.map(function(anecd)  {
        if(anecd.id !== action.content.id) {
    
          return anecd
        }
     
        return action.content
      })

      return _.orderBy(newstate, ['votes'], [ 'desc'])

    case 'CREATE':
      return  _.orderBy(state.concat(action.content), ['votes'], [ 'desc'])
    case 'RESET':
      return _.orderBy(action.content, ['votes'], [ 'desc'])
    default: 
      return state
  }



}

export default reducer