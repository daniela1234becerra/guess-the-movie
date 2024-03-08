import React, { useState } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import GuessInput from './GuessInput';
import LifeCounter from './LifeCounter';
import ScoreCounter from './ScoreCounter';
import './App.css'

const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
{ name: "The Matrix", emoji: "🕶️💊👽" },
{ name: "Titanic", emoji: "🚢❄️💔" },
{ name: "Jurassic Park", emoji: "🦖🌴🚙" },
{ name: "The Lion King", emoji: "🦁👑🌅" },
{ name: "Star Wars", emoji: "⚔️🚀🌌" },
{ name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
{ name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
{ name: "The Terminator", emoji: "🤖🔫🕶️" },
{ name: "Indiana Jones", emoji: "🤠🔍💎" },
{ name: "Back to the Future", emoji: "⏰🚗💥" },
{ name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
{ name: "The Godfather", emoji: "🍕🤵🔫" },
{ name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
{ name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
{ name: "Schindler's List", emoji: "📜🚂🔴" },
{ name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
{ name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
{ name: "Fight Club", emoji: "👊💼🚽" },
{ name: "Inception", emoji: "🌀👩‍🚀🎩" },
{ name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
];

const GameContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  const [currentMovie, setCurrentMovie] = useState(movies[0]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const handleGuess = (guess) => {
    if (guess.toLowerCase() === currentMovie.name.toLowerCase()) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setCurrentMovie(movies[randomIndex]);
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }
  };

  return (
    <GameContainer>
      <h2>Guess the Movie!</h2>
      <MovieCard emoji={currentMovie.emoji} />
      <GuessInput onGuess={handleGuess} />
      <LifeCounter lives={lives} />
      <ScoreCounter score={score} />
      {lives === 0 && <p>Game Over!</p>}
    </GameContainer>
  );
};

export default App;