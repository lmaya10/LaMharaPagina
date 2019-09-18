import React from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import auth from "./auth.js";

export const TopMenu = props =>{
  return(
    <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">La Mhara</a>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/nuestrosProductos">Nuestros Productos</Link></li>
      <li><Link to="/quienesSomos">Quienes Somos</Link></li>
      <li><Link to="/agregarProducto">Agregar Producto</Link></li>
      <li><Link to="/verComentarios">Ver Comentarios</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/signUp"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
      {/*sguzmanm: Logout should only appear if the user is logged in*/}
      <li><Link onClick={()=>{
        auth.logout(()=>{
          props.history.push("/");
        });
      }}
      ><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
    </ul>
  </div>
</nav>
</div>
  );
};
export default withRouter(TopMenu);
