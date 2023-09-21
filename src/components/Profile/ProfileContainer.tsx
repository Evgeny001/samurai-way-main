import * as React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../redux/profileReducer";
import {Profile} from "./Profile";

type mapStateToPropsType = {
    // profile: ProfileResponseType | null
    profile: ProfileResponseType  |  null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}
export type ProfilePropsType = mapStateToPropsType &  mapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export  const ProfileContainerC = connect(mapStateToProps, {setUserProfile} )(ProfileContainer)
