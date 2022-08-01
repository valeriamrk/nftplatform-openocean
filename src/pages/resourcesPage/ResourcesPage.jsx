import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { SearchBar, FaqItems } from "../../components";
import { useSelector } from "react-redux";

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const helpItemsData = useSelector(
    (state) => state.helpCenterData.helpCenterItems
  );
  const helpQuestionsData = useSelector(
    (state) => state.helpCenterData.questionItems
  );

  const [searchValue, setSearchValue] = useState("");

  const filteredHelpItems = helpItemsData.filter((element) => {
    return (
      element.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      element.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  const filteredQuestionsData = helpQuestionsData.filter((element) => {
    return element.label.toLowerCase().includes(searchValue.toLowerCase());
  });
  

  const faqFilter = (event) => {
    const searchItem = event.target.value;
    setSearchValue(searchItem);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  return (
    <S.MainContainer>
      <S.BannerContainer>
        <S.SearchContainer>
          <SearchBar
            white
            placeholder="Search"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleFilter={faqFilter}
            clearInput={clearInput}
          />
        </S.SearchContainer>
      </S.BannerContainer>
      <FaqItems
        filteredHelpItems={filteredHelpItems}
        filteredQuestionsData={filteredQuestionsData}
      />
    </S.MainContainer>
  );
};

export { ResourcesPage };
