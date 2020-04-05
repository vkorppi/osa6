
  export const setFilter = (filter) => {
    return { filter: filter,type: 'SETFILTER'} 
  }
  
  export const removeFilter = () => {
    return {type: 'REMOVEFILTER'} 
  }

const reducer = (state = '', action) => {

    switch (action.type) {

      case 'SETFILTER':
        return  state=action.filter

      case 'REMOVEFILTER':
          return state=''
      
      default: 
        return state
    }
  }
  
  export default reducer