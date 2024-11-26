import React, { useEffect, useState } from 'react';
import style from '@/styles/Gallery.module.css';
import List from '@/components/List';
import ListItem from '@/components/ListItem';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages();
  }, []);
  const getImages = () => {
    fetch('/api/get-images')
      .then((data) => data.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  };

  console.log(images);
  return (
    <>
      <div className={style.gallery_container}>
        <h1>Gallery</h1>
        {loading && <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth='8' />}
        <List>{images && images.map((image, index) => <ListItem key={image.id} image={image} />)}</List>
      </div>
    </>
  );
}
