import React, { useRef, useState } from "react";
import { WalletList } from "../../../components";
import * as S from "./styles";
import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside";

const SideNavBar = (props) => {
  const { openNav, sidebarActive, handleSidebarStatusClose } = props;

  const walletsData = useSelector((state) => state.walletData.wallets);
  const [isListShort, setIsListShort] = useState(true);

  const ref = useRef();
  useOnClickOutside(ref, () => handleSidebarStatusClose());

  const changeListLength = () => {
    setIsListShort(!isListShort);
  };

  return (
    <S.SideNav
      openNav={openNav}
      sidebarActive={sidebarActive}
      onClick={() => handleSidebarStatusClose()}
      ref={ref}
    >
      <S.Content onClick={(e) => e.stopPropagation()}>
        <S.NavHeader>
          <S.Icon>
            <IoPersonCircle />
          </S.Icon>
          My wallet
        </S.NavHeader>
        <S.Description>
          Connect with one of our available{" "}
          <S.Tooltip>
            wallet
            <S.TooltipText>
              A crypto wallet is an application or hardware device that allows
              individuals to store and retrieve digital items.
            </S.TooltipText>
          </S.Tooltip>{" "}
          providers or create a new one.
        </S.Description>
        <S.WalletContainer>
          <WalletList
            walletsData={walletsData}
            sidebar
            isListShort={isListShort}
            changeListLength={changeListLength}
          />
        </S.WalletContainer>
      </S.Content>
    </S.SideNav>
  );
};

export { SideNavBar };
