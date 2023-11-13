import  { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProvider";

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Login = () => {
const { signInUser, signInWithGoogle } = useContext(AuthContext);
const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result => {
      console.log(result.user);
      e.target.reset();
      navigate('/');
      toast.success('Successful Login');
    })
    .catch(error => {
      console.error(error);
      toast.error('Login error');
    });
};

const handleGoogle = () => {
  signInWithGoogle()
    .then(result => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
      toast.error('Login error');
    });



  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 10 }}>
        <CardContent>
          <Typography variant="h4" component="div" align="center" sx={{ mb: 4 }}>
            Login Now!
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            New here? Please <Link to="/register">Register</Link>
          </Typography>
          <Button
            onClick={handleGoogle}
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign In with Google
          </Button>
        </CardContent>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default Login;
