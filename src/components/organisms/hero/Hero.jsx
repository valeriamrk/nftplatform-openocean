import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../../../components";
import * as S from "./styles";

const Hero = () => {
  return (
    <S.HeroWrapper>
      <S.Container>
        <S.ContentWrapper>
          <S.TextContainer>
            <S.Title>Discover, collect, and sell extraordinary NFTs</S.Title>
            <S.Description>
              OpenOcean is the world&apos;s first and largest NFT marketplace
            </S.Description>
            <S.BtnContainer>
              <Link to="/collections">
                <MyButton>Explore</MyButton>
              </Link>
              <Link to="/create">
                <MyButton secondary>Create</MyButton>
              </Link>
            </S.BtnContainer>
          </S.TextContainer>
          <S.StyledLink to="/opencard/8">
            <S.CardContainer>
              <S.MainImage
                src="https://lh3.googleusercontent.com/CZhnyKg0UM92CtKJVOoP_vHMu2r5-HHEELb3U-pMx_iU-kTuQ8CsO6B5AudpvNT0JvBCtrI_qbAnIPUXEYwUgwzKD4AZ_lRODw9Oaw=w600"
                alt=""
              />
              <S.InfoContainer>
                <S.Avatar
                  className="h-[2.25rem] rounded-full"
                  src="https://lh3.googleusercontent.com/E8MVasG7noxC0Fa_duhnexc2xze1PzT1jzyeaHsytOC4722C2Zeo7EhUR8-T6mSem9-4XE5ylrCtoAsceZ_lXez_kTaMufV5pfLc3Fk=s130"
                  alt=""
                />
                <S.Author>
                  <S.Name>frangipani, the luscious chime</S.Name>
                  <Link to="/collections">
                    <S.LinkSt>Crypto Coven</S.LinkSt>
                  </Link>
                </S.Author>
              </S.InfoContainer>
            </S.CardContainer>
          </S.StyledLink>
        </S.ContentWrapper>
      </S.Container>
    </S.HeroWrapper>
  );
};

export { Hero };
