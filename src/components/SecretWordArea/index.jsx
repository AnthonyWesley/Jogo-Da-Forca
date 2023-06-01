/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { Container } from "./style";
import { Letter, Space } from "../../Global";

export default function SecretWordArea({ rightLetters }) {

  
  return (
    <Container>
      {rightLetters.map((item, index) =>(
        <div key={index}>
          {item == "" ?   (<Space>{item}</Space>):(<Letter key={index}>{item}</Letter>)}
        </div>
      ))}
    </Container>
  );
}
