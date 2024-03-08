import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaSkull } from 'react-icons/fa';

const LifeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: absolute;
  top: 10%;
  left: 20%;
`;

const Heart = styled(FaHeart)`
  font-size: 2.5em;
  width: 1.2em;
  color: red;
  margin-right: 0.5rem;
`;

const Skull = styled(FaSkull)`
  color: white;
  font-size: 2.5em;
`;

const LifeCounter = ({ lives }) => {
  return (
    <LifeContainer>
      {lives > 0 ? (
        <>
          {Array.from({ length: lives }, (_, index) => (
            <Heart key={index} />
          ))}
        </>
      ) : (
        <Skull />
      )}
    </LifeContainer>
  );
};

export default LifeCounter;