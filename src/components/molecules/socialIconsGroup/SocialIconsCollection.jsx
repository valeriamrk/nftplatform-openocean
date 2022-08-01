import React from "react";
import * as S from "./styles";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";

const SocialIconsCollection = () => {
  return (
    <S.IconsWrapper>
      <S.IconContainer>
        <CgWebsite />
      </S.IconContainer>
      <S.IconContainer>
        <AiOutlineTwitter />
      </S.IconContainer>
      <S.IconContainer>
        <SiDiscord />
      </S.IconContainer>
      <S.IconContainer>
        <HiDotsVertical />
      </S.IconContainer>
    </S.IconsWrapper>
  );
};

export { SocialIconsCollection };
