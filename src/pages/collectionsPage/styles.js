import styled from "styled-components/macro";

export const CollectionsWrapper = styled.div``;

export const BannerImageContainer = styled.div`
  height: 20vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
`;

export const MidRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
`;

export const EndRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: white;
`;

export const ProfileImg = styled.img`
  width: 10rem; /* 160px */
  height: 10rem; /* 160px */
  object-fit: cover;
  border: 2px solid #202225;
  border-radius: 9999px;
  margin-top: -4rem;
`;

export const Verified = styled.div`
  color: #2081e2;
  font-size: 16px;
  margin-right: 8px;
  display: flex;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  margin-bottom: -4rem;
`;

export const SocialIconsWrapper = styled.div`
  width: 11rem; /* 176px */
`;

export const SocialIconsContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  line-height: 1.4rem;
  border: 2px solid white;
  border-radius: 0.5rem; /* 8px */
  padding-left: 0.5rem; /* 8px */
  padding-right: 0.5rem; /* 8px */
`;

export const SocialIcon = styled.div`
  margin-top: 0.5rem; /* 8px */
  margin-bottom: 0.5rem; /* 8px */
`;

export const Title = styled.div`
  font-size: 40px;
  line-height: 1;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 1rem; /* 16px */
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const CreatedBy = styled.div`
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
  margin-bottom: 1rem; /* 16px */
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const AutorLink = styled.a`
  color: #2081e2;
  font-size: 18px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const StatsContainer = styled.div`
  width: 44vw;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
  border: 1px solid #151b22;
  border: ${(props) => props.theme.searchBar.border};
  border-radius: 0.75rem; /* 12px */
  margin-bottom: 1rem; /* 16px */
`;

export const CollectionStat = styled.div`
  width: 25%;
`;

export const StatValue = styled.div`
  font-size: 24px;
  line-height: 2.25rem; /* 36px */
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fontsColor.primeFont};
`;

export const EthLogo = styled.img`
  height: 1.5rem; /* 24px */
  margin-right: 0.5rem; /* 8px */
`;

export const StatName = styled.div`
  font-size: 14px;
  line-height: 1.75rem; /* 28px */
  width: 100%;
  text-align: center;
  margin-top: 4px;
  color: ${(props) => props.theme.fontsColor.secFont};
`;

export const Description = styled.div`
  color: #8a939b;
  font-size: 16px;
  line-height: 1.75rem; /* 28px */
  width: max-content 25%;
  flex-wrap: wrap;
  margin-top: 1rem; /* 16px */
`;

export const NftCardCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
`;
