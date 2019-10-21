import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from '../img/header.png'
import { IoIosSearch, IoMdMenu , IoMdClose} from "react-icons/io";
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            scrolled:false,
            isNavbarCollapsed:false
        };
        this.handleClick = this.handleClick.bind(this);
      }


    componentDidMount(){
        window.addEventListener('scroll',() => {
            const isScroll = window.scrollY < 100;
            if(isScroll !== true){
                this.setState({ scrolled:true});
            }else{
                this.setState({ scrolled:false});
            }

        });
    }
    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
     }

    _getNavbarToggleIcon() {
        return this.state.isToggleOn ? (
         <span><IoMdClose/></span>
        ) : (
      <span><IoMdMenu/></span>
        );
    }


    render() {



        return (
                      
       
                 <header className={this.state.scrolled ? 'header-area sticky-menu ': 'header-area '}>
          
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  children={this._getNavbarToggleIcon()} onClick={this.handleClick}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Service">Service</Nav.Link>
                        <Nav.Link href="#Porfolio">Porfolio</Nav.Link>
                       
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <a href="#" className="btn  rounded mr-30">Request demo</a>
                       
                        
                        <Button className='search-btn left-border'><IoIosSearch/></Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
    
            </header>
           
        );
    }
}