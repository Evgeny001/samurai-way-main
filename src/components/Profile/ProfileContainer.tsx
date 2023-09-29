import * as React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {withRouter} from "./ProfileInfo/WithRouterHOC";

type mapStateToPropsType = {
    // profile: ProfileResponseType | null
    profile: ProfileResponseType  |  null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
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
        console.log(this.props)
        let userId = this.props.match.params.userId
        if(!userId) userId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
                console.log(response.data);
            })
    }
  render(): React.ReactNode {
      return <Profile profile= {this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
    return{
        profile: state.profilePage.profile
    }}

const WithUrlDataContainerComponent =  withRouter(ProfileContainer)
export  const ProfileContainerC = connect(mapStateToProps, {setUserProfile} )(WithUrlDataContainerComponent)
