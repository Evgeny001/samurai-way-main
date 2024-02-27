import React from "react";
import { Component } from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import { getAuthUserData} from "../../redux/authReduser";
import {AppRootStateType} from "../../redux/redux-store";


type HeaderContainerType = {
    getAuthUserData: ( ) =>   void
    isAuth: boolean
    email: string | null
}

class HeaderContainer  extends Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }
        render(): React.ReactNode {
            return <Header login={this.props.email} isAuth={this.props.isAuth} />
        }
    }

type mapStateToPropsType = {
    isAuth: boolean
    email: string | null
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.login
    }
}
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
