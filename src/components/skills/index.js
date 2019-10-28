import React, { Component, Children } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../src/ui/title';
import ProgressBar from 'react-bootstrap/ProgressBar'
class Skills extends Component {

  render() {

    return (
      <section className="skills-area">
         <Container>
         {<Title title='Skills' headline='Technical Skills' align='text-right' position='justify-content-end' style={{headingcolor:'#1f2235',titlecolor:'#666ce0'}} /> }
         <Row className='skrill_row'>
                <div className="col-lg-4">
                    <h4 className="heding">Extra skills</h4>
                    <ul className="extra_skills">
                        <li>LOGO DESIGN</li>
                        <li>PHOTOGRAPHY</li>
                        <li>Application Development</li>
                        <li>Software Development</li>
                        <li>Illustrator</li>
                        <li>USER EXPERIENCE</li>
                        <li>AUDIO VIDEO EDITING</li>
                    </ul>
                </div>
                <div className="col-lg-8 skrill">  
                    <h4>PHOTOSHOP</h4>

                    <div className="progress-wrrap  fourtypercent">
                      <div className="progress-title">40%</div>
                       <ProgressBar  now={40} />
                    </div>
                  
                   
                    <h4>HTML5 / CSS3</h4>
                   
                
                  
              

                </div>
         </Row>
         </Container>
      </section>
    )
  }
}
export default Skills;