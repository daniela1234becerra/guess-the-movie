import React from 'react';
import styled from 'styled-components';
import './MovieCard.css';

const EmojiContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const MovieCard = ({ emoji }) => {
  return (
    <div>
      <EmojiContainer>{emoji}</EmojiContainer>
    </div>
  );
};

export default MovieCard;