import React from "react";
import {
  SignUpGroup,
  SocialIcons,
  FooterNavGroup,
  LinksTable,
  CopywriteGroup,
} from "../../../components";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FirstRow>
        <SignUpGroup />
        <SocialIcons />
      </S.FirstRow>
      <S.SecondRow>
        <FooterNavGroup />
        <LinksTable />
      </S.SecondRow>
      <S.ThirdRow>
        <CopywriteGroup />
      </S.ThirdRow>
    </S.FooterWrapper>
  );
};

export { Footer };
