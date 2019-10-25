import React, { Component, Fragment } from 'react';
import './css/styles.scss';
import Home from '../src/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
    render() {

        return (
            <Fragment>
                <Home/>
            </Fragment>
        );
    }
}

export default App;