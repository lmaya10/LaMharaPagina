import React, {Component} from "react";
import "./Feedback.css"
class Feedback extends Component {

  render() {
  return(
    <div className="row">
      <div className="col-md-12 campoTexto">
        <div className="widget-area no-padding blank">
          <div className="status-upload text-center">
            {/*sguzmanm: For me please don´t do this. Later it is difficult to change and if you need to do data manipulation its awful. Use a handler function, onclick, callback, nested generator, just not this please*/}
            <form action="/crearComentario" method="POST">
                <textarea placeholder="¿Tienes algun comentario sobre nuestra pagina? Escribenos para mejorar" name="text" ></textarea>
                <ul>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Audio"><i className="fa fa-music"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Video"><i className="fa fa-video-camera"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Sound Record"><i className="fa fa-microphone"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Picture"><i className="fa fa-picture-o"></i></a></li>
                </ul>
                <input className = "btn"type="submit" value="Enviar"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default Feedback;
