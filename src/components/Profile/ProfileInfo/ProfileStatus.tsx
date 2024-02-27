import { Component } from "react"

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends Component<ProfileStatusType> {
    state = {
        editMode:true
    }
    activateEditMode() {
        console.log(this.state.editMode)
     this.setState(
         { editMode:false}
     )
        console.log(this.state.editMode)
    }
    deactivateEditMode () {
        this.setState({ editMode:true})
    }
    render() {
        return <div>{this.state.editMode ?
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
               : <input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>}
        </div>
    }
}
