import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className='hero-bannner'>
                <div className="hero-inner-wrraper cliping-mask bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className="info-header table-cell">
        
                <h1><span>Hey There!</span>  <br/> <span>I'm</span> Nour Eldin <br/> <span>Based In New York</span></h1>
                
                <ul className="banner-meta">
                    <li>Web Designer</li>  
                    <li>Web Developer</li>
                    <li>UI/UX Designer</li>
                </ul>

            
                <div className="banner-btn">   
                    <a href="#" className="btn rounded">My Portfolio</a>      
                </div>
                
                <a href="#about" className="down">
                    <span className="down-one"></span>
                    <span className="down-two">About Me</span>
                    <span className="down-three"></span>         
                </a>

    
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}
