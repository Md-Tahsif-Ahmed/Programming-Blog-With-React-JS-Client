import Swal from 'sweetalert2';
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const UpdateBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const blogs = useLoaderData();
    const blog = blogs.find((b)=>b._id === id);
    const { _id, title, image, category, short, long, time, date} = blog;


    const updateBlog = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const image = e.target.image.value;
        const category = e.target.categories.value;
        const short = e.target.short.value;
        const long = e.target.long.value;
        const time = e.target.time.value;
        const date = e.target.date.value;
    
        const update = { title, image, category, short, long, time, date };
        // Send data to the server
        fetch(`http://localhost:3000/allblogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(update),
            })
            .then((res) => {
                if (!res.ok) {
                throw new Error(`Server responded with status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                // Handle the response from the server as needed
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Blog Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'done'
                      })
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error.message);
            });
        }


    return (
        <Container maxWidth="sm">
      <Card sx={{ marginTop: 10 }}>
        <CardContent>
          <Typography variant="h4" component="div" align="center" sx={{ mb: 4 }}>
            Add Blog!
          </Typography>
          <form onSubmit={updateBlog}>
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
            <FormControl fullWidth variant="outlined" margin="normal" required>
              <InputLabel id="categories-label">Categories</InputLabel>
              <Select
                labelId="categories-label"
                label="Categories"
                name="categories"
                defaultValue=""
              >
                <MenuItem value="" disabled>
                  Select a category
                </MenuItem>
                <MenuItem value="Programming">Programming</MenuItem>
                <MenuItem value="Web Development">Web Development</MenuItem>
                <MenuItem value="Android App">Android App</MenuItem>
                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
                <MenuItem value="Data Science">Data Science</MenuItem>
                <MenuItem value="iOS">iOS</MenuItem>
                <MenuItem value="iOS">Mobile App Development</MenuItem>
              </Select>
            </FormControl>
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
            <TextField
              label="Date"
              name="date"
              type="date"
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
              Update BLOG
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </Container>
  );
};
export default UpdateBlog;