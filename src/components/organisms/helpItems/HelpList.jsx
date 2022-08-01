import React from "react";
import { HelpListItems } from "./HelpListItems";
import * as S from "./styles";

const HelpList = (props) => {
  const { filteredHelpItems } = props;
  return (
    <S.Wrapper>
      {filteredHelpItems.map((element) => (
        <HelpListItems
          title={element.title}
          description={element.description}
          key={element.title}
        />
      ))}
    </S.Wrapper>
  );
};

export { HelpList };
