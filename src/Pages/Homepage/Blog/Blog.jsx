import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Blog = ({blog}) => {
    const {image, title, description, category } = blog;
    return (
        <div>
            <Card sx={{ maxWidth: 400 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
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
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                     {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent:'space-between'}}>
                    <Button size="small">Details</Button>
                    <Button size="small">Wishlist</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Blog;