import React from "react";
import * as S from "./styles";
import {
  MdLabel,
  MdEqualizer,
  MdVerticalSplit,
  MdBallot,
  MdExpandMore,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeAccordionStatus } from "../../../store/allDataSlice";

const Accordion = () => {
  const accordionData = useSelector((state) => state.allData.accordionItems);
  const dispatch = useDispatch();

  const accordionHandler = (id) => {
    dispatch(changeAccordionStatus(id));
  };

  return (
    <S.AccWrapper>
      <S.AccTitle onClick={() => accordionHandler({ id: 1 })}>
        <S.LeftTitle>
          <S.Icon>
            <MdLabel />
          </S.Icon>
          Properties
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[0].opened}>
        <span>Some properties</span>
      </S.AccPanel>
      <S.AccTitle onClick={() => accordionHandler({ id: 2 })}>
        <S.LeftTitle>
          <S.Icon>
            <MdEqualizer />
          </S.Icon>
          Stats
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[1].opened}>
        <span>Some stats</span>
      </S.AccPanel>
      <S.AccTitle onClick={() => accordionHandler({ id: 3 })}>
        <S.LeftTitle>
          <S.Icon>
            <MdVerticalSplit />
          </S.Icon>
          About Crypto Coven
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[2].opened}>
        <span>Some info about</span>
      </S.AccPanel>
      <S.AccTitle onClick={() => accordionHandler({ id: 4 })}>
        <S.LeftTitle>
          {" "}
          <S.Icon>
            <MdBallot />
          </S.Icon>
          Details{" "}
        </S.LeftTitle>
        <S.Icon>
          <MdExpandMore />
        </S.Icon>
      </S.AccTitle>
      <S.AccPanel active={accordionData[3].opened}>
        <span>Some details</span>
      </S.AccPanel>
    </S.AccWrapper>
  );
};

export { Accordion };
