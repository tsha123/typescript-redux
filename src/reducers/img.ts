const initialState = new Array<object>();

const imgReducer = (state = initialState, action: { type: string, payload: object }) => {
  switch (action.type) {

    case 'ADD':
      return [...state, action.payload]

    default:
      return state
  }
}

export default imgReducer