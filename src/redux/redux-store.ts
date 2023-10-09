import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {combineReducers, createStore} from "redux";
import {sitebarReducer} from "./sitebarReducer";
import {usersReducer} from "./usersReducer";
import {authReduser} from "./authReduser";





export let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        sidebar: sitebarReducer,
        usersPage: usersReducer,
        auth: authReduser
    }
)
export type AppRootStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)
export type StoreType = typeof store

// @ts-ignore
window.store = store
