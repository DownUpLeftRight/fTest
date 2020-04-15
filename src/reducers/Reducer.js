import { combineReducers } from 'redux'
import { userReducer } from './user'
import {articleReducer} from "./pagePaper";

export const rootReducer = combineReducers({
    user: userReducer,
    pageArticle: articleReducer,
})