import axios from "axios";
import {useRef} from "react"
function Nuevoblog(){
    const tituloBlog=useRef()
    const contenidoBlog=useRef()
    function enviarDatos(event){
        event.preventDefault()
        console.log(tituloBlog.current.value)
        console.log(contenidoBlog.current.value)
        axios.post("http://localhost:8080/blog/", {
            "titulo": tituloBlog.current.value,
            "contenido": contenidoBlog.current.value,
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
            <div>
                <h1> Nuevo Blog</h1>
                <form action="" method="post">
                    <label htmlFor="tituloBlog">Titulo</label>
                    <input ref={tituloBlog} id="tituloBlog" type="text"></input>    
                    <label htmlFor="contenidoBlog">Contenido</label>
                    <textarea ref={contenidoBlog} id="contenidoBlog" name="contenidoBlog" rows="4" cols="50"></textarea>
                    <button onClick={enviarDatos}>Enviar</button>
                </form> 
            </div>
        </div>    
    )
}
export default Nuevoblog;