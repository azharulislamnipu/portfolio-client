import React, { Component } from 'react';
import './css/styles.scss';
import Home from '../src/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    render() {

        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default App;