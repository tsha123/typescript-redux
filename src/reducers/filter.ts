const initialState = {}

const filterReducer = (state: any = initialState, action: { type: string, payload: string }) => {
  const temp: any = {}

  switch (action.type) {

    case 'CHECK':
      temp[action.payload] = true
      console.log(`CHECK : ${action.payload}`)
      return { ...state, ...temp }

    case 'UNCHECK':
      temp[action.payload] = false
      console.log(`UNCHECK : ${action.payload}`)
      return { ...state, ...temp }

    default:
      return state
  }
}

export default filterReducer