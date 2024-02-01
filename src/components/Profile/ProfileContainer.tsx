import * as React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileResponseType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {withRouter} from "./ProfileInfo/WithRouterHOC";
import {withAuthRedirect} from "../../hok/withAuthRedirect";

type mapStateToPropsType = {
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
      return <Profile profile= {this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }}
// let AuthRedirectComponent = (props: ProfilePropsType) => {
//    if(props.isAuth === false) return <Navigate to='/login'/>
//    return <ProfileContainer {...props}/>
// }

// const mapStateToPropsForRedirect = (state: AppRootStateType): {isAuth:boolean}  => ({
//         isAuth: state.auth.isAuth
//     })

// const WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent)
// export  const ProfileContainerC = connect(mapStateToProps, { getUserProfile} )(WithUrlDataContainerComponent)

// let AuthRedirectComponent = withAuthRedirect(Profile)
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
const WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent)
export const ProfileContainerC = (connect(mapStateToProps, { getUserProfile} )(WithUrlDataContainerComponent))
