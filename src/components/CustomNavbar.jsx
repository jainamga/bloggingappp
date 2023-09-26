import React, { useEffect, useState } from 'react';
import {
    Alert,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { doLogout, getCurretUserDetail, isLoggedIn } from '../auth';
import { NavLink as ReactLink,useNavigate } from 'react-router-dom';


const CustomNavbar = (args) => {
  const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(undefined);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(()=>{
      
      setLogin(isLoggedIn())
      setUser(getCurretUserDetail())
      console.log(user);
      console.log(login);
    },[login])

    const logout =()=>{
      doLogout(()=>{
        localStorage.removeItem("data")
        setLogin(isLoggedIn)
        navigate("/login")
      })
    }


  return (
    <div>
    <Navbar color='dark' expand='md' dark fixed=''{...args}>
      <NavbarBrand href="/">Thought Blog</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
         
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sign Up
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Services</DropdownItem>
              <DropdownItem>Contact Us</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav>
          {
            login && (
              <>
              <NavItem>
              <NavLink onClick={logout}>
              {user}
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink onClick={logout}>
                logout
              </NavLink>
              </NavItem>
              <NavItem>
                                        <NavLink tag={ReactLink} to={`/user/profile-info`} >
                                            Profile Info
                                        </NavLink>
                                    </NavItem>
              </>
            )
          }{
            !login &&(
              <>
              
        <NavItem>
            <NavLink href="/login">
              Login
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/signup">
              Sign-up
            </NavLink>
          </NavItem></>
            )
          }
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  </div>

  )
}

export default CustomNavbar;