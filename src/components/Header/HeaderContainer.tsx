import * as React from "react";
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import { DataAuthType, setAuthUserData} from "../../redux/authReduser";
import {AppRootStateType} from "../../redux/redux-store";


type HeaderContainerType = {
    setAuthUserData: (data: DataAuthType ) => void
    isAuth: boolean
    email: string | null
}

class HeaderContainer  extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
            withCredentials: true
        } )
            .then(response => {{
                debugger
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(response.data.data)
                }
            }
            })
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
