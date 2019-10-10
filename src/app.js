import React, { Component } from 'react';
import './css/styles.scss';
import ragina from './img/regina.jpg';
import $ from 'jquery';
import _ from 'lodash';
import Home from '../src/components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    render() {
        console.log($);
        console.log(_);
        return (
            <div className='center-text'>
                <h1>Hello..!! This is React App Starter</h1>
                <img src={ragina} height='300' width="600"/>
                <Home/>
            </div>
        );
    }
}

export default App;