import React from 'react';
import './styles/Navbar.css';
import {NavLink, Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }
    
    render(){
        const show = (this.state.menu) ? "show" : "" ;
    return (
<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#1f89fd"}}>
  <a className="navbar-brand" href="/">Ecmods</a>
  <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className={"collapse navbar-collapse " + show}>
    <div className="navbar-nav">
      <NavLink exact to="/inicio" activeClassName="active">
        <a className="nav-item nav-link" href="/inicio">Inicio</a>
      </NavLink>
      <Link className="nav-item nav-link" target="_blank" to="//electromodsoficial.buycraft.net/">Tienda</Link>
      
        <a className="nav-item nav-link disabled" href="/" aria-disabled="true">Descargas</a>
      
      
        <a className="nav-item nav-link disabled" href="/" aria-disabled="true">Votar</a>
      
    </div>
  </div>
</nav>
    );
}

}

export default NavBar;