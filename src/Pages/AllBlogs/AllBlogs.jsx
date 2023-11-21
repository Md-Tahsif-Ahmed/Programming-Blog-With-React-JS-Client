import { useQuery } from '@tanstack/react-query';
import { Container, Grid } from '@mui/material';
import ABlog from './ABlog';
import { useState } from 'react';

const AllBlogs = () => {
  const [search, setSearch] = useState('');

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
    if (search && !blog.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Container sx={{ marginBottom: 10 }}>
      <h1 style={{ textAlign: 'center', marginY: 10 }}>
        Blogs
      </h1>
      <form onSubmit={handleSearch} style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex' }}>
          <input
            style={{ padding: 6, borderRadius: '10px 0 0 10px' }}
            type="text"
            placeholder="Search by Title"
            name="searchInput"
            value={search}
            onChange={handleSearch}
          />
          <button type="submit" style={{ padding: 6, borderRadius: '0 10px 10px 0' }}>
            Search
          </button>
        </div>
      </form>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {filteredBlogs.map((blog) => (
          <Grid item xs={4} key={blog._id}>
            <ABlog blog={blog}></ABlog>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllBlogs;
