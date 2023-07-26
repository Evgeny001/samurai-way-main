import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {FollowActionType, setUsersActionType, UnFollowActionType} from "./usersReducer";

type DialogsDataType = {
    name: string
    id: number
}
type MessagesDataType = {
    message: string
    id: number
}
type PostsDataType = {
    message: string
    likes: number
    id: number
}
type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
}
type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessageBody: string
}
type SidebarType = {
    friends: FriendsType[]
}
type FriendsType = {
    name: string
    id: number
}
type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
type AddPostActionType = {
    type: 'ADD_POST'
}
type  UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
type  UpdateNewMessageBodyType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    newMessageBody: string
}
type SendMessageType = {
    type: 'SEND_MESSAGE'
}
type ActionTypes = AddPostActionType | UpdateNewPostTextActionType |
    UpdateNewMessageBodyType  | SendMessageType | FollowActionType | UnFollowActionType | setUsersActionType

let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likes: 15},
                {id: 2, message: 'It is my first post', likes: 20}
            ],
            newPostText: 'it-kamasutra.com',
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dinich'},
                {id: 2, name: 'Andrey'},
                {id: 4, name: 'Sasha'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How is your IT-kamasutra?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {id: 2, name: 'Andrey'},
                {id: 4, name: 'Sasha'},
                {id: 4, name: 'Sveta'},
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {
   this._state.profilePage = profileReducer(this._state.profilePage, action)
   this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._rerenderEntireTree()
    },
}

// @ts-ignore
window.store = store

// let rerenderEntireTree = () => {
//     console.log('State changed')
// }
//
// export let subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }


// export const state: RootStateType = {
//     profilePage: {
//         postsData: [
//             {id: 1, message: 'Hi, how are you', likes: 15},
//             {id: 2, message: 'It is my first post', likes: 20}
//         ],
//         newPostText: 'it-kamasutra.com',
//     },
//     messagesPage: {
//         dialogsData: [
//             {id: 1, name: 'Dinich'},
//             {id: 2, name: 'Andrey'},
//             {id: 4, name: 'Sasha'},
//             {id: 4, name: 'Sveta'},
//             {id: 5, name: 'Victor'},
//             {id: 6, name: 'Valera'}
//         ],
//         messagesData: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'How is your IT-kamasutra?'},
//             {id: 3, message: 'Yo'}
//         ]
//     },
//     sidebar: {
//         friends: [
//             {id: 2, name: 'Andrey'},
//             {id: 4, name: 'Sasha'},
//             {id: 4, name: 'Sveta'},
//         ]
//     }
// }
// export const addPost = (postMessage: string) => {
//     debugger
//     const newPost: PostsDataType = {
//         id: 5,
//         message: postMessage,
//         likes: 15
//     }
//     state.profilePage.postsData.push(newPost)
//     rerenderEntireTree(state)
// }
// export const addPost = () => {
//     debugger
//     const newPost: PostsDataType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likes: 15
//     }
//     state.profilePage.postsData.push(newPost)
//     state.profilePage.newPostText = ""
//     rerenderEntireTree()
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }
