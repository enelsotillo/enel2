import axios from "axios";
import { useEffect, useState } from "react"
function Noticias() {
    /*let listaBlog =[];*/
    const [listaBlog, setListaBlog]=useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/blog/all").then(response => {
            console.log(response);
            /*listaBlog=response.data;*/
            setListaBlog(response.data)
        })
    },
        []
    )
    return (
        <div>   
                <p>Noticias</p>
                <table className="tabla">
                                <tr className="encabezadotitulos">
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>contenido</th>
                                    <th>Fuente</th>
                                </tr>
                                
            </table>

                {listaBlog.map((blog, index)=>{
                        return(
                            <div key={`blog_${index}` } className="listaContainet">
                                <ol type="1" className="bloque-item">
                                   <h3 className="id">Id: {blog.id}</h3>
                                   <h3 className="titulo">Titulo: {blog.titulo}</h3>
                                   <h3 className="contanido">Contenido: {blog.contenido}</h3>
                                   <h3 className="fuente">Fuente: {blog.autor}</h3>
                                </ol>                            
                            </div>  
                ) 
                })}    
        </div>
    );
}
export default Noticias;