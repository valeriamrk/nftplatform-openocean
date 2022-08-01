import React from "react";
import * as S from "./styles";

const HelpListItems = (props) => {
  const { title, description } = props;

  return (
    <S.ItemWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.ItemWrapper>
  );
};

export { HelpListItems };
