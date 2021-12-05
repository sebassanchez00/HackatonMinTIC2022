import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid } from '@mui/material';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from '../pages/Home';
import CrearOferta from '../pages/CrearOferta';
import { red, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red[400],
    },
    secondary: {
      // This is green.A700 as hex.
      main: orange[400],
    },
  },
});

const App = function () {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <NavigationBar />

            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/crear_oferta" element={<CrearOferta />} />
              </Routes>
            </BrowserRouter>

            <Footer />
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
