import React from 'react';
import {
  Grid,
  Paper,
  Button,
  Box,
  ImageListItemBar,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';

import { Parallax, Background } from 'react-parallax';
import Carousel from 'react-material-ui-carousel';
import Image from 'material-ui-image';
import { sizing, width } from '@mui/system';
import img1 from '../assets/images/khamkeo-vilaysing-uaQhu9zw7dc-unsplash.jpg';
import img2 from '../assets/images/sahin-sezer-dincer-WnKIHYO8SvA-unsplash.jpg';
import img3 from '../assets/images/tamara-bellis-OjuwZq13RH0-unsplash.jpg';
import img4 from '../assets/images/viktoria-bolonina-LYONQoDDe-c-unsplash.jpg';
import logo from '../assets/icons/logo.png';

function Home() {
  return (
    <Box>
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImageAlt="the dog"
        strength={-200}
      >
        <Box sx={{ height: '89vh', width: '100vw' }}>
          <Grid sx={{ height: '100%', width: '100vw' }}>
            <Box
              sx={{
                position: 'absolute',
                zIndex: 2000,
                height: '100vh',
                width: '100vw',
              }}
            >
              <Grid
                container
                justifyContent="space-around"
                sx={{
                  height: '100%',
                  width: '100%',
                  alignContent: 'space-around',
                }}
              >
                <Grid>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"

                      image={logo}
                      alt="ciudad mascotas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Ciudad Mascotas
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Los mejores planes para ti y tu mascota.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small">Share</Button> */}
                      <Button size="small">Buscar Planes</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid></Grid>
                <Grid></Grid>
              </Grid>
            </Box>
            <Carousel
              indicators={true}
              navButtonsAlwaysInvisible={false}
              interval={10000}
            >
              <Image
                src={img3}
                imageStyle={{ height: '100vh', width: '100vw' }}
              />
              <Image
                src={img2}
                imageStyle={{ height: '100vh', width: '100vw' }}
              />
              <Image
                src={img1}
                imageStyle={{ height: '100vh', width: '100vw' }}
              />
              <Image
                src={img4}
                imageStyle={{ height: '100vh', width: '100vw' }}
              />
            </Carousel>
          </Grid>
        </Box>
      </Parallax>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImageAlt="the dog"
        strength={-200}
      >
        Aqui va el componente de los planes y el buscador
        <div style={{ height: '100vh', width: '100vw', backgroundColor:'orange'}} />
      </Parallax>
    </Box>
  );
}

export default Home;
