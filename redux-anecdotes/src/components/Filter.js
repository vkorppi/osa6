import React from 'react'
import {  useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {

    const dispatch = useDispatch()

  const handleChange = (event) => {

    
    const newfilter = event.target.value

     dispatch(setFilter(newfilter))

  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input name="filtervalue"  onChange={handleChange} />
    </div>
  )
}

export default Filter