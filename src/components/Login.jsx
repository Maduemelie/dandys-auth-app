import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://dandys-backend.onrender.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      console.log(data); // Handle response data as needed (e.g., store token in local storage)
      navigate('/login-success');
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
            backgroundColor: '#f6d8e0',
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
              sx={{
                width: '75%',
                margin: '5%',
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

            <TextField
              required
              sx={{
                width: '75%',
                margin: '5%',
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
            <Typography
              variant="body2"
              align="right"
              sx={{ textAlign: 'right', width: '75%', margin: '5%' }}
            >
              <Link href="#" color="#000">
                Forgot Password?
              </Link>
            </Typography>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: '75%',
                margin: '5%',
                backgroundColor: '#f6d8e0',
                '&:hover': {
                  backgroundColor: '#f3a6bf',
                },
                color: '#000',
                borderRadius: '10px',
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
