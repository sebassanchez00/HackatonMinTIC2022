import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../Styles/hideScrollBars.css'
import { Typography } from '@mui/material';

export default function TitlebarImageList() {
  return (
    <>
      <ImageList sx={{ width: '70%' }}>
        <ImageListItem key="Subheader" cols={2}>
          <Typography component="div" variant="h5">
            Planes destacado de la semana
          </Typography>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    title: 'Plan mascota no destacado',
    author: 'Chris Murray',
  },
  {
    img: 'https://images.unsplash.com/photo-1636729156232-aca66d42f042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Plan mascota no destacado',
    author: '@tobjvs',
  },
  {
    img: 'https://images.unsplash.com/photo-1531645762072-b4ce0546c7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Plan mascota no destacado',
    author: '@crocodileforest',
  },
  {
    img: 'https://images.unsplash.com/photo-1566073563120-8e01542e6686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80',
    title: 'Plan mascota no destacado',
    author: '@sokardash',
  },
  {
    img: 'https://images.unsplash.com/photo-1580230273708-4e7b8f6d63c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Plan mascota no destacado',
    author: '@sebcomantravel',
  },
  {
    img: 'https://images.unsplash.com/photo-1541802645635-11f2286a7482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Plan mascota no destacado',
    author: '@zacdurant',
  },
  {
    img: 'https://images.unsplash.com/photo-1607601099625-51037e7d42c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Plan mascota no destacado',
    author: 'Gary Ellis',
  },
  {
    img: 'https://images.unsplash.com/photo-1606150978407-982d0aff7be9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Plan mascota no destacado',
    author: '@theyshane',
  },
  {
    img: 'https://images.unsplash.com/photo-1525926834114-cea6d65b2a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Plan mascota no destacado',
    author: 'Justin Aikin',
  },
  {
    img: 'https://images.unsplash.com/photo-1500862341394-4477ad3e8af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Plan mascota no destacado',
    author: '@noobrustic',
  },
  {
    img: 'https://images.unsplash.com/photo-1504975598005-bdf0a1be9c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80',
    title: 'Plan mascota no destacado',
    author: '@alinabelogolova',
  },
  {
    img: 'https://images.unsplash.com/photo-1511467134950-e3c968bf539d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    title: 'Plan mascota no destacado',
    author: '@jasonguywolf',
    cols: 2,
  },
];