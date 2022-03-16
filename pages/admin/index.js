import Link from "next/link";

function AdminPege(){
    return(
        <div>
            <Link href={"/admin/blog/nuevoBlog"}><a>Crear Nuevo Blog</a></Link>

        </div>
    )
}
export default AdminPege;