import React from "react";
import * as S from "./styles";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { Accordion } from "../../../components";

const CardOptions = () => {
  return (
    <S.OptionsWrapper>
      <S.Title>
        <S.Icon>
          <BiMenuAltLeft />
        </S.Icon>
        Description
      </S.Title>
      <S.TextContainer>
        <S.CreatedBy>
          Created by {""}
          <S.AutorLink
            href="https://opensea.io/collection/cryptocoven"
            name="crypto_coven"
          >
            crypto_coven
          </S.AutorLink>
          <S.Verified>
            <MdVerified />
          </S.Verified>
        </S.CreatedBy>
        <S.Text>
          You are a WITCH woven from the strings of a windchime. You dye your
          hair with henna and blood. Your magic spawns from the depths of the
          earth. You have written dissertations on enchanted clothing. YOU SEE
          WHAT MORTALS CANNOT IMAGINE!
        </S.Text>
      </S.TextContainer>
      <Accordion />
    </S.OptionsWrapper>
  );
};

export { CardOptions };
