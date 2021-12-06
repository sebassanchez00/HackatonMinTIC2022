import React, { useRef } from 'react';
import {
  Grid,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputLabel,
  InputAdornment,
  FormControl,
  Input,
  TextField,
  Autocomplete,
  Rating
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Parallax, Background } from 'react-parallax';
import Carousel from 'react-material-ui-carousel';
import Image from 'material-ui-image';
import { width } from '@mui/system';
import img1 from '../assets/images/khamkeo-vilaysing-uaQhu9zw7dc-unsplash.jpg';
import img2 from '../assets/images/sahin-sezer-dincer-WnKIHYO8SvA-unsplash.jpg';
import img3 from '../assets/images/tamara-bellis-OjuwZq13RH0-unsplash.jpg';
import img4 from '../assets/images/viktoria-bolonina-LYONQoDDe-c-unsplash.jpg';
import img5 from '../assets/images/artem-beliaikin-zfzt6yz0DE8-unsplash.jpg';
import logo from '../assets/icons/logo.png';
import BackToTop from '../components/ScrollTop';
import ImageListDest from '../components/ImageListDest';
import ImageList from '../components/ImageList';
const Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 }]

function Home() {

  return (
    <Box sx={{ width: '100vw' }}>
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImageAlt="the dog"
        strength={-200}
      >
        <Box sx={{ height: '75vh', width: '100vw' }}>
          <Grid sx={{ height: '100%', width: '100vw' }}>
            <Box
              sx={{
                position: 'absolute',
                zIndex: 1000,
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
                src={img5}
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
              <Image
                src={img2}
                imageStyle={{ height: '100vh', width: '100vw' }}
              />
            </Carousel>
          </Grid>
        </Box>
      </Parallax>
      <Parallax style={{ paddingTop: '50px', paddingBottom: '10px' }}>
        <Grid id="back-to-search">
          <Grid container justifyContent="center">
            <Accordion
              onClick={() =>
                scroller.scrollTo('back-to-search', {
                  offset: -100,
                  smooth: true,
                })
              }
              elevation={4}
              sx={{
                backgroundColor: 'primary',
                width: '70vw',
                mx: 3,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">
                  Encuentra aquí los mejores planes para ti y tu mascota
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Autocomplete
                  autoSelect
                  autoComplete
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField {...params} label="Buscador" />
                  )}
                />
                <Autocomplete
                  autoSelect
                  autoComplete
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField {...params} label="Por ciudad" />
                  )}
                />
                <Autocomplete
                  autoSelect
                  autoComplete
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField {...params} label="Por ciudad" />
                  )}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid
            sx={{ my: 3, width: '100vw', mx: 0 }}
            container
            justifyContent="space-around"
            item
            sm={12}
          >
            <ImageListDest />
          </Grid>
        </Grid>
      </Parallax>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImageAlt="the dog"
        strength={-200}
      >
        <Grid
          sx={{
            height: '300px',
            width: '50vw',
            margin: 'auto',
            my: 3,
          }}
          item
          sm={12}
        >
          <Carousel
            style={{
              margin: auto
            }}
            indicators={true}
            navButtonsAlwaysInvisible={false}
            interval={5000}
          >
            <Card sx={{ maxWidth: 600 }} elevation={4}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amanda R - Excelente Plan!!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plan perfecto si amas a los peluditos y conocer paisajes
                  hermosos!!! Buena alternativa si no tienes parche para
                  disfrutar estos planes.
                </Typography>
              </CardContent>
              <CardActions>
                <Rating name="disabled" value={4} disabled />
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 600 }} elevation={4}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1531670046674-fd64cd957b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jimmy - V Primera experiencia con el parche criollo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Una buena opción para salir con tu perro y otra forma de
                  descanso para los q vivimos la cotidianidad y el caos de
                  bogotá.
                </Typography>
              </CardContent>
              <CardActions>
                <Rating name="disabled" value={3} disabled />
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 600 }} elevation={4}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1484190929067-65e7edd5a22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gustavo S - Paseo canino
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buen parche, buena energia una gran familia donde puedes pasae
                  un rato agradable con tu mascota y amigos
                </Typography>
              </CardContent>
              <CardActions>
                <Rating name="disabled" value={3} disabled />
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 600 }} elevation={4}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1495953852792-8b6722cbd195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Josemauriciob - Excelente opción de fds
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Excelente opción para un delicioso almuerzo familiar. El lugar
                  presenta una decoración super especial y amistosa con el
                  ambiente, para que todos los miembros de la familia disfruten,
                  incluyendo la mascota.
                </Typography>
              </CardContent>
              <CardActions>
                <Rating name="disabled" value={4} disabled />
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 600 }} elevation={4}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1480279237099-0c30d0fdf76d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  anfela87 - Familia y mascotas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Este es el lugar perfecto para que los adultos coman
                  tranquilos mientras los pequeños juegan a la vista y en un
                  lugar totalmente seguro. La granja de animales brinda una
                  experiencia para que los niños los alimenten y los observen en
                  su entorno
                </Typography>
              </CardContent>
              <CardActions>
                <Rating name="disabled" value={5} disabled />
              </CardActions>
            </Card>
          </Carousel>
        </Grid>
      </Parallax>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImageAlt="the dog"
        strength={-200}
      >
        <Grid
          item
          sx={{ my: 3, width: '100vw', mx: 0 }}
          sm={12}
          container
          justifyContent="space-around"
        >
          <ImageList />
        </Grid>
      </Parallax>
    </Box>
  );
}

export default Home;
