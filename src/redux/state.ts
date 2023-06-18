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
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
export type ProfilePageType = {
    postsData: PostsDataType[]
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
export const state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you', likes: 15},
            {id: 2, message: 'It is my first post', likes: 20}
        ]
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
}
export const addPost = (postMessage: string) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 15
    }
    state.profilePage.postsData.push(newPost)
}
