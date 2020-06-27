import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {loginOut} from "../../redux/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component {

    render() {
        return (<Header {...this.props}/>);
    }

}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    myId: state.auth.id
})

export default compose(
    connect(mapStateToProps, {loginOut}))
(HeaderContainer)

