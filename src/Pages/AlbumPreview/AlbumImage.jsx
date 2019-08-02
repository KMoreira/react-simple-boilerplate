import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  grid-area: 2 / 1 / 5 / 2;
`;

const FigureCaption = styled.figcaption`
  text-align: center;
  color: white;
  font-family: sans-serif;
  font-size: 1.2rem;
  line-height: calc(1.2rem + 6px);
`;

const Image = styled.img`
  margin: 0 auto;
  display: block;
`;

const AlbumImage = ({ src, alt, title }) => (
  <Figure>
    <Image
      src={src}
      alt={alt}
      title={title}
    />
    <FigureCaption>This is War</FigureCaption>
  </Figure>
);

export default AlbumImage;
