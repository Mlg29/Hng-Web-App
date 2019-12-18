import React from "react"
import "./Navigation.css"
import Button from "../Button"
import { Link } from "react-router-dom"
import { Navbar, Nav,} from "react-bootstrap"

function Navigation() {
    return (
      <div className="container">
          <Navbar bg="transparent" expand="lg" className="nav-bg">
            <Navbar.Brand href="/"><img className="logo" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473613/hng7.0/v5cby8ialrkdpyfu32gx.png" alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/" style={{color: "grey", fontWeight: "bold",marginLeft: "12rem"}}>Home</Nav.Link>
                    <Nav.Link href="/about"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>About</Nav.Link>
                      <Nav.Link href="/hng"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>HNG6</Nav.Link>
                      <Nav.Link href="/mentors"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>Mentors</Nav.Link>
                      <Nav.Link href="/contact"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>Contact</Nav.Link>
                      <Nav.Link href="/join" style={{marginLeft: "1rem"}}><Button className="btn btn-success" >Join Now</Button></Nav.Link>                   
                    </Nav>
                            
            </Navbar.Collapse>
      </Navbar>
    </div>    
    )
}

export default Navigation