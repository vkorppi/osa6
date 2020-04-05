
  
  export const createNotification = (message,time) => {
    
    return async dispatch => { 

      await dispatch({ notification: message,type: 'CREATENOTE'})

        setTimeout(() => {
          dispatch(removeNotification())
        }, time)
     }
    
    
  }


  
  export const removeNotification = () => {
    return {type: 'REMOVENOTE'} 
  }
  
  const reducer = (state = '', action) => {

    switch (action.type) {

      case 'CREATENOTE':
        return  state=action.notification

      case 'REMOVENOTE':
          return state=''
      
      default: 
        return state
    }
  }
  
  export default reducer