const iState = {
  inputText: '',
  jobDetails : {},
  jobShowCount:8
};

const inputs = (state = iState, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return  {  ...state, inputText : action.payload }
    case 'SET_JOBS':
      return  {  ...state, jobDetails : action.payload.jobs }
      // case 'JOB_SHOW_COUNT' :
      //   return { ...state, jobShowCount:  state.jobShowCount + action.payload }
    default:
      return state
  }
}

export default inputs