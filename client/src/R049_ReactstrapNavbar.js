import React, {Component} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class R049_ReactstrapNavBar extends Component{
  constructor(props){
    super(props);
    this.state={ collapse : false}
  }

  toggle = () => {
    this.setState({collapse: !this.state.collapse})
  }
  render() {
    return(
      <>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">NavBar</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2"/>
          <Collapse isOpen={this.state.collapse} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">react</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://example.com/">200</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
export default R049_ReactstrapNavBar;