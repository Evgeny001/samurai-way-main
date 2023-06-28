import {ActionTypes, SidebarType} from "./state";

let initailState: SidebarType = {
    friends: [
        {id: 2, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
    ]
}

export const sitebarReducer = (state = initailState, action: ActionTypes):SidebarType  =>  {
    return state
}
