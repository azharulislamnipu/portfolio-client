import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../src/ui/title';
class Service extends Component {

  render() {
    return (
     <section className="service-area">
            <Container>
                    <Title title='I provide' headline='Best Service For You' align='text-left' position='justify-content-start' style={{headingcolor:'#ffffff',titlecolor:'rgb(250, 128, 114)'}}/>
           
                    <Row className='align-items-center'>
                        <Col lg={4} md={4} sm={12}>
                           <div className="service-box">
                              <div className="service-icon">
                                </div>
                                <div className="service-box-content">
                                    <h4 className="service-title">Business Strategy</h4>
                                    <div className="service-content">
                                 <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
                              
                                 </div>
                            </div>
                        </div>
                     </Col>
                     <Col lg={4} md={4} sm={12}>
                           <div className="service-box">
                              <div className="service-icon">
                                </div>
                                <div className="service-box-content">
                                    <h4 className="service-title">Business Strategy</h4>
                                    <div className="service-content">
                                 <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
                              
                                 </div>
                            </div>
                        </div>
                     </Col>
                     <Col lg={4} md={4} sm={12}>
                           <div className="service-box">
                              <div className="service-icon">
                                </div>
                                <div className="service-box-content">
                                    <h4 className="service-title">Business Strategy</h4>
                                    <div className="service-content">
                                 <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
                              
                                 </div>
                            </div>
                        </div>
                     </Col>
                     
                     </Row>
            </Container>
     </section>
    )
  }
}



export default Service;
