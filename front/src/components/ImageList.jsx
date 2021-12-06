import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../Styles/hideScrollBars.css';
import { Typography } from '@mui/material';

export default function TitlebarImageList() {
  return (
    <>
      <ImageList sx={{ width: '70%' }} className="hsb">
        <ImageListItem key="Subheader" cols={8}>
          <Typography component="div" variant="h5">
            Mas lugares y planes para ti y tu compañero inseparable.
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
