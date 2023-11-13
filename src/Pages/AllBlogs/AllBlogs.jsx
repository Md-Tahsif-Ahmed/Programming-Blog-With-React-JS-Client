import { useQuery } from '@tanstack/react-query';
import { Container, Grid } from '@mui/material';
import ABlog from './ABlog';

const AllBlogs = () => {
  const { isPending, error, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: () =>
    fetch('http://localhost:3000/allblogs')
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Add this line to check the data
      return data;
    }),

  });
    
  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Container sx={{ marginBottom: 10 }}>
      <h1 style={{ textAlign: 'center', marginY: 10 }}>
        Blogs
      </h1>
      <Grid container spacing={2}>
      {blogs.map((blog) => (
        <Grid item xs={4} key={blog._id}>
            <ABlog blog={blog}></ABlog>
        </Grid>
))}

      </Grid>
    </Container>
  );
};

export default AllBlogs;
