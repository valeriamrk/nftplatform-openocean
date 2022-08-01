import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border: ${(props) => props.theme.card.border};
  flex: 1 1 auto;
  width: 250px;
  height: 100%;
  margin-top: 2.5rem; /* 40px */
  margin-bottom: 2.5rem; /* 40px */
  margin-left: 1.25rem; /* 20px */
  margin-right: 1.25rem; /* 20px */
  border-radius: 1rem; /* 16px */
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => props.theme.card.hover};
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: min-content;
`;

export const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NftImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e4e8eb;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

export const InfoLeft = styled.div`
  flex-wrap: wrap;
  flex: 1 1 auto;
`;

export const CollectionName = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25rem; /* 20px */
  color: #8a939b;
`;

export const AssetName = styled.div`
  font-weight: 700;
  font-size: 12px;
  margin-top: 0.5rem; /* 8px */
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const InfoRight = styled.div`
  text-align: right;
  flex: 1 1 auto;
`;

export const PriceTag = styled.div`
  font-weight: 600;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: #8a939b;
`;

export const PriceValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.875rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 700;
  margin-top: 0.1rem; /* 8px */
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const EthLogo = styled.img`
  height: 1.25rem; /* 20px */
  margin-right: 0.5rem; /* 8px */
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
`;

export const LikesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
