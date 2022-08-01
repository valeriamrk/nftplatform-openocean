import React from "react";
import { MyButton } from "../../../components";
import { BsTwitter, BsInstagram, BsYoutube, BsEnvelope } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { ImReddit } from "react-icons/im";
import * as S from "./styles";

const SocialIcons = () => {
  return (
    <S.Wrapper>
      <S.Header>Join the community</S.Header>
      <S.IconsGroup>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <MyButton icon>
            <BsTwitter />
          </MyButton>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <MyButton icon>
            <BsInstagram />
          </MyButton>
        </a>
        <a href="https://discord.com/" target="_blank" rel="noreferrer">
          <MyButton icon>
            <SiDiscord />
          </MyButton>
        </a>
        <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
          <MyButton icon>
            <ImReddit />
          </MyButton>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <MyButton icon>
            <BsYoutube />
          </MyButton>
        </a>
        <a href="#">
          <MyButton icon>
            <BsEnvelope />
          </MyButton>
        </a>
      </S.IconsGroup>
    </S.Wrapper>
  );
};

export { SocialIcons };
