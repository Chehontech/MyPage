import React from 'react';

const Image = ({ src, alt, className}) => {
    const images = import.meta.glob('../assets/image/*.{jpg,jpeg,png,svg}', { 
      eager: true,
      query: '?url'
    });
    console.log(images);
    const getImagePath = () => {
       
      const key = `../assets/image/${src}`;
      console.log(key);
      return images[key]?.default || '../src/assets/image/dog.jpg';
    };

  return (
    <img
      src={getImagePath()}
      alt={alt}
      className={className}
    />
  );
};

export default Image;