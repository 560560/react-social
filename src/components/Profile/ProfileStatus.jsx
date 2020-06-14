import React from "react";


class ProfileStatus extends React.Component {
    newStatusElement = React.createRef();
    state = {
        editMode: false
    }

    enableEditMode = () => {
        this.setState({editMode: true})
    }
    disableEditMode = () => {
        this.props.updateUserStatus(this.newStatusElement.current.value, this.props.myId)
        this.setState({editMode: false})
    }


    render() {
        return (
            <div>
                {(!this.props.status && !this.state.editMode )&& <span onClick={this.enableEditMode}>Change status</span>}
                {!this.state.editMode && <span onDoubleClick={this.enableEditMode}>{this.props.status}</span>}
                {this.state.editMode &&
                <input ref={this.newStatusElement} autoFocus={true} onBlur={this.disableEditMode} type="text"></input>}
            </div>
        );
    }
}

export default ProfileStatus