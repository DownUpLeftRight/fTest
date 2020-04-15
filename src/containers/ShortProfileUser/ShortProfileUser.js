import React, {Component} from 'react';
import classes from './ShorProfileUser.module.css';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Content} from "../Content/Content";


export class UserCard extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className={classes.shortProfileUser}>
                <div className={classes.profileAvatar}>
                    <img src="https://sun9-39.userapi.com/c845016/v845016720/18bb6/uyQotpT87II.jpg"/>
                    <div className={classes.arrow}></div>
                </div>
                <div className={classes.nicknameUser}>
                    {user.name}
                </div>
                <div className={classes.statisticsUser}>
                    <span className={classes.rating}>
                                    Рейтинг: {user.rating}
                    </span>
                    <span className={classes.posts}>
                                    Написанных постов: {user.addedPosts}
                    </span>
                    <span className={classes.regDate}>
                                 Дата регистариции: {user.regDate}
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store)
    return {
        user: store.user,
    }
}
// в наш компонент App, с помощью connect(mapStateToProps)
export default  connect(mapStateToProps)(UserCard);