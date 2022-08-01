import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import * as S from "./styles";

const LikesCounter = (props) => {
  const { likes } = props;

  const [likesCount, setLikesCount] = useState(likes);

  const likesCounter = () => {
    if (likesCount === likes) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }
  };

  return (
    <>
      {likesCount > likes ? (
        <S.Likes onClick={() => likesCounter()}>
          <S.RedLikeIcon>
            <IoMdHeart />
          </S.RedLikeIcon>
          <S.LikeValue>{likesCount}</S.LikeValue>
        </S.Likes>
      ) : (
        <S.Likes onClick={() => likesCounter()}>
          <S.LikeIcon>
            <IoMdHeart />
          </S.LikeIcon>
          <S.LikeValue>{likesCount}</S.LikeValue>
        </S.Likes>
      )}
    </>
  );
};

export { LikesCounter };
