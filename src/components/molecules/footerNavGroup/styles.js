import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-right: 70px;
`;

export const LogoText = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  line-height: 1.5;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Description = styled.div`
  line-height: 1.5;
`;

// Links Table
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5;
`;

export const ListHeader = styled.li`
  line-height: 1.5;
  list-style: none;
`;

export const ListItem = styled.li`
  line-height: 1.5;
  list-style: none;
  margin-bottom: 6px;
  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Column = styled.ul`
  line-height: 1.5;
  list-style: none;
  min-width: 190px;
  padding: 0;
  margin-right: 16px;
`;

// Copywright group

export const CopywrightWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Link = styled.a`
  margin-left: 16px;
  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
`;
