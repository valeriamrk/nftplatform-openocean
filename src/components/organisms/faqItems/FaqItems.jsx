import React from "react";
import * as S from "./styles";
import { HelpList, QuestionList } from "../../../components";

const FaqItems = (props) => {
  const {
    helpQuestionsData,
    filteredQuestionsData,
    helpItemsData,
    filteredHelpItems,
  } = props;
  if (!filteredQuestionsData.length && !filteredHelpItems.length) {
    return <S.NotFound>No results found</S.NotFound>;
  }

  return (
    <S.MainContainer>
      <S.HelpListContainer>
        <HelpList
          helpItemsData={helpItemsData}
          filteredHelpItems={filteredHelpItems}
        />
      </S.HelpListContainer>
      <S.QuestionsListContainer>
        <QuestionList
          helpQuestionsData={helpQuestionsData}
          filteredQuestionsData={filteredQuestionsData}
        />
      </S.QuestionsListContainer>
    </S.MainContainer>
  );
};

export { FaqItems };
