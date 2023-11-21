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

const Details = () => {
    const { id } = useParams();
    const blogs = useLoaderData();
    const blog = blogs.find((b) => b._id === id);
    const {_id, title, image, short, long, time, categories, date } = blog;

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
                        Time: {time}  Date: {date}
                    </Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/update/${_id}`}><Button size="small">Update</Button></Link>
                    <Button size="small">
                        Wishlist
                    </Button>
                </CardActions>
            </Card>
            {/* Add the style to create space for the footer at the bottom */}
            <div style={{ flex: '1' }}></div>
        </div>
    );
};

export default Details;
