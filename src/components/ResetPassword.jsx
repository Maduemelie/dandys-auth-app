// ResetPassword.js

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  //   const location = useLocation();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
        setError('Passwords do not match');
        
      return;
    }
    // Send request to backend to update password
    try {
        const{ token }= params; // Get token from params using useParams
        console.log(token);
      const response = await fetch(
        `https://dandys-backend.onrender.com/auth/reset-password/${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password, confirmPassword }),
        }
      );
      if (response.ok) {
        navigate('/'); // Redirect to login page after password reset
      } else {
        setError('Failed to reset password');
      }
    } catch (error) {
      setError('An error occurred while resetting password');
    }
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
    const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
          <Typography variant="h6">Reset Password</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              sx={{
                width: '80%',
                margin: '5% 10%',
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
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              InputLabelProps={{ style: { color: '#000' } }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              required
              sx={{
                width: '80%',
                margin: '5% 10%',
                textAlign: 'center',
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
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'} // Adjust here
              id="confirmPassword"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm Password"
              InputLabelProps={{ style: { color: '#000' } }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={handleToggleConfirmPasswordVisibility}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: '80%',
                margin: '5% 10%',
                backgroundColor: '#f6d8e0',
                '&:hover': {
                  backgroundColor: '#f3a6bf',
                },
                color: '#000',
                borderRadius: '10px',
              }}
            >
              Reset Password
            </Button>
          </form>
          {error && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};
export default ResetPassword;
