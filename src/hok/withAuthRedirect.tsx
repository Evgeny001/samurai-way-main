import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";

type mapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): mapStatePropsType => {
    return {isAuth: state.auth.isAuth}
}
export function withAuthRedirect<T>(Component: ComponentType<T>)  {
    debugger
    const RedirectComponent = (props: mapStatePropsType) => {
        debugger
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Navigate to='/login'/>
        return <Component {...restProps as T} />
    }
    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent
}
