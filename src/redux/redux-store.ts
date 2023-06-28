import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {combineReducers, createStore} from "redux";
import {sitebarReducer} from "./sitebarReducer";



export let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        sidebar: sitebarReducer
    }
)
export type AppRootStateType = ReturnType<typeof reducers>
export let store = createStore(reducers)
export type StoreType = typeof store
