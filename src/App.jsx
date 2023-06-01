import * as S from "./Global";
import useHooks from "./components/Hooks/useHooks";
import ImageArea from "./components/ImageArea";
import KeyboardArea from "./components/KeyboardArea";
import Modal from "./components/Modal";
import SecretWordArea from "./components/SecretWordArea";
import { Mouse, Keyboard } from "phosphor-react";

export default function App() {
  const {
    secretWord,
    rightLetters,
    wrongLetters,
    isWinner,
    isLoser,
    tipsMode,
    handleMouseClick,
    handleTipsMode,
  } = useHooks();

  return (
    <S.Container>
      <S.FlexArea direction="column">
        <Modal
          secretWord={secretWord}
          isWinner={isWinner}
          isLoser={isLoser}
          tipsMode={tipsMode}
        ></Modal>

        <S.Header>JOGO DA FORCA</S.Header>

        <ImageArea wrongLetters={wrongLetters}></ImageArea>

        <SecretWordArea rightLetters={rightLetters}></SecretWordArea>

        <KeyboardArea
          isWinner={isWinner}
          isLoser={isLoser}
          tipsMode={tipsMode}
          rightLetter={rightLetters}
          wrongLetter={wrongLetters}
          onClick={handleMouseClick}
          onTips={handleTipsMode}
        ></KeyboardArea>

        <S.InfoGame>
          <Mouse size={24} />
          <Keyboard size={30} />
        </S.InfoGame>
      </S.FlexArea>
    </S.Container>
  );
}
