import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        localStatus: this.props.status
    }

    enableEditMode = () => {
        this.setState({editMode: true})
    }
    disableEditMode = () => {
        this.props.updateUserStatus(this.state.localStatus)
        this.setState({editMode: false})
    }

    onStatusChange =  (e) => {
        this.setState({localStatus: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
        this.setState({localStatus: this.props.status})
    }
    }

    render() {
        return (
            <div>
                {(!this.props.status && !this.state.editMode )&& <span onClick={this.enableEditMode}>Change status</span>}
                {!this.state.editMode && <span onDoubleClick={this.enableEditMode}>{this.props.status}</span>}
                {this.state.editMode &&
                <input value={this.state.localStatus}
                       autoFocus={true}
                       onChange={this.onStatusChange}
                       onBlur={this.disableEditMode} type="text"/>}
            </div>
        );
    }
}

export default ProfileStatus