import axios from "axios";
import { useRouter } from 'next/router';
import { useEffect, useRef } from "react"
function ActualizarBlog() {
    const tituloBlog = useRef();
    const contenidoBlog = useRef();
    const router = useRouter();
    const { id } = router.query

    function enviarDatos(event) {
        event.preventDefault()
        console.log(tituloBlog.current.value)
        console.log(contenidoBlog.current.value)
        axios.put("http://localhost:8080/blog/", {
            "id": id,
            "titulo": tituloBlog.current.value,
            "contenido": contenidoBlog.current.value,
            "autor": "Enel"
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
    }

    useEffect(() => {
        if (id) {
            axios.get("http://localhost:8080/blog/?id=" + id)
                .then((response) => {
                    console.log(response.data);
                    tituloBlog.current.value = response.data.titulo;
                    contenidoBlog.current.value = response.data.contenido;
                })
        }
    }, [id])
    return (
        <div>
            <div>
                <h1> Actualizar Blog {id}</h1>
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
export default ActualizarBlog;