import React from "react";
import * as S from "./styles";

const CopywriteGroup = () => {
  return (
    <S.CopywrightWraper>
      <div>© 2018 - 2022 Ozone Networks, Inc</div>
      <S.LinksContainer>
        <S.Link href="#">Privacy Policy</S.Link>
        <S.Link href="#">Term of Service</S.Link>
      </S.LinksContainer>
    </S.CopywrightWraper>
  );
};

export { CopywriteGroup };
