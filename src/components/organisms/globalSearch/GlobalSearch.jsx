import React from "react";
import * as S from "./styles";
import { SearchBar, SearchResults } from "../../../components";

const GlobalSearch = (props) => {
  const { filterData, searchValue, setSearchValue, handleFilter, clearInput } =
    props;

  return (
    <S.GlobalSearchContainer>
      <S.SearchBarContainer>
        <SearchBar
          placeholder="Search items, collections, and accounts"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleFilter={handleFilter}
          clearInput={clearInput}
        />
      </S.SearchBarContainer>
      <SearchResults
        filterData={filterData}
        searchValue={searchValue}
        clearInput={clearInput}
      />
    </S.GlobalSearchContainer>
  );
};

export { GlobalSearch };
