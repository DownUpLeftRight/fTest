import React, { Component } from 'react'
import PropTypes from 'prop-types';

import classes from './ContentPaper.module.css'


export class ContentArticle extends Component {
    onBtnClick = e => {
        let i = this.props.pageArticle.likeCounts;
        const likesCount = i+1;
        this.props.addNewLike(likesCount)
    }
    render() {
        return (
            <div className={classes.contentPaper}>
                <div align="left" className={classes.titlePaper}>
                   {this.props.pageArticle.title}
                </div>
                <div align="left" className={classes.paper}>
                    {this.props.pageArticle.content}
                </div>

                <div className={classes.likes}>
                    Лайки: {this.props.pageArticle.likeCounts}
                    <button onClick={this.onBtnClick}>Нравится</button>
                </div>
            </div>
        )
    }
}

ContentArticle.propTypes = {
    pageArticle: PropTypes.number.isRequired,
    addNewLike: PropTypes.func.isRequired,
}
