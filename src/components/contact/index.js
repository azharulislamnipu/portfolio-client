import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../src/ui/title';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
class Contact extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <section className="contact-area">
        <Container className="contact-box mb-120">
          <Title title='CONTACT ME' headline='Let’s Chat' align='text-left' position='justify-content-start' style={{ headingcolor: '#ffffff', titlecolor: 'rgb(21, 18, 52)' }} />
          <Form>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="name">
                  <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
              <Form.Group controlId="email">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="organigation">
                  <Form.Control type="text" placeholder="Organigation" />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
              <Form.Group controlId="date">
                  
                  <DatePicker className="form-control" 
        selected={this.state.startDate}
        onChange={this.handleChange} placeholder="dd/mm/yy"
        showYearDropdown
        showMonthDropdown
        scrollableYearDropdown
      />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="budget">
                  <Form.Control type="text" placeholder="Budget" />
                </Form.Group>
                <Form.Group controlId="phonenumber">
                  <Form.Control type="text" placeholder="Phonenumber" />
                </Form.Group>

                <Button type="submit">PROJECT ESTIMATE</Button>
              </Col>
              <Col lg={6} md={6} sm={12}>
              <Form.Group controlId="date">
                    <Form.Control as="textarea" rows="4" placeholder="Message"/>
                </Form.Group>
              </Col>
            
            </Row>
          </Form>
        </Container>

        <Container>
          <Row>
            <Col ls={3} md={3} sm={6}>
            <div className="conatact-mail-box">
              <div className="conatact-icon"><i className="fa fa-envelope"></i></div>
              <div className="box-content">
                <h4 className="conatact-title">Email:</h4>
                <div className="conatact-content">
                  <p>hello@growth.com
                    subash.ui.ux@gmail.com</p>
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

export default Contact;
