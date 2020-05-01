

const iState = {
  inputText: '',
  jobDetails : {}
};

const inputs = (state = iState, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return  {  ...state, inputText : action.payload }
    case 'SET_JOBS':
      return  {  ...state, jobDetails : action.payload.jobs }
    default:
      return state
  }
}

export default inputs