import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const GuessInput = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(guess.toLowerCase());
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Your answer..."
        />
        <Button type="submit">Send</Button>
      </InputContainer>
    </form>
  );
};

export default GuessInput;