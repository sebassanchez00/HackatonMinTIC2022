import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Toolbar, Container } from '@mui/material';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from '../pages/Home';
import CrearOferta from '../pages/CrearOferta';
import Login from '../pages/Login';
import { ThemeProvider } from '@mui/material/styles';
import Tema from './Theme';
import BackToTop from './ScrollTop';
import '../Styles/hideScrollBars.css';

const App = function () {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={Tema}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <NavigationBar />
            <Toolbar />
            <Box sx={{ mt: '5px'}} className="hsb" id="back-to-top-anchor">
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/crear_oferta" element={<CrearOferta />} />
                  <Route exact path="/login" element={<Login/>}/>
                </Routes>
              </BrowserRouter>
            </Box>
            <Footer />
          </Grid>
        </Box>
        <BackToTop />
      </ThemeProvider>
    </>
  );
};

export default App;
