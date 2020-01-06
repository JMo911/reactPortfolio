import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './style.css'

const Navbar = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(!dropdownOpen);
    // const setActive = (event, id) => {
    //     event.preventDefault();
    //     console.log(id)
    // }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="/about" id='about' 
        //   active={props.active} onClick = {(event, id) =>{setActive(event, id)}}
          >About</NavLink>
        </NavItem>
        {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <NavItem>
          <NavLink href="/workprojects" active={props.active}>Work/Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact" active={props.active}>Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/learnmore" active={props.active}>Learn More</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;