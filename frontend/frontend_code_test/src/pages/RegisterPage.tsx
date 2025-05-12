import { Box, TextField, Button, Typography, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

export function RegisterPage() {
//   const nav = useNavigate();


  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <Box component="form" sx={{ display: 'grid', gap: 2 }}>
        <TextField name="email" label="Email" fullWidth required />
        <TextField name="password" label="Parolă" type="password" fullWidth required />
        <Button type="submit" variant="contained">Login</Button>
      </Box>
    </Container>
  );
}

export default RegisterPage;