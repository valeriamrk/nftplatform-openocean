import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ImageCard,
  CardOptions,
  SocialIconsCollection,
  MyButton,
  SingleElementAccordion,
} from "../../components";
import * as S from "./styles";
import {
  MdVerified,
  MdToc,
  MdTimeline,
  MdFavorite,
  MdLocalOffer,
} from "react-icons/md";
import { useParams } from "react-router-dom";

const OpenCard = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const nftCards = useSelector((state) => state.nftCardsData.nftCards);
  const accData = [
    {
      id: 1,
      title: "Price History",
      label: "Some history",
      icon: <MdTimeline />,
    },
    {
      id: 2,
      title: "Listings",
      label: "Some listings",
      icon: <MdLocalOffer />,
    },
    { id: 3, title: "Offers", label: "Some offers", icon: <MdToc /> },
  ];
  const { id } = useParams();

  const openedCard = nftCards.filter((element) => element.id == id);

  return (
    <S.Wrapper>
      <S.OpenCardWrapper>
        <S.LeftContainer>
          <ImageCard image={openedCard[0].img} likes={openedCard[0].likes} />
          <CardOptions />
        </S.LeftContainer>
        <S.RightContainer>
          <S.FirstRow>
            <S.VerifiedContainer>
              <S.AutorLink
                href="https://opensea.io/collection/cryptocoven"
                name="crypto_coven"
                target="_blank"
                rel="noreferrer"
              >
                {openedCard[0].author}
              </S.AutorLink>
              <S.Verified>
                <MdVerified />
              </S.Verified>
            </S.VerifiedContainer>
            <SocialIconsCollection />
          </S.FirstRow>
          <S.Title>{openedCard[0].nft_name}</S.Title>
          <S.Owned>
            Owned by <S.Ownername>Ownername</S.Ownername>{" "}
            <S.Favorites>
              {" "}
              <S.FavIcon>
                <MdFavorite />{" "}
              </S.FavIcon>{" "}
              {openedCard[0].likes} favorites
            </S.Favorites>
          </S.Owned>
          <S.OfferContainer>
            <S.Flex>
              <MyButton big>
                <S.BtnIcon>
                  <MdLocalOffer />
                </S.BtnIcon>
                Make Offer
              </MyButton>
            </S.Flex>
          </S.OfferContainer>
          <SingleElementAccordion accData={accData[0]} />
          <SingleElementAccordion accData={accData[1]} />
          <SingleElementAccordion accData={accData[2]} />
        </S.RightContainer>
      </S.OpenCardWrapper>
    </S.Wrapper>
  );
};

export { OpenCard };
