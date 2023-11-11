import Swal from 'sweetalert2';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const NewsLatter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    if (email) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thank you for subscribing to our Newsletter',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div style={{marginTop:10}}>
    <h1 style={{textAlign: 'center', marginTop:10}}>Newsletter</h1>
      <form onSubmit={handleSubscribe}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="center" alignItems="center" my={5}>
            <input
              style={{ padding: '16px', fontSize: '16px', width: '400px', borderRadius: '8px 0px 0px 8px', borderRight: 'none', borderColor: '#1976d2' }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <button style={{ padding: '18px', fontSize: '16px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '0px 8px 8px 0px'  }}>Subscribe</button>
 
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default NewsLatter;
