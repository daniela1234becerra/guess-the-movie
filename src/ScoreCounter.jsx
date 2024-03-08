import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ScoreContainer = styled.div`
  color: #fff;
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 1rem;
  position: absolute;
  top: 10%;
  left: 80%;
`;

const animateScore = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const ScoreText = styled.span`
  animation: ${animateScore} 0.5s ease-in-out;
`;

const ScoreCounter = ({ score }) => {
  const [animatedScore, setAnimatedScore] = useState(score);

  useEffect(() => {
    setAnimatedScore(score);
  }, [score]);

  return (
    <ScoreContainer>
      Score: <ScoreText>{animatedScore}</ScoreText>
    </ScoreContainer>
  );
};

export default ScoreCounter;