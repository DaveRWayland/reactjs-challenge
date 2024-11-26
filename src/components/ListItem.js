import { ImageListItem, ImageListItemBar } from '@mui/material';
// import Image from 'next/image';
import { Image } from 'primereact/image';
import React from 'react';
import style from '@/styles/Gallery.module.css';

const ListItem = ({ image }) => {
  return (
    <div>
      <ImageListItem>
        <Image className={style.gallery_image} src={image.urls.regular} width='auto' alt='' preview />
        <ImageListItemBar
          className={style.gallery_bar_text}
          title={image.user.username}
          subtitle={image.alt_description}
        />
      </ImageListItem>
    </div>
  );
};

export default ListItem;
