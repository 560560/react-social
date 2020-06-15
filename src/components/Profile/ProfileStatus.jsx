import React from "react";


class ProfileStatus extends React.Component {
    newStatusElement = React.createRef();
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

    onStatusChange =  () => {
        this.setState({localStatus: this.newStatusElement.current.value})
    }

    render() {
        return (
            <div>
                {(!this.props.status && !this.state.editMode )&& <span onClick={this.enableEditMode}>Change status</span>}
                {!this.state.editMode && <span onDoubleClick={this.enableEditMode}>{this.props.status}</span>}
                {this.state.editMode &&
                <input ref={this.newStatusElement} value={this.state.localStatus} autoFocus={true} onChange={this.onStatusChange} onBlur={this.disableEditMode} type="text"></input>}
            </div>
        );
    }
}

export default ProfileStatus