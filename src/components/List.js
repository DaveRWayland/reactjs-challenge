import React from 'react';
import { ImageList } from '@mui/material';

const List = ({ children }) => {
  return (
    <>
      <ImageList className='mt-5' variant='masonry' cols={4} gap={8}>
        {children}
      </ImageList>
    </>
  );
};

export default List;
