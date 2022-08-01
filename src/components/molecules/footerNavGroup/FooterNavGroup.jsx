import React from "react";
import { Logo } from "../../../components";
import * as S from "./styles";

const FooterNavGroup = () => {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <Logo />
        <S.LogoText>OpenOcean</S.LogoText>
        <S.Description>
          The world&apos;s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export { FooterNavGroup };
