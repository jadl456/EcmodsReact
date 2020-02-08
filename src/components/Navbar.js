import React from 'react';

class NavBar extends React.Component{
    render(){
    return (
<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#1f89fd"}}>
  <a className="navbar-brand" href="/">Ecmods</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Inicio <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/">Tienda</a>
      <a className="nav-item nav-link" href="/">Descargas</a>
      <a className="nav-item nav-link disabled" href="/" aria-disabled="true">Servidores</a>
    </div>
  </div>
</nav>
    );
}

}

export default NavBar;