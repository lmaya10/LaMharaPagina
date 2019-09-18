import React, {Component} from "react";
import "./CrearProd.css"

// sguzmanm: Why are you using pure CSS here and in other forms, like ContactForm, MDB?

class CrearProd extends Component {
  render() {
    return (
      <div className="formulario">
        <h1>Crear Nuevo Producto </h1>
        {/*sguzmanm: For me please don´t do this. Later it is difficult to change and if you need to do data manipulation its awful. Use a handler function, onclick, callback, nested generator, just not this please*/}
        <form className="nuevaInfo" action="/crearProducto" method="POST" >
          <div className ="row">
          Ingrese la siguiente información
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="nombre">Nombre:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" name="nombre"></input>
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="precio">Precio:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="number" min="0" step="1000" name="precio" />
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="imagen">Imagen(Ingrese una url):</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" name="imagen"></input>
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="dimensiones">Caracteristicas:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" name="dimensiones"></input>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 text-center">
              <input className = "btn"type="submit" value="Submit"></input>
            </div>
          </div>

        </form>
      </div>
      )

  }
}

export default CrearProd;
