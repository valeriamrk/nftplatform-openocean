import React from "react";
import * as S from "./styles";

const InputField = (props) => {
  const { searchValue, handleFilter, ...other } = props;

  return (
    <S.InputField {...other} value={searchValue} onChange={handleFilter} />
  );
};

export { InputField };
