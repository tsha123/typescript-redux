import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Link style={{ textDecoration: 'none' }} to="/home"><Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link style={{ textDecoration: 'none' }} to="/content"><Nav.Link href="/content">Content</Nav.Link></Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <Link style={{ textDecoration: 'none' }} to="/home"><NavDropdown.Item href="/home">Home</NavDropdown.Item></Link>
            <NavDropdown.Divider />
            <Link style={{ textDecoration: 'none' }} to='/content'><NavDropdown.Item href="/content">Content</NavDropdown.Item></Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header