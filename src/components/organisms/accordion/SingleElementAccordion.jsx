import React, { useState } from "react";
import * as S from "./styles";
import { MdExpandMore } from "react-icons/md";

const SingleElementAccordion = (props) => {
  const { accData } = props;
  const [isActive, setIsActive] = useState(false);

  const accHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <S.SingleAccWrapper>
      <S.SingleAccTitle onClick={() => accHandler()}>
        <S.LeftTitle>
          <S.Icon>{accData.icon}</S.Icon>
          {accData.title}
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.SingleAccTitle>
      <S.SingleAccPanel active={isActive}>
        <span>{accData.label}</span>
      </S.SingleAccPanel>
    </S.SingleAccWrapper>
  );
};

export { SingleElementAccordion };
