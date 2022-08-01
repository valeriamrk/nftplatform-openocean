import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { MySelect, TopNftTable } from "../../components";
import { useSelector } from "react-redux";

const TopNftPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statsData = useSelector((state) => state.statsData.nftStats);

  const [selectedOption, setSelectedOption] = useState({
    label: "All Categories",
    icon: "https://opensea.io/static/images/icons/allnfts-light.svg",
  });

  return (
    <>
      <S.TopContainer>
        <S.TextContainer>Top NFTs</S.TextContainer>
        <S.DescriptionContainer>
          The top NFTs on OpenOcean, ranked by volume, floor price and other
          statistics.
        </S.DescriptionContainer>
        <MySelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <TopNftTable statsData={statsData} selectedOption={selectedOption} />
      </S.TopContainer>
    </>
  );
};

export { TopNftPage };
