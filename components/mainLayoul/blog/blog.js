import Image from "next/image";
function Blog(props) {
const blog=props.blog;
  return (
    /*<div  >
        <h3 className="titulo">{blog.titulo}</h3>
        <p className="contanido">{blog.contenido}</p>
        <p className="fuente">Fuente: {blog.autor}</p>
    </div>
    */
    <section>
    <article>
        <header>
            <hgroup>
                <h1>
                 {blog.titulo}
                </h1>
            </hgroup>
        </header>
       
        <p>{blog.contenido}</p>
            <Image src={"/Java.jpg"} alt="java" width={300} height={200} className="Java"/>
       
        <footer>
            <p>{blog.autor} </p>
        </footer>
    </article>
</section>
  );
}

export default Blog;