import {RootActionTypes, setAuthUserDataTypeActionType} from "./ActionType";

export type DataAuthType = {
    id: number | null
    email: string | null
    login: string | null

}
export type AuthDataType = {
    id: number | null
    email: string | null
    login: string  | null
    isAuth: boolean
}
const initialState: AuthDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReduser = (state:AuthDataType = initialState, action: RootActionTypes): AuthDataType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state, ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = ( data: DataAuthType ): setAuthUserDataTypeActionType => {
    return{type: 'SET_USER_DATA', data}
}
