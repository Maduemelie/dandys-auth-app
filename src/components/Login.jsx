import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
  IconButton,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedType, setSelectedType] = useState('client');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5300/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data); // Handle response data as needed (e.g., store token in local storage)
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            backgroundColor: 'rgba(255, 182, 193,0.5)',
            borderRadius: '5px',
            width: '100%',
            '@media (min-width:600px)': {
              width: '400px',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <img
              src={require('../asset/dandys.jpeg')}
              alt="Login"
              style={{
                width: '100%',
                opacity: 0.4,
                borderRadius: '5px 5px 0 0',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '70%',
                left: '15%', // Adjust left spacing here for the logo
                transform: 'translate(-50%, -50%)',

                zIndex: 2,
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
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '80%',
                left: '30%', // Adjust left spacing here
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#fff',
                padding: '20px',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>
                You're welcome
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem' }}>
                Let's get you set for login
              </Typography>
            </Box>
          </Box>

          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              width: '100%',
              borderRadius: '5% 5% 0 0',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              <Link
                href="#"
                onClick={() => setSelectedType('client')}
                underline={selectedType === 'client' ? 'always' : 'none'}
                sx={{
                  fontSize: '14px',
                  color: '#d9316c',
                  fontWeight: 'bold',
                  mb: '5px',
                }}
                style={{
                  textDecorationColor:
                    selectedType === 'client' ? '#d9316c' : 'inherit',
                }}
              >
                Client
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                href="#"
                onClick={() => setSelectedType('professional')}
                underline={selectedType === 'professional' ? 'always' : 'none'}
                sx={{
                  fontSize: '14px',
                  color: '#d9316c',
                  fontWeight: 'bold',
                }}
                style={{
                  textDecorationColor:
                    selectedType === 'professional' ? '#d9316c' : 'inherit',
                  marginBottom: '5px',
                }}
              >
                Professional
              </Link>
            </Typography>
            <TextField
              required
              sx={{ width: '75%', margin: '5%' }}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />

            <TextField
              required
              sx={{ width: '75%', margin: '5%' }}
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
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
            <Typography
              variant="body2"
              align="right"
              sx={{ textAlign: 'right', width: '75%', margin: '5%' }}
            >
              <Link href="#" color="primary">
                Forgot Password?
              </Link>
            </Typography>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: '75%',
                margin: '5%',
                backgroundColor: 'rgba(255, 182, 193, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 182, 193, 0.7)',
                },
              }}
            >
              Sign In
            </Button>

            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              New User?{' '}
              <Link href="/signup" color="primary">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
