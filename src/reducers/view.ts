const initialState = 'list'

const viewReducer = (state = initialState, action: { type: string, payload: string }) => {
  switch (action.type) {

    case 'TOGGLE':
      return action.payload

    default:
      return state
  }
}

export default viewReducer