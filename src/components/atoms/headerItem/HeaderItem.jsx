import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const HeaderItem = (props) => {
  const {...other} = props
  const navigate = useNavigate();

  const { path, label, index, itemClick } = props;

  const handleItemClick = (event, index, path) => {
    itemClick(index, event);
    navigate(path);
  };

  return (
    <S.HeaderItem
      {...other}
      onClick={(event) => handleItemClick(event, index, path)}
    >
      {label}
    </S.HeaderItem>
  );
};
export { HeaderItem };
