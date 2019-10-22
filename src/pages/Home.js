import React, { Component } from 'react';
import Header from '../layouts/Header';
import HeroBanner from '../components/banner';
import Counter from '../components/counter';

export default class Home extends Component {
    render() {
        return (
          
        <div className="wrapper">
        <Header/> 
        <HeroBanner/>
        <Counter/>
        </div>
        )
    }
}
