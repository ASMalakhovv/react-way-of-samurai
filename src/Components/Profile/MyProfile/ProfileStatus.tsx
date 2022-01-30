import React, {ChangeEvent} from "react";


type ProfileStatusProps = {
    profileStatus: string
    status: string
    updateStatus: (status: string) => void
}

type PrevStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false,
        status: this.props.status || 'test'
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
        this.props.updateStatus(this.state.status)
    }

    onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<PrevStateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.editSpan} style={{
                            display: "inline-block",
                            minWidth: "120px",
                            minHeight: "20px",
                            border: '1px solid black'
                        }}>
                            {this.props.status}
                        </span>
                    </div>
                    : <div>
                        <input onBlur={this.editInput}
                               value={this.state.status}
                               onChange={this.onChangeInput}
                               autoFocus
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;