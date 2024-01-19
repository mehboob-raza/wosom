import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Grid, Container, Box, MenuItem, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


interface FormData {
  fullName: string;
  email: string;
  address: string;
  contact: string;
    message: string;
    number: string;
    location:string
}

const ReqQoutation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    contact: '',
      message: '',
      number: '',
    location:''
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
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Your Name"
                fullWidth
                value={formData.fullName}
                onChange={handleInputChange('fullName')}
                error={!!errors.fullName}
                helperText={errors.fullName}
                sx={{
                    mb: '16px',
                    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #D9D9D9",
                }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                label="Email Address"
                value={formData.email}
                fullWidth
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                    mb: '16px',
                    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #D9D9D9",
                }}
              />
            </Grid>   
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                label="Cotact Number"
                value={formData.number}
                fullWidth
                onChange={handleInputChange('number')}
                error={!!errors.number}
                helperText={errors.number}
                sx={{
                    mb: '16px',
                    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #D9D9D9",
                }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Data"
                            sx={{
                                mb: '16px',
                                boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
                                border: "1px solid #D9D9D9",
                                width: "100%",
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                label="Location"
                select
                fullWidth
                value={formData.location}
                onChange={handleInputChange('location')}
                sx={{
                    mt: '8px',
                    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #D9D9D9",
                }}
              >
                <MenuItem value="location1">Location 1</MenuItem>
                <MenuItem value="location2">Location 2</MenuItem>
                <MenuItem value="location3">Location 3</MenuItem>
              </TextField>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Message"
                multiline
                fullWidth
                rows={4}
                value={formData.message}
                onChange={handleInputChange('message')}
                sx={{
                    mb: '16px',
                    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #D9D9D9",
                }}
              />
            </Grid>
          </Grid>
        </form>

        <Box>
            <Typography variant='body1' sx={{
                color: '#9D9C9C',
                      mt: 2,
                mb:4
            }}>
                By clicking 'Request Quote', you agree that your information will be shared with the vendor. Please see our Privacy Policy and Terms of Use for details.
            </Typography>
        </Box>      

        <Box sx={{
              display: 'flex',
              justifyContent: 'end',
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
      </Container>
    </Box>
  );
};

export default ReqQoutation;
