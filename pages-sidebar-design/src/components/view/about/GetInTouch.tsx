import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Grid, Container, Box } from '@mui/material';

interface FormData {
  fullName: string;
  email: string;
  address: string;
  contact: string;
  message: string;
}

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email || '')) {
      newErrors.email = 'Invalid email address';
    }

    // Add more validation as needed for other fields

    return newErrors;
  };

  const handleInputChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });

    setErrors({
      ...errors,
      [field]: '',
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission logic
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Box mt={6} pb={8}>
      <Container maxWidth='md'>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                label="Full Name"
                fullWidth
                value={formData.fullName}
                onChange={handleInputChange('fullName')}
                error={!!errors.fullName}
                helperText={errors.fullName}
                sx={{ mb: '16px', border: "1px solid #EBEBEB" }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                label="Email"
                value={formData.email}
                fullWidth
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: '16px', border: "1px solid #EBEBEB" }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <TextField
                fullWidth
                label="Address"
                value={formData.address}
                onChange={handleInputChange('address')}
                sx={{ mb: '16px', border: "1px solid #EBEBEB" }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <TextField
                label="Contact"
                fullWidth
                value={formData.contact}
                onChange={handleInputChange('contact')}
                sx={{ mb: '16px', border: "1px solid #EBEBEB" }}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Send Message"
                multiline
                fullWidth
                rows={4}
                value={formData.message}
                onChange={handleInputChange('message')}
                sx={{ mb: '16px', border: "1px solid #EBEBEB" }}
              />
            </Grid>
            <Box sx={{
              display: 'flex',
              m: 'auto'
            }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  mt: '16px', background: '#C09653', borderRadius: 3, '&:hover': {
                    background: '#C09653'
                  }
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default GetInTouch;
