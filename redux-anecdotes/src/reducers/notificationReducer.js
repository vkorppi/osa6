
  
 let timeid=0

  export const createNotification = (message,time) => {
    
    return async dispatch => { 

      if(timeid === 0) {

        await dispatch({ notification: message,type: 'CREATENOTE'})

        console.log(timeid)
        timeid= setTimeout(() => {
          dispatch(removeNotification())
          timeid=0
        }, time)
      }
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