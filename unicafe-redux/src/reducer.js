const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  
  let newfeedback = {good: 0,ok: 0, bad: 0}
  
  switch (action.type) {
    
    case 'GOOD':
      newfeedback.good = state.good + 1
      newfeedback.ok = state.ok
      newfeedback.bad = state.bad
      return state = newfeedback
    case 'OK':
      newfeedback.ok = state.ok + 1
      newfeedback.good = state.good
      newfeedback.bad = state.bad
      return state = newfeedback
    case 'BAD':
      newfeedback.bad =  state.bad + 1
      newfeedback.good = state.good
      newfeedback.ok = state.ok
      return state = newfeedback
    case 'ZERO':
      return state = newfeedback
    default: return state
  }
  
}

export default counterReducer