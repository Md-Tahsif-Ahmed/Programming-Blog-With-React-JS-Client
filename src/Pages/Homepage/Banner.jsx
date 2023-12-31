import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const BannerContainer = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'transparent', // Customize the background color or use an image
  backgroundImage: 'url("https://i.ibb.co/ZzzM6Qq/banner.jpg")', // Replace with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px', // Adjust the height as needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(2), // Add padding for better responsiveness
  [theme.breakpoints.down('sm')]: {
    height: '300px', // Adjust height for smaller screens
  },
  [theme.breakpoints.down('xs')]: {
    height: '200px', // Adjust height for extra small screens
  },
}));

const BannerText = styled('div')(({ theme }) => ({
  color: '#fff', // Customize the text color
  fontSize: '24px', // Customize the font size
  fontWeight: 'bold', // Customize the font weight
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a text shadow if desired
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px', // Adjust font size for smaller screens
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '16px', // Adjust font size for extra small screens
  },
}));

const BannerSection = () => {
  return (
    <Container maxWidth="lg">
      <Box mx="auto" mt={4}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <BannerContainer>
            <BannerText>
              <h1>Destination Pro of Programming</h1>
              <p>Lets, learn and practice core Concept of programming</p>
            </BannerText>
          </BannerContainer>
        </motion.div>
      </Box>
    </Container>
  );
};

export default BannerSection;
