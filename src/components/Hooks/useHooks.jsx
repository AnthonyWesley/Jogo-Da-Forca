/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import words from "../Data/words";
export default function useHooks() {
  const filterWordSecret = (word) =>
    word
      .toUpperCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const [letter, setLetter] = useState("");
  const [secretWord, setSecretWord] = useState(filterWordSecret(words));
  const [rightLetters, setRightLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [tipsMode, setTipsMode] = useState(false);

  const isWinner = secretWord
    .split("")
    .every((letter) => rightLetters.includes(letter));

  const isLoser = wrongLetters.length == 6;

  const handleMouseClick = (e) => {
    const keyValue = e.target.innerText;
    console.log(e.target);

    setLetter(keyValue);
  };

  const handleKeyboardPress = (e) => {
    if (isPressedLetter(e.keyCode)) {
      let keyPress = e.key.toUpperCase();
      setLetter(keyPress);
    }
  };

  const isRightLetters = () => {
    const newList = [...rightLetters];
    for (const index in secretWord) {
      if (secretWord[index] == letter) {
        newList[index] = letter;
        setRightLetters(newList);
      }
      if (rightLetters[index] == undefined) {
        newList[index] = "";
        setRightLetters(newList);
      }
    }
  };

  const isWrongLetters = () => {
    const includes = !secretWord.includes(letter);
    const breaksSameLetters = !wrongLetters.includes(letter);

    if (includes && breaksSameLetters) {
      const newList = [...wrongLetters];
      newList.push(letter);
      setWrongLetters(newList);
    }
  };

  const isPressedLetter = (press) => {
    if (press >= 65 && press <= 90) return true;

    if (press == 13) toggleTipsMode();
  };

  const handleTipsMode = (e) => {
    const tipsKey = e.target.innerText;
    if (tipsKey == "Tips") toggleTipsMode();
  };

  const toggleTipsMode = () => {
    setTipsMode(!tipsMode);
  };

  useEffect(() => {
    if (!isWinner && !isLoser) {
      isRightLetters();
      isWrongLetters();
    }
  }, [letter]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardPress);
    return () => {
      document.removeEventListener("keydown", handleKeyboardPress);
    };
  }, [tipsMode]);
  console.log(secretWord);
  return {
    secretWord,
    rightLetters,
    wrongLetters,
    isWinner,
    isLoser,
    tipsMode,
    handleMouseClick,
    handleTipsMode,
  };
}
