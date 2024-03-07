import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
export const Blog = () => {
    const {id} = useParams()
    const {loading, blog} = useBlog({
        id: id || ""
    });
    if (loading){
        return <div>
            <Appbar />
            <div className="flex justify-center">
            <div>
                <BlogSkeleton />
            </div>
        </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}