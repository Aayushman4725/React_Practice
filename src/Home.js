import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <BlogList blogs={blogs} title = "All Blogs!!!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>(blog.author === 'mario'))} title = "Mario's Blogs!!!" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;