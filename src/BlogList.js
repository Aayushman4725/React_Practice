const BlogList = ({blogs,title,}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <p>Written By {blog.author}</p>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;