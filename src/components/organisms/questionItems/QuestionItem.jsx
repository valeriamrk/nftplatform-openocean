import React from "react";
import * as S from "./styles";

const QuestionItem = (props) => {
  const { label } = props;

  return <S.Label>{label}</S.Label>;
};

export { QuestionItem };
