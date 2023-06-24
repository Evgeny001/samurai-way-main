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
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type AddPostActionType = {
    type: 'ADD_POST'
    newPostText: string
}
export type  updateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type ActionTypes = AddPostActionType | updateNewPostTextActionType
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
            ]
        },
        sidebar: {
            friends: [
                {id: 2, name: 'Andrey'},
                {id: 4, name: 'Sasha'},
                {id: 4, name: 'Sveta'},
            ]
        }
    },
    rerenderEntireTree() {
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
        this.rerenderEntireTree()
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer
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
