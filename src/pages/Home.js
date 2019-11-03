import React, { Component } from 'react';
import Header from '../layouts/Header';
import HeroBanner from '../components/banner';
import Counter from '../components/counter';
import About from '../components/about';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Services from '../components/service';
import Portfolios from '../components/portfolio';


export default class Home extends Component {
    render() {
        return (
          
        <div className="wrapper">
        <Header/> 
        <HeroBanner/>
        <Counter/>
        <About/>
        <Experience/>
        <Skills/>
        <Services/>
        <Portfolios/>
        </div>
        )
    }
}
