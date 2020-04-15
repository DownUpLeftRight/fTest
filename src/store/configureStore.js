import { createStore } from 'redux'
import { rootReducer } from '../reducers/Reducer'

export const store = createStore(rootReducer);