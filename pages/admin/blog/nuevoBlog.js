import axios from "axios";
import {useRef} from "react"
import style from "./nuevoBlog.module.css"
function Nuevoblog(){
    const tituloBlog=useRef()
    const fotoBlog=useRef()
    const contenidoBlog=useRef()
    const categoriaBlog=useRef()
    function enviarDatos(event){
        event.preventDefault()
        console.log(tituloBlog.current.value)
        console.log(contenidoBlog.current.value)
        axios.post("http://localhost:8080/blog/", {
            "titulo": tituloBlog.current.value,
            "foto": fotoBlog.current.value,
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
            <div >
                <h1> Nuevo Blog</h1>
                <div className={[style.contenedorformularioBlog]}>
                    <form action="" method="post" className="formulario" id="postForm">
                        <label htmlFor="tituloBlog">Titulo --:</label>
                        <input ref={tituloBlog} id="tituloBlog" type="text"></input><br/>
                        <label htmlFor="tituloBlog">Cargar imagen o foto:</label>
                        <input ref={fotoBlog} type="file" id="image" placeholder="Cargar Foto"></input>    
                        <label htmlFor="contenidoBlog">Contenido:</label>
                        <textarea ref={contenidoBlog} id="contenidoBlog" name="contenidoBlog" rows="4" cols="50"></textarea><br/>
                        <label htmlFor="categoriaBlog">Categoria:</label>
                        <input ref={categoriaBlog} id="categoriaBlog" type="text" required></input><br/>    
                        <button onClick={enviarDatos}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>    
    )
}
export default Nuevoblog;