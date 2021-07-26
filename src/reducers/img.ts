const initialState = new Array<object>();

const imgReducer = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {

    case 'ADD':
      return [...state, action.payload]

    // case 'EDIT':
    //   return state.map((ele: any) => ele.id === action.payload.id ? action.payload : ele)

    // case 'DEL':
    //   return state.filter((ele: any) => ele.id !== action.payload.id)

    default:
      return state
  }
}

export default imgReducer