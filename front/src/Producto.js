import React, {Component} from "react";
import "./Producto.css"

class Producto extends Component{
  constructor (props){
    super(props);
    this.state ={
      cantidad: 0
    }
    this.comprar = this.comprar.bind(this);
  }

  comprar() {
    console.log("Comprar", this);
    // sguzmanm: What is the purpose of this function if you are not storing nay change on the backend? Once it is reloaded, all values come back to what they used to be
    this.setState({
      cantidad: this.state.cantidad + 1
    });
  }

  render() {
    return(
      <div className="col-md-4">
        <div className="row infoProducto">
            {this.props.producto.nombre}
        </div>
        <div className="row imgProducto text-center">
          <img className="imgProd" src={this.props.producto.imagen} alt={this.props.producto.nombre}/>
        </div>
        <div className="row btnProd">
          <button className="btn btn-primary"
            onClick={ this.comprar}>
            Comprar
          </button>
        </div>
        <div className="text-center">
          <span className="textPrecio">
            $ {this.props.producto.precio}
          </span>
        </div>
        <div className="row text-center">
          <span className="textDescripcion">
              {this.props.producto.descripcion}
          </span>
        </div>
      </div>
    );
  }
}

export default Producto;
