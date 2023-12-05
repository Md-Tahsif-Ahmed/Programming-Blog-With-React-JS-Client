import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { Container, Grid } from "@mui/material";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://programming-blog-server-three.vercel.app/allblogs', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <Container sx={{ marginBottom: 10 }}>
      <h1 style={{ textAlign: 'center', marginY: 10 }}>
        Blogs
      </h1>
      <Grid container spacing={2}>
        {blogs.slice(0, 6).map(blog => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Blog blog={blog}></Blog>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
