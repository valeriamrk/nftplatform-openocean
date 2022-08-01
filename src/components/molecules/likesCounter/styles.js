import styled from "styled-components/macro";

export const Likes = styled.div`
  color: #8a939b;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.75rem 0rem;
  &:hover {
    cursor: pointer;
  }
`;

export const LikeIcon = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 1.75rem; /* 28px */
  margin-right: 0.25rem; /* 8px */
`;

export const RedLikeIcon = styled.div`
  display: flex;
  font-size: 20px;
  color: rgb(235, 87, 87);
  line-height: 1.75rem; /* 28px */
  margin-right: 0.25rem; /* 8px */
`;

export const LikeValue = styled.div`
  font-size: 14px;
  line-height: 1.75rem; /* 28px */
  margin-right: 0.75rem; /* 8px */
  display: flex;
`;
