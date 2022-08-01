import React from "react";
import { Logo } from "../../../components";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const LogoGroup = (props) => {
  const { handleClick } = props;
  const navigate = useNavigate();
  const path = "";
  const handleItemClick = (event, path) => {
    handleClick(event);
    navigate(path);
  };

  return (
    <S.LogoGroup onClick={(event) => handleItemClick(event, path)}>
      <Logo />
      <S.LogoText>OpenOcean</S.LogoText>
    </S.LogoGroup>
  );
};

export { LogoGroup };
