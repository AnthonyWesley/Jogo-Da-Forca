/* eslint-disable react/prop-types */

import { images } from "../Data/Image";
import { Container } from "./style";

export default function ImageArea({ wrongLetters }) {
  const mistakes = wrongLetters.length;
  return (
    <Container>
      <img src={images[mistakes]} alt="" />
    </Container>
  );
}
