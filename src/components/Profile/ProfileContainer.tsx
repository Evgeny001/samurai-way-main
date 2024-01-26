import * as React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileResponseType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {withRouter} from "./ProfileInfo/WithRouterHOC";
import {Navigate} from "react-router-dom";

type mapStateToPropsType = {
    // profile: ProfileResponseType | null
    profile: ProfileResponseType  |  null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (userId : number ) => void
}
type MatchPropsType = {
    match: {
        params: {
            userId:number
        }
    }
}
export type ProfilePropsType = mapStateToPropsType &  mapDispatchToPropsType & MatchPropsType

export class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId = 2
            this.props.getUserProfile(userId)
    }
  render(): React.ReactNode {
        if(this.props.isAuth === false) return <Navigate to='/login'/>
      return <Profile profile= {this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }}

const WithUrlDataContainerComponent =  withRouter(ProfileContainer)
export  const ProfileContainerC = connect(mapStateToProps, { getUserProfile} )(WithUrlDataContainerComponent)
