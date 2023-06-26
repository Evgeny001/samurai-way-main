export type DialogsDataType = {
    name: string
    id: number
}
export type MessagesDataType = {
    message: string
    id: number
}
export type PostsDataType = {
    message: string
    likes: number
    id: number
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
export type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
}
export type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessageBody: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type FriendsType = {
    name: string
    id: number
}
export type StoreType = {
    _state: RootStateType
    _updateNewPostText: (newText: string) => void
    _addPost: () => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type AddPostActionType = {
    type: 'ADD_POST'
}
export type  UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type  UpdateNewMessageBodyType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    newMessageBody: string
}
export type SendMessageType = {
    type: 'SEND_MESSAGE'
}
export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyType  | SendMessageType

export const addPostActionCreater  = (): AddPostActionType => {
    return {type: "ADD_POST"}
}
export const updateNewPostTextActionCreator = ( newPostText: string): UpdateNewPostTextActionType => {
    return { type: "UPDATE_NEW_POST_TEXT", newText: newPostText }
}
export const updateNewMessageBodyActionCreator = ( newMessageBody: string): UpdateNewMessageBodyType => {
    return { type: "UPDATE_NEW_MESSAGE_BODY", newMessageBody: newMessageBody }
}
export const sendMessageActionCreator = (): SendMessageType => {
    return { type: 'SEND_MESSAGE' }
}
export let store: StoreType = {
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
    _addPost() {
        debugger
        const newPost: PostsDataType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 15
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ""
        this._rerenderEntireTree()
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {
        if (action.type === 'ADD_POST')
            this._addPost()
        else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._updateNewPostText(action.newText)
        }
        else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.messagesPage.newMessageBody = action.newMessageBody
            this._rerenderEntireTree()
        } else if (action.type === "SEND_MESSAGE"){
              let body = this._state.messagesPage.newMessageBody
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messagesData.push({id: 6, message: body})
            this._rerenderEntireTree()
        }
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
