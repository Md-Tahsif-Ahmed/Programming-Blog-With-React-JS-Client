import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Category = ({ cat }) => {
    const { title, image } = cat;

    return (
        <div>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="160"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                </CardContent>

                <Typography sx={{display: 'flex', justifyContent:'space-between'}}>
                    <Button>Share</Button>
                    <Button>More</Button>
                </Typography>

            </Card>
        </div>
    );
};

export default Category;
