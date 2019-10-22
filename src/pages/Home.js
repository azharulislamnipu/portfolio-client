import React, { Component } from 'react';
import Header from '../layouts/Header';
import HeroBanner from '../components/banner';

export default class Home extends Component {
    render() {
        return (
          
        <div className="wrapper">
        <Header/> 
        <HeroBanner/>
        </div>
        )
    }
}
