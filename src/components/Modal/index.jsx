/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Container } from "./style";
import UseApi from "../Hooks/UseApi";

export default function Modal({ isWinner, isLoser, tipsMode, secretWord }) {
  const { description } = UseApi();
  const isOpen = isLoser || isWinner;
  const modalMessages = {
    winner: {
      title: "Vencedor!",
      description: "Parabéns você Top! Quero ver ganhar de novo.",
    },

    loser: {
      title: "Perdedor!",
      description: "Você é fraco! Aposto que vai correndo pra mamãe chorar.",
    },

    tips: {
      title: "Dica!",
      description: description,
    },
  };
  return (
    <Container open={isOpen || tipsMode}>
      {isWinner && (
        <>
          <h1>{modalMessages.winner.title}</h1>
          <p>{modalMessages.winner.description}</p>
          <h3>Palavra Secreta:</h3>
          <h2>{secretWord}</h2>
          <button onClick={() => location.reload()}>Jogar Novamente</button>
        </>
      )}

      {isLoser && (
        <>
          <h1>{modalMessages.loser.title}</h1>
          <p>{modalMessages.loser.description}</p>
          <h3>Palavra Secreta:</h3>
          <h2>{secretWord}</h2>
          <button onClick={() => location.reload()}>Jogar Novamente</button>
        </>
      )}
      {tipsMode && (
        <>
          <h1>{modalMessages.tips.title}</h1>
          <p>{modalMessages.tips.description}</p>
        </>
      )}
    </Container>
  );
}
