import {RootActionTypes} from "./ActionType";


export type SidebarType = {
    friends: FriendsType[]
}
export type FriendsType = {
    name: string
    id: number
}
let initailState: SidebarType = {
    friends: [
        {id: 2, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
    ]
}

export const sitebarReducer = (state = initailState, action: RootActionTypes):SidebarType  =>  {
    return state
}
