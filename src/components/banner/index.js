import React, { Component } from 'react';
import intelligence from '../../img/intelligence.png';
import ellipse from '../../img/svg/ellipse.svg';
import playbutton from '../../img/svg/play-button.svg';
export default class Banner extends Component {
    render() {
        return (
            <div className='hero-bannner'>
                <div className="hero-inner-wrraper cliping-mask bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="info-header table-cell">
            
                                    <h1><span>Hey There!</span>  <br/> <span>I'm</span> Azharul Islam<br/> <span>Based In Bangladesh</span></h1>
                                    
                                    <ul className="banner-meta">
                                        <li>Full Stack Developer</li>  
                                        <li>UI/UX Designer</li>
                                    </ul>

                                
                                    <div className="banner-btn">   
                                        <a href="#" className="btn rounded">My Portfolio</a>      
                                    </div>
                                 
                                </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <img src={intelligence} alt=""/>
                        </div>
                    </div>
                    <div className="row pt-2 pb-2">
                        <div className="col-12">
                        <a href="#about" className="down">
                                        <span className="down-one"></span>
                                        <span className="down-two">About Me</span>
                                        <span className="down-three"></span>         
                                    </a>
                        </div>
                    </div>

                 </div>
                </div>
            
               <img src={ellipse}  alt="image" className="icon-shape-1"/>
              <img src={playbutton} alt="image" className="icon-shape-2"/>
            </div>
        )
    }
}
