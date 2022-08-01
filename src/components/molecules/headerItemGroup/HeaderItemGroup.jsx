import React from "react";
import * as S from "./styles";
import { MdOutlineAccountBalanceWallet, MdModeNight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { SwitchButton, HeaderItem } from "../../../components";

const HeaderItemGroup = (props) => {
  const {
    navbarLinks,
    handleSidebarStatus,
    themeToggler,
    navigationClick,
    navigationSelectedIndex,
    handleClick,
  } = props;
  const itemClick = (index) => {
    navigationClick(index);
  };

  return (
    <S.HeaderItemGroup>
      {navbarLinks.map((element, index) => (
        <HeaderItem
          key={element.id}
          path={element.path}
          label={element.label}
          index={index}
          itemClick={itemClick}
          selected={navigationSelectedIndex === index}
        />
      ))}
      <Link to="/create">
        <S.HeaderIcon onClick={() => handleClick()}>
          <CgProfile />
        </S.HeaderIcon>
      </Link>
      <S.HeaderIcon>
        <MdOutlineAccountBalanceWallet onClick={() => handleSidebarStatus()} />
      </S.HeaderIcon>
      <S.Icon>
        <MdModeNight />
      </S.Icon>
      <SwitchButton themeToggler={themeToggler} />
    </S.HeaderItemGroup>
  );
};

export { HeaderItemGroup };
