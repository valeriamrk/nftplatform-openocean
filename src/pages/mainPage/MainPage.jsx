import React, { useState } from "react";
import {
  PageBasicLayout,
  LogoGroup,
  HeaderItemGroup,
  Footer,
  SideNavBar,
  GlobalSearch,
} from "../../components";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import {
  changeSidebarStatus,
  changeSidebarStatusClose,
} from "../../store/allDataSlice";

const MainPage = (props) => {
  const { themeToggler } = props;
  const dispatch = useDispatch();

  const navbarLinks = useSelector((state) => state.navbarLinksData.navbarLinks);
  const sidebarData = useSelector((state) => state.allData.sidebarIsOpened);
  const nftCards = useSelector((state) => state.nftCardsData.nftCards);

  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [navigationSelectedIndex, setNavigationSelectedIndex] = useState();

  const globalFilter = (event) => {
    const searchCard = event.target.value;
    setSearchValue(searchCard);
    const filterData = nftCards.filter((element) => {
      return element.nft_name.toLowerCase().includes(searchCard.toLowerCase());
    });
    if (searchCard === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filterData);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setSearchValue("");
  };

  const handleSidebarStatus = () => {
    dispatch(changeSidebarStatus());
  };

  const handleSidebarStatusClose = () => {
    dispatch(changeSidebarStatusClose());
  };

  const navigationClick = (index) => {
    setNavigationSelectedIndex(index);
  };

  const resetSelectedNavIndex = () => {
    setNavigationSelectedIndex("");
  };

  return (
    <S.MainContainer>
      <PageBasicLayout>
        <PageBasicLayout.PageHeader>
          <LogoGroup handleClick={resetSelectedNavIndex} />
          <GlobalSearch
            filterData={filteredData}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleFilter={globalFilter}
            clearInput={clearInput}
          />
          <HeaderItemGroup
            navbarLinks={navbarLinks}
            handleSidebarStatus={handleSidebarStatus}
            themeToggler={themeToggler}
            navigationClick={navigationClick}
            navigationSelectedIndex={navigationSelectedIndex}
            handleClick={resetSelectedNavIndex}
          />
        </PageBasicLayout.PageHeader>
        <PageBasicLayout.PageContent>
          <Outlet context={{ resetSelectedNavIndex }} />
        </PageBasicLayout.PageContent>
        <PageBasicLayout.PageFooter>
          <Footer />
        </PageBasicLayout.PageFooter>
      </PageBasicLayout>
      <SideNavBar
        sidebarActive={sidebarData}
        handleSidebarStatusClose={handleSidebarStatusClose}
      />
    </S.MainContainer>
  );
};

export { MainPage };
