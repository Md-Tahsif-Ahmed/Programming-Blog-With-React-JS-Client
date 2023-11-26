 import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ErrorPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" textAlign="center">
          The page you are looking for does not exist.
        </Typography>
      </div>
    </Container>
  );
};

export default ErrorPage;
