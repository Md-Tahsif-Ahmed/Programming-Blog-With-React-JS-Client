import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; // Import the Button component

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast("The password is less than 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      toast("Do not have a capital letter");
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      toast("Do not have a special character");
    } else if(!/[0-9]/.test(password)){
      toast("Do not have a Numeric Number");
    }
    else {
      createUser(name, photo, email, password)
        .then((result) => {
          console.log("User registered:", result.user);
          toast("Successful Registration");
        })
        .catch((error) => {
          console.error("Registration error:", error);
          toast("Registration error");
        });
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 10 }}>
        <CardContent>
          <Typography variant="h4" component="div" align="center" sx={{ mb: 4 }}>
            Register Now!
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              label="Name"
              name="name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Photo URL"
              name="photo"
              type="url"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
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
              Register
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? Please <Link to="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default Register;
