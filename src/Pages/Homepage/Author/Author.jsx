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
import { Container } from '@mui/material';
import { blue } from '@mui/material/colors';

const Author = () => {
    return (

        <Container sx={{marginY: 10}}>
            <h1 style={{textAlign: 'center'}}>Authors</h1>
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4,}}>
            <Card sx={{ minWidth: 300 }}>
                <CardActionArea sx={{ textAlign: 'center',  marginY:2 }}>
                    <Avatar alt="Cindy Baker" src={a} sx={{ width: 100, height: 100, margin: 'auto' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Rakib Hasan
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <button style={{backgroundColor: '#1976d2', borderColor:'blue'}}>Views</button>
                            <button style={{backgroundColor: '#1976d2', borderColor:'blue'}}>Blogs</button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ minWidth: 300 }}>
                <CardActionArea sx={{ textAlign: 'center',  marginY:2  }}>
                    <Avatar alt="Cindy Baker" src={b} sx={{ width: 100, height: 100, margin: 'auto' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tamim Shahriar  
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <button style={{backgroundColor: '#1976d2', borderColor:'blue'}}>Views</button>
                            <button style={{backgroundColor: '#1976d2', borderColor:'blue'}}>Blogs</button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ minWidth: 300 }}>
                <CardActionArea sx={{ textAlign: 'center', marginY:2  }}>
                    <Avatar alt="Cindy Baker" src={c} sx={{ width: 100, height: 100, margin: 'auto' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jakir Hasan
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <button style={{backgroundColor: '#1976d2', borderColor:'blue'}}>Views</button>
                            <button style={{backgroundColor: '#1976d2', borderColor:'blue'}}>Blogs</button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
        </Container>
    );
};

export default Author;
