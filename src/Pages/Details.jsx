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
import { useQuery } from '@tanstack/react-query';
import ShowComment from './ShowComment';

const Details = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const blogs = useLoaderData();
  const blog = blogs.find((b) => b._id === id);
  const { _id, title, image, short, long, time, categories, date, email } = blog;

  const handleComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const name = user.displayName;
    const photo = user.photoURL;
    const blog_id = _id;

    console.log(comment, name, photo);

    const com = { comment, name, photo, blog_id };

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
//   for comment section
  const { isPending, error, data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: () =>
      fetch('http://localhost:3000/comments')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', paddingTop: '64px' }}>
      {/* Add the style to align the card center */}
    <div>
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
    </div>
      {/* Add the style to create space for the footer at the bottom */}
      <div style={{ flex: '1' }}></div>
<div >
    
{    
      (email === user.email) ? (
        <Typography variant="h6" gutterBottom>
            Cannot comment on own blog!
        </Typography>
        ) : (
          
           <form onSubmit={handleComment} style={{ display: 'flex', marginTop: 16, justifyContent: 'start' }}>
            <Textarea placeholder="Try to comment" name="comment" required sx={{ mr: 2 }} />
            <Button type="submit">Comment</Button>
            </form>
        )
}
    <div style={{ marginTop: '16px', marginLeft: '6px' }}>
          <Typography variant="h6" gutterBottom>
            Comments:
          </Typography>
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            comments
              .filter((comment) => comment.blog_id === _id)
              .map((comment) => (
                <ShowComment key={comment._id} comment={comment} />
              ))
          )}
        </div>
</div>
    </div>
  );
};

export default Details;
