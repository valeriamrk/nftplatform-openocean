import * as S from "./styles";
import React, { useEffect } from "react";
import { WalletList } from "../../components";
import { useSelector } from "react-redux";
import { useState } from "react";

const CreatePage = () => {
  const walletsData = useSelector((state) => state.walletData.wallets);

  const [isListShort, setIsListShort] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeListLength = () => {
    setIsListShort(!isListShort);
  };

  return (
    <S.TopContainer>
      <S.TextContainer>
        You need an Ethereum wallet to use OpenOcean.
      </S.TextContainer>
      <S.DescriptionContainer>
        Connect with one of our available{" "}
        <S.Tooltip>
          wallet
          <S.TooltipText>
            A crypto wallet is an application or hardware device that allows
            individuals to store and retrieve digital items.
          </S.TooltipText>
        </S.Tooltip>{" "}
        providers or create a new one.
      </S.DescriptionContainer>
      <WalletList
        walletsData={walletsData}
        isListShort={isListShort}
        changeListLength={changeListLength}
      />
    </S.TopContainer>
  );
};

export { CreatePage };
