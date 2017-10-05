import React from 'react';
import {connect} from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  LoginLogout(i){
        switch(this.props.auth){
          case null:return;
          case false:return (
          <NavLink  href='/auth/facebook'>Login With Facebook</NavLink>)
          default:return(
            <NavLink  href='/api/logout'>Logout</NavLink>
          );
        }
      }
    render(){
        return(  
            <div>
            <Navbar color="faded" light toggleable>
              <NavbarToggler right onClick={this.toggle} />
              <NavbarBrand href="/">PokeDex</NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    {this.LoginLogout(this.i)}
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }
}
function mapStateToProps(state) {
   return {auth: state.auth}
}
export default connect(mapStateToProps)(NavBar);