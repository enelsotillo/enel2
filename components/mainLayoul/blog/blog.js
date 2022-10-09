import Image from "next/image";
import Link from "next/link";
function Blog(props) {
  const blog = props.blog;
  return (
    <div>
      <Link href="#">
        <a>
          <article>
            <header>
              <hgroup>
                <h1>{blog.titulo}</h1>
              </hgroup>
            </header>
            <Image
              src={"/images/java.jpg"}
              alt="java"
              width={300}
              height={200}
              className="Java"
            />
            <p align="justify">{blog.contenido}</p>
            <footer>
              <p>{blog.autor} </p>
            </footer>
          </article>
        </a>
      </Link>
    </div>
  )}
export default Blog;
