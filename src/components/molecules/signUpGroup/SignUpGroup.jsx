import React from "react";
import { InputField, MyButton } from "../../../components";
import * as S from "./styles";

const SignUpGroup = () => {
  return (
    <S.Wrapper>
      <S.Header>Stay in the loop</S.Header>
      <S.Description>
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks for navigating OpenOcean.
      </S.Description>
      <S.SignUpWrapper>
        <S.EmailInput>
          {" "}
          <InputField placeholder="Your email address" />
        </S.EmailInput>
        <MyButton small>Sign up</MyButton>
      </S.SignUpWrapper>
    </S.Wrapper>
  );
};

export { SignUpGroup };
