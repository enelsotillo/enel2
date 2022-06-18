import axios from "axios";
import {useRef} from "react"
import style from "./nuevoBlog.module.css"
function Nuevoblog(){
    const tituloBlog=useRef()
    const contenidoBlog=useRef()
    const categoriaBlog=useRef()
    function enviarDatos(event){
        event.preventDefault()
        console.log(tituloBlog.current.value)
        console.log(contenidoBlog.current.value)
        axios.post("http://localhost:8080/blog/", {
            "titulo": tituloBlog.current.value,
            "contenido": contenidoBlog.current.value,
            "categoria": categoriaBlog.current.value,
            "autor": "Enel"
        }, {
            headers:{
                "Content-Type":"application/json",
                "Accept": "*/*",
            }
        })
    }
    return(
        <div>
            <div className={[style.contenedorformularioBlog]}>
                <h1> Nuevo Blog</h1>
                <form action="" method="post" className="formulario">
                    <label htmlFor="tituloBlog">Titulo -- >:</label>
                    <input ref={tituloBlog} id="tituloBlog" type="text"></input><br/>    
                    <label htmlFor="contenidoBlog">Contenido:</label>
                    <textarea ref={contenidoBlog} id="contenidoBlog" name="contenidoBlog" rows="4" cols="50"></textarea><br/>
                    <label htmlFor="categoriaBlog">Categoria:</label>
                    <input ref={categoriaBlog} id="categoriaBlog" type="text" required></input><br/>    
                    <button onClick={enviarDatos}>Enviar</button>
                </form>
            </div>
        </div>    
    )
}
export default Nuevoblog;