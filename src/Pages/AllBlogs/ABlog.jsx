import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ABlog = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const { image, title, description, category } = blog;

  const addWishlist = () => {
    console.log('add');
    blog.email = user.email;
    console.log('All value: ', blog);
    // send data to server
    fetch(`http://localhost:3000/wishlist/${blog.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server responded with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("hh", data);
        // Handle response from the server as needed
      });
  };

  
  return (
    <Card sx={{ maxWidth: 400}}>
      <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
        {title}
      </Typography>

      <CardMedia>
        <PhotoProvider>
          <PhotoView src={image}>
            <img style={{ width: '100%', height: 200}} src={image} title={title} alt={title} />
          </PhotoView>
        </PhotoProvider>
      </CardMedia>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">Details</Button>
        <Button onClick={() => addWishlist(blog)} size="small">
          Wishlist
        </Button>
      </CardActions>
    </Card>
  );
};

export default ABlog;