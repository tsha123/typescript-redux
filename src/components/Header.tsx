import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Link style={{ textDecoration: 'none' }} to="/home"><Navbar.Brand href="/home">Home</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link style={{ textDecoration: 'none' }} to="/content"><Nav.Link href="/game">Game</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header