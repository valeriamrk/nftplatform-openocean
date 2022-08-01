import React from "react";
import * as S from "./styles";

const WalletItem = (props) => {
  const { name, logo } = props;

  return (
    <S.ListItemWrapper>
      <S.Logo src={logo} alt="logo" />
      <div>{name}</div>
    </S.ListItemWrapper>
  );
};

export { WalletItem };
