import React from "react";
import { InputField } from "../../../components";
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

const SearchBar = (props) => {
  const {
    placeholder,
    searchValue,
    setSearchValue,
    handleFilter,
    clearInput,
    ...other
  } = props;

  return (
    <S.SearchBar {...other}>
      <S.SearchIcon {...other}>
        <AiOutlineSearch />
      </S.SearchIcon>
      <InputField
        placeholder={placeholder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleFilter={handleFilter}
        {...other}
      />
      {searchValue.length !== 0 && (
        <S.CloseIcon {...other} onClick={() => clearInput()}>
          <MdClear />
        </S.CloseIcon>
      )}
    </S.SearchBar>
  );
};

export { SearchBar };
