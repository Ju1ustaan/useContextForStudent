import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

const initialState = {
    count: 0,
    list: []
}
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
          return { count: state.count + action.payload }
        case 'DECREMENT_COUNT':
          return { count: state.count - action.payload }
        case 'REMOVE_COUNT':
          return { count: 0 }
        case 'FETCH_LIST':
            return { ...state.list, list: action.data }
        default:
          return state
      }
}



export const store = createStore(countReducer, applyMiddleware(thunk))