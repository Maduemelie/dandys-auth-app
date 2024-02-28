import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email form")
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setSuccessMessage('');
      return;
    }
    try {
      const response = await fetch(
        'https://dandys-backend.onrender.com/auth/forget-password',
        
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        setSuccessMessage('Password reset link sent successfully');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to send password reset link');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred while sending the request');
      setSuccessMessage('');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(to bottom right,#f6d8e0, #fff)',
            borderRadius: '10px',
            padding: '20px',
            width: '100%',
            height: '60vh',
            '@media (min-width:600px)': {
              width: '400px',
            },
          }}
        >
          <img
            src={require('../asset/logo.jpg')}
            alt="Logo"
            style={{
              width: '50px',
              marginBottom: '10px',
              borderRadius: '50%',
            }}
          />
          <Typography variant="h6">
            Enter your email to reset your password
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              sx={{
                width: '80%',
                margin: '10%',
                backgroundColor: '#fff',
                borderRadius: '10px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#f6d8e0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#f6d8e0',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#f6d8e0',
                  },
                },
              }}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              InputLabelProps={{ style: { color: '#000' } }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: '80%',
                margin: '10%',
                backgroundColor: '#f6d8e0',
                '&:hover': {
                  backgroundColor: '#f3a6bf',
                },
                color: '#000',
                borderRadius: '10px',
              }}
            >
              Send Email Link
            </Button>
          </form>
          {errorMessage && (
            <Typography variant="body1" color="error">
              {errorMessage}
            </Typography>
          )}
          {successMessage && (
            <Typography variant="body1" color="primary">
              {successMessage}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
