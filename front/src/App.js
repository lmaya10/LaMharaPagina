import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Producto from "./Producto.js";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import TopMenu from './TopMenu';
import CrearProd from "./CrearProd";
import Feedback from "./Feedback.js";
import Login from "./Login.js";
import Signup from "./SignUp.js";
import AboutUs from "./AboutUs.js";
import Homee from "./Home.js";
import VerComentarioss from "./VerComentarios";
import {ProtectedRoute} from "./protected.route.js";
import history from "./history";
import ContactForm from "./ContactForm.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos:[]
    }
    // sguzmanm: What is window.AppComponent? I do not see doc for this anywhere
    window.AppComponent=this;
  }

  componentDidMount(){
    // sguzmanm: Why are you not handling the error if this fails? Try using catch
    fetch("/productos")
      .then(res => res.json())
      .then(productos => this.setState({
        productos: productos
      }));
  }
 renderProductos()
  {
    return this.state.productos.map(t => <Producto producto={t}></Producto>);
  };


  render() {
  return(
    {/*sguzmanm: Beware of indentation of your code*/}
    <Router history={history}>
      <Switch>
        <div className="container-fluid">
          <TopMenu/>
          <Route exact path="/" component={Home}/>
          <Route path="/nuestrosProductos" component={NuestrosProductos} />
          <Route path="/quienesSomos" component={QuienesSomos} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Loginn} />
          <PrivateRoute exact path="/agregarProducto" component={AgregarProducto} />
          <PrivateRoute exact path="/verComentarios" component={VerComentarios} />
        </div>
        <div className="container">
        </div>
      </Switch>
    </Router>
    )
  }
}

/* sguzmanm: Why are you using all this unnecessary functions? Just render the component you exported inside the Route tag*/
function Home(){
  return(
    <div>
    <Homee/>
    </div>
  );
};

function NuestrosProductos(){
  return(
    <div className ="row">
      {window.AppComponent.renderProductos()};
    </div>
  );
};
function QuienesSomos(){
  return(
    <div className ="row">
      <AboutUs/>
      <ContactForm/>
      <Feedback/>
    </div>
  );
};
function SignUp(){
  return(
    <div className ="row">
    <h1>Este es signup</h1>
    <Signup/>
    </div>
  );
}
function Loginn(){
  return(
    <Login/>
  );
}
function AgregarProducto(){
  return(
    <CrearProd/>
  );
}
function VerComentarios(){
  return(
    <VerComentarioss/>
  );
}

export default App;
