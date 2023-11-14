import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import Swal from 'sweetalert2';

const Wishlist = ({blog}) => {
    const {_id, image, title, description, category } = blog;
    const deleteBlog =()=>{
        console.log(_id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/wishlist/${_id}`, {
              method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log('bala',data)
                if (data.deletedCount > 0) {
                  Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
                  
                } else {
                  Swal.fire('Error!', 'Failed to delete the blog.', 'error');
                }
              })
              .catch((error) => {
                console.error(error);
                Swal.fire('Error!', 'An error occurred while deleting the blog.', 'error');
              });
          }
        });
      }
    
    
    return (
        <Card sx={{ maxWidth: 400 }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
        {title}
      </Typography>
      <CardMedia sx={{ height: 200 }} image={image} title={title} />
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
        <Button onClick={()=>deleteBlog(_id)}  size="small">
          Remove Wishlist
        </Button>
      </CardActions>
    </Card>
    );
};

export default Wishlist;