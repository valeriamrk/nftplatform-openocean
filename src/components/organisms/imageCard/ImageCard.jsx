import React from "react";
import { LikesCounter } from "../../../components";
import * as S from "./styles";
import { FaEthereum } from "react-icons/fa";

const ImageCard = (props) => {
  const { image, likes } = props;

  return (
    <S.CardContainer>
      <S.FirstContainer>
        <FaEthereum />
        <LikesCounter likes={likes} />
      </S.FirstContainer>
      <S.MainImage src={image} alt="" />
    </S.CardContainer>
  );
};

export { ImageCard };
