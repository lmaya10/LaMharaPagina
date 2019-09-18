import React, {Component} from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import Comentario from "./Comentario.js";
import "./VerComentarios.css"

class VerComentarios extends Component{

  constructor(props) {
    super(props);
    this.state = {
      comentarios:[]
    }
  };

  componentDidMount(){
    // sguzmanm: Please handle promise errors with catch
    fetch("/comentarios")
      .then(res => res.json())
      .then(comentarios => this.setState({
        comentarios: comentarios
      }));
  };

  renderComentarios()
  {
    return this.state.comentarios.map(t => <Comentario comentario={t}></Comentario>);
  };

  render(){
    return (
      <MDBContainer>
        <MDBListGroup style={{ width: "80%" }}>
          <MDBListGroupItem className="tituloComentarios" active href="#">
            <div className="d-flex w-500 justify-content-between">
              <h3> Comentarios Clientes </h3>
            </div>
          </MDBListGroupItem>
          {this.renderComentarios()}
        </MDBListGroup>
      </MDBContainer>
    );
  };
}
export default VerComentarios;
