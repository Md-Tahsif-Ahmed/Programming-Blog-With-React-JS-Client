import { useEffect, useState } from "react";
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
        <Container sx={{marginBottom: 10}}>
           <h1 style={{textAlign: 'center', marginY: 10}}>
                Blog Categories
           </h1>
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
