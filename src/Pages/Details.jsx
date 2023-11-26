import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { Fullscreen } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Textarea from '@mui/joy/Textarea';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Details = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const blogs = useLoaderData();
  const blog = blogs.find((b) => b._id === id);
  const { _id, title, image, short, long, time, categories, date } = blog;

  const handleComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const name = user.displayName;
    const photo = user.photoURL;

    console.log(comment, name, photo);

    const com = { comment, name, photo };

    try {
      const response = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(com),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Comment Successfully Added',
          icon: 'success',
          confirmButtonText: 'done',
        });
      }
      // Handle response from the server as needed
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', paddingTop: '64px' }}>
      {/* Add the style to align the card center */}
      <Card sx={{ width: '50vw' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {title}
        </Typography>

        <CardMedia>
          <PhotoProvider>
            <PhotoView src={image}>
              <img style={{ width: '100%', height: 200 }} src={image} title={title} alt={title} />
            </PhotoView>
          </PhotoProvider>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {categories}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Short Description: {short}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Long Description: {long}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time: {time} Date: {date}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/update/${_id}`}>
            <Button size="small">Update</Button>
          </Link>
          <Button size="small">Wishlist</Button>
        </CardActions>
      </Card>
      {/* Add the style to create space for the footer at the bottom */}
      <div style={{ flex: '1' }}></div>

      <form onSubmit={handleComment}>
        <Textarea placeholder="Try to submit with no text!" name="comment" required sx={{ mb: 1 }} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Details;
