import React, { Component } from 'react';
import './css/styles.scss';
import $ from 'jquery';
import _ from 'lodash';
import Home from '../src/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    render() {
        console.log($);
        console.log(_);
        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default App;