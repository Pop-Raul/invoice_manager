import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import type { AuthDto } from '../models/AuthDto';
import type { Tokens } from '../models/Tokens';
import { signIn } from '../apis/authApi';
import { useNavigate } from 'react-router-dom'; 

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const dto: AuthDto = { email, password };
    try {
      const tokens: Tokens = await signIn(dto);
      localStorage.setItem('accessToken', tokens.access_token);
      localStorage.setItem('refreshToken', tokens.refresh_token);
      navigate('/invoices')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 1,
        maxWidth: 360,
        mx: 'auto',
        mt: 8,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h1" align="center">
        Login
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextField
        label="Parolă"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        inputProps={{ minLength: 6 }}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={loading}
      >
        {loading ? 'Loading' : 'Login'}
      </Button>
    </Box>
  );
};

export default LoginForm;
