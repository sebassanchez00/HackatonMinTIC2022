import React from 'react';
import { AppBar, Box, Typography, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <AppBar position="sticky">
      <Box
        sx={{ display: 'flex', height: '100px' }}
        justifyContent="space-around"
      >
        <Grid
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Typography variant="h6" noWrap>
            CIUDAD MASCOTAS
          </Typography>
        </Grid>
        <Grid></Grid>
        <Grid justifyContent="space-around">
          <GitHubIcon color="" />
          <FacebookIcon color="" />
          <InstagramIcon color="" />
        </Grid>
      </Box>
    </AppBar>

    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={6} md={8}>
    //     </Grid>
    //     <Grid item xs={6} md={4}>
    //     </Grid>
    //     <Grid item xs={6} md={4}>
    //     </Grid>
    //     <Grid item xs={6} md={8}>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}

export default Footer;
