import { useQuery } from '@tanstack/react-query';
import { Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import ABlog from './ABlog';
import { useState } from 'react';

const AllBlogs = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const { isPending, error, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: () =>
      fetch('http://localhost:3000/allblogs')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // Filter and search mechanism applied.
  const filteredBlogs = blogs.filter((blog) => {
    const isCategoryMatch = category === 'all' || blog.category === category;
    const isTitleMatch = !search || blog.title.toLowerCase().includes(search.toLowerCase());

    return isCategoryMatch && isTitleMatch;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Container sx={{ marginBottom: 4 }}>
      <h1 style={{ textAlign: 'center', marginY: 2 }}>
        Blogs
      </h1>

    <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
    <FormControl style={{ maxWidth: '300px' }} variant="outlined" margin="normal" required>
        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          labelId="categories-label"
          label="Categories"
          name="categories"
          value={category}
          onChange={handleCategoryChange}
          size="small"
        >
          <MenuItem value="all">All Categories</MenuItem>
          <MenuItem value="Programming">Programming</MenuItem>
          <MenuItem value="Web Development">Web Development</MenuItem>
          <MenuItem value="Android App">Android App</MenuItem>
          <MenuItem value="Machine Learning">Machine Learning</MenuItem>
          <MenuItem value="Data Science">Data Science</MenuItem>
          <MenuItem value="iOS">iOS</MenuItem>
          <MenuItem value="iOS">Mobile App Development</MenuItem>
        </Select>
      </FormControl>
    <form onSubmit={handleSearch} style={{ marginBottom: 2, maxWidth: '300px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            style={{ flex: 1, borderRadius: '5px 0 0 5px', marginRight: 0 }}
            size="small"
            variant="outlined"
            placeholder="Search by Title"
            name="searchInput"
            value={search}
            onChange={handleSearch}
          />
          <Button type="submit" variant="contained" style={{ borderRadius: '0 5px 5px 0', padding: '8px'}} size="small">
            Search
          </Button>
        </div>
      </form>

      
    </div>

    <Grid container spacing={2} style={{ marginTop: 2 }}>
      {filteredBlogs.map((blog) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={blog._id}>
      <ABlog blog={blog}></ABlog>
      </Grid>
  ))}
</Grid>

    </Container>
  );
};

export default AllBlogs;