import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
 

const AddBlogs = () => {
  const navigate = useNavigate();

  const addBlog = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const categories = e.target.categories.value;
    const short = e.target.short.value;
    const long = e.target.long.value;
    const time = e.target.time.value;

    const blog = { title, image, categories, short, long, time };

    try {
      const response = await fetch('http://localhost:3000/allblogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data:", data);
      // Handle response from the server as needed
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 10 }}>
        <CardContent>
          <Typography variant="h4" component="div" align="center" sx={{ mb: 4 }}>
            Add Blog!
          </Typography>
          <form onSubmit={addBlog}>
            <TextField
              label="Title"
              name="title"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Image Url"
              name="image"
              type="url"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Categories"
              name="categories"
              select
              variant="outlined"
              fullWidth
              margin="normal"
              required
            >
              <option value="Programming">Programming</option>
              <option value="Web Development">Web Development</option>
              <option value="Android App">Android App</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Science">Data Science</option>
              <option value="iOS">iOS</option>
            </TextField>
            <TextField
              label="Short Description"
              name="short"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Long Description"
              name="long"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Current Time"
              name="time"
              type="time"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              ADD BLOG
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default AddBlogs;
