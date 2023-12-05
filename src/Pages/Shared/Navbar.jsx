import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const pages = ['Home', 'Add Blog', 'All Blogs', 'Featured Blogs', 'Wishlist'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logout Successfully");
      })
      .catch(() => {
        toast("Logout Error");
      });
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LightbulbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem' }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Programming Helper
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                  { page === 'Home' ? (
                  <Link to="/">{page}</Link>
                ):
                   page === 'Add Blog' ? (
                  <Link to="/add_blog">{page}</Link>
                ) : page === 'All Blogs' ? (
                  <Link to="/all_blogs">{page}</Link>
                ) : page === 'Featured Blogs' ? (
                  <Link to="/featured">{page}</Link>
                ) : page === 'Wishlist' ? (<Link to="/wishlist">{page}</Link>) :(
                  <Link to={`/${page.toLowerCase().replace(' ', '_')}`}>{page}</Link>
                )}
              </Button>
            ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                  { page === 'Home' ? (
                  <Link to="/">{page}</Link>
                ):
                   page === 'Add Blog' ? (
                  <Link to="/add_blog">{page}</Link>
                ) : page === 'All Blogs' ? (
                  <Link to="/all_blogs">{page}</Link>
                ) : page === 'Featured Blogs' ? (
                  <Link to="/featured">{page}</Link>
                ) : page === 'Wishlist' ? (<Link to="/wishlist">{page}</Link>) :(
                  <Link to={`/${page.toLowerCase().replace(' ', '_')}`}>{page}</Link>
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0, marginRight: 4 }}>
                  <Avatar alt="User Avatar" src={user.photoURL} sx={{ width: 40, height: 40 }} />
                </IconButton>
                <Button onClick={handleLogOut} sx={{ p: 0, color: 'white' }}>
                  Logout
                </Button>
              </Tooltip>
            ) : (
              <>
                <Button component={Link} to="/login" color="inherit">
                  Login
                </Button>
                <Button component={Link} to="/register" color="inherit">
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
      <ToastContainer/>
    </AppBar>
  );
}

export default ResponsiveAppBar;
