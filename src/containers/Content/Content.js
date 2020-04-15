import React, {Component} from 'react';
import classes from './Content.module.css'
import UserCard from "../ShortProfileUser/ShortProfileUser";
import {ContentArticle} from "../../components/ContentPaper/ContentPaper";
import {addLikes} from "../../actions/ContentPaperActions";
import {connect} from 'react-redux';
import {Category} from "../../components/Category/Category";
import {BrowserRouter} from "react-router-dom";

class Content extends Component {
    render() {
                const { pageArticle, setYearAction} = this.props;

        return(
            <div className={classes.wrap}>
                <div className={classes.guide}>
                    <span className={classes.main}>Main</span>
                    <span> > </span>
                    <span>
                    </span>
                    <span> > </span>
                    <span> Games</span>
                    {/*Сделать ссылками, чтобы можно было переходить назад(как в проводнике)*/}
                    <span> > </span>
                    <span> Overwatch </span>
                    <span> > </span>
                    <span> Questions </span>
                </div>
                <div className={classes.customUserPaperWrap}>
                    <div className={classes.customUserPaper}>
                       <UserCard />
                        <ContentArticle addNewLike={setYearAction} pageArticle={pageArticle}/>

                        </div>
                    </div>
                </div>

        )
    }
}


const mapStateToProps = store => {
    return {
        pageArticle: store.pageArticle,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setYearAction: likeCounts => dispatch(addLikes(likeCounts)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)