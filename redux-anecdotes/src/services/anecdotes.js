import axios from 'axios'
const databaseurl = 'http://localhost:3001/anecdotes'

const getAnecdotes = async () => {
    return (await axios.get(databaseurl)).data
}

const postAnecdote = newanecdote => {
    return axios.post(databaseurl, newanecdote)
}

const putAnecdote = updatedanecdote => {

    return axios.put(`${databaseurl}/${updatedanecdote.id}`, updatedanecdote)
}


export default {getAnecdotes,postAnecdote,putAnecdote}