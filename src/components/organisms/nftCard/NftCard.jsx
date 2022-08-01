import React from "react";
import * as S from "./styles";
import { LikesCounter } from "../../../components";
import { Link } from "react-router-dom";

const NftCard = (props) => {
  const { handleClick } = props;
  return (
    <S.Wrapper onClick={() => handleClick()}>
      <S.ContentWrapper>
        <Link to={`/opencard/${props.id}`}>
          <S.LinkContainer>
            <S.ImgContainer>
              <S.NftImg src={props.img} />
            </S.ImgContainer>
            <S.Details>
              <S.Info>
                <S.InfoLeft>
                  <S.CollectionName>{props.author}</S.CollectionName>
                  <S.AssetName>{props.name}</S.AssetName>
                </S.InfoLeft>
                <S.InfoRight>
                  <S.PriceTag>Price</S.PriceTag>
                  <S.PriceValue>
                    <S.EthLogo src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
                    {props.price}
                  </S.PriceValue>
                </S.InfoRight>
              </S.Info>
            </S.Details>
          </S.LinkContainer>
        </Link>
        <S.LikesContainer>
          <LikesCounter likes={props.likes} />
        </S.LikesContainer>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export { NftCard };
