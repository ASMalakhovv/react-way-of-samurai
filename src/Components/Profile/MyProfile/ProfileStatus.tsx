import s from "./ProfileInfo.module.css";
import React from "react";


type ProfileStatusProps = {
    profileStatus: string
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false,
    }
    editSpan = () => {
        this.setState({
            editMode: true
        })
    }
    editInput = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.editSpan}>
                            {this.props.profileStatus}
                        </span>
                    </div>
                    : <div>
                        <input onBlur={this.editInput} value={this.props.profileStatus} autoFocus/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;