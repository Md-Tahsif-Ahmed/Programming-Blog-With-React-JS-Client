import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import a from "../../../assets/a.jpeg";
import b from "../../../assets/b.jpeg";
import c from "../../../assets/c.jpg";
import { Container, Button, Grid } from '@mui/material';

const Author = () => {
    const authors = [
        { name: 'Rakib Hasan', image: a },
        { name: 'Tamim Shahriar', image: b },
        { name: 'Jakir Hasan', image: c }
    ];

    return (
        <Container sx={{ marginY: 4 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Authors
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {authors.map((author, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ minWidth: 300 }}>
                            <CardActionArea sx={{ textAlign: 'center', marginY: 2 }}>
                                <Avatar alt={author.name} src={author.image} sx={{ width: 100, height: 100, margin: 'auto' }} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {author.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <Button variant="contained" style={{ backgroundColor: '#1976d2', borderColor: 'blue', marginRight: 1 }}>
                                            Views
                                        </Button>
                                        <Button variant="contained" style={{ backgroundColor: '#1976d2', borderColor: 'blue' }}>
                                            Blogs
                                        </Button>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Author;
