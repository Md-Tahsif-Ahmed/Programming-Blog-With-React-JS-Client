import { useEffect, useState } from "react";
import Category from "./Category";
import Grid from '@mui/material/Grid';
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

const Categories = () => {
    const [cats, setcat] = useState([]);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcat(data));
    }, []);

    return (
        <Container sx={{ marginBottom: 10 }}>
            <Typography variant="h4" align="center" sx={{ marginY: 4 }}>
                Blog Categories
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {cats.map((cat) => (
                    <Grid item key={cat.id} xs={6} lg={isLargeScreen ? 2 : 4}>
                        <Category cat={cat} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Categories;
