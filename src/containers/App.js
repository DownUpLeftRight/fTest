import React, {Component} from 'react';
import './App.css';
import {Header} from "../components/Header";
import Content from "./Content/Content";
import {connect} from "react-redux";


export class App extends Component {
    render() {

        return (
            <div className="App">
                <Header/>
                <Content/>
            </div>
        );
    }
}

