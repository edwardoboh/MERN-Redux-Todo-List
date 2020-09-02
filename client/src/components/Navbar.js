import React, {useState} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

export default function NavbarComp(props) {
  const [show, setShow] = useState(false);
  const link = "https://github.com/skwzrd";


  function getNavbar() {
    return(
    <>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Todo List</NavbarBrand>
          <NavbarToggler onClick={() => setShow(!show)} />
          <Collapse isOpen={show} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={link}>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
    );
  }

  return getNavbar();
}