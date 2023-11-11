import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer style={{  width: '100%' }}>
      <Container component="div" maxWidth="" sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: (theme) => theme.palette.primary.contrastText, padding: (theme) => theme.spacing(3, 0) }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Programming Helper
            </Typography>
          </Grid>
          <Grid item>
            <IconButton component={Link} href=" " target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </IconButton>
            <IconButton component={Link} href=" " target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
