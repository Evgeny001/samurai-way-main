import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {combineReducers, createStore} from "redux";
import {sitebarReducer} from "./sitebarReducer";



export let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        sidebar: sitebarReducer
    }
)
export type AppRootStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)
export type StoreType = typeof store
