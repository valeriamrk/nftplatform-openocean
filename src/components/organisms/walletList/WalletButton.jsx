import React from "react";
import * as S from "./styles";

const WalletButton = (props) => {
  const { children, changeListLength } = props;

  return (
    <S.ListItemWrapper onClick={() => changeListLength()}>
      <div>{children}</div>
    </S.ListItemWrapper>
  );
};

export { WalletButton };
