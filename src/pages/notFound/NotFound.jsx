import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../components";
import * as S from "./styles";

const NotFound = () => {
  return (
    <S.MainContainer>
      <S.ClockContainer>
        4
        <S.ClockImg src="https://opensea.io/static/images/404-compass-full.gif" />
        4
      </S.ClockContainer>
      <S.PageLost>This page is lost.</S.PageLost>
      <S.Description>
        We've explored deep and wide,
        <br /> but we can't find the page you were looking for.
      </S.Description>
      <Link to="/">
        <MyButton big>Navigate back home</MyButton>
      </Link>
    </S.MainContainer>
  );
};

export { NotFound };
