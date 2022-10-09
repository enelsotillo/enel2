import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react"

function AdminPege() {
    const [listaBlog, setListaBlog] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/blog/all").then(response => {
            console.log(response);
            /*listaBlog=response.data;*/
            setListaBlog(response.data)
        })
    },
        []
    )
    function eliminar(id) {
        console.log(id)
        axios.delete("http://localhost:8080/blog/?id=" + id).then(response => {
            axios.get("http://localhost:8080/blog/all").then(response => {
                console.log(response);
                /*listaBlog=response.data;*/
                setListaBlog(response.data)
            })
        })

    }
    return (
        <div>

            <Link href={"/admin/blog/nuevoBlog"}><a>Crear Nuevo Blog</a></Link>
            <hr/>
            <table className="tabla">
                <thead> <hr/>
                    <tr className="encabezadotitulos">
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Fuente</th>
                        <th>Acción</th>
                    <hr/></tr>
                </thead>
                <tbody>
                    {listaBlog.map((blog, index) => {
                        return (
                            <tr key={`blog_${index}`} className="contenidosBlog">
                                <td>{blog.id}</td>
                                <td>{blog.titulo}</td>
                                <td>{blog.autor}</td>
                                <td><Link href={`/admin/blog/${blog.id}`}><a href="#">Actualizar</a></Link></td>
                                <td><div onClick={() => eliminar(blog.id)}>Eliminar</div></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPege;