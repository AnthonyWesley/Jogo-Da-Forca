/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import words from "../Data/words";

export default function UseApi() {
  const [description, setDescription] = useState("");
  const getWordDescriptionApi = async () => {
    try {
      const response = await fetch(
        `https://dicio-api-ten.vercel.app/v2/${words}`
      );
      const data = await response.json();
      // const index = Math.floor(Math.random() * data[0].meanings.length);
      const descrip = await data[0].meanings[0];
      setDescription(descrip);
    } catch (error) {
      setDescription("Sem descrição...");
    }
  };

  useEffect(() => {
    getWordDescriptionApi();
  }, []);

  return { description };
}
