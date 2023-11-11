import React, { useEffect, useState } from "react";
import Category from "./Category";
import Grid from '@mui/material/Grid';
import { Container, Typography } from "@mui/material";

const Categories = () => {
    const [cats, setcat] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcat(data));
    }, []);

    return (
        <Container>
           <div style={{textAlign: 'center', marginTop: 15}}>
           <Typography gutterBottom variant="h3" component="div">
                Blog Categories
            </Typography>
           </div>
            <Grid container spacing={2}>
                {
                    cats.map(cat => 
                        <Grid item xs={2} key={cat.id}>
                            <Category cat={cat} />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    );
};

export default Categories;
