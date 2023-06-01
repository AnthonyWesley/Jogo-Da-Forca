/* eslint-disable react/prop-types */
import { Lightbulb } from "phosphor-react";
const keyboard = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
import { Container, KeyButton } from "./style";

export default function KeyboardArea({
  onClick,
  onTips,
  rightLetter,
  wrongLetter,
  isWinner,
  isLoser,
  tipsMode,
}) {
  let right = "";
  let wrong = "";

  return (
    <Container>
      {keyboard.map((item, index) => {
        {
          right = rightLetter.includes(item);
        }
        {
          wrong = wrongLetter.includes(item);
        }

        return (
          <KeyButton
            key={index}
            mark={(right && "#07dd07") || (wrong && "#ff0000")}
            isActive={isWinner || isLoser}
            disabled={right || wrong}
            onClick={onClick}
          >
            {item}
          </KeyButton>
        );
      })}
      <KeyButton
        onClick={onTips}
        mark={(tipsMode && "orange") || (!tipsMode && "")}
      >
        <Lightbulb size={24} />
        Tips
      </KeyButton>
    </Container>
  );
}
