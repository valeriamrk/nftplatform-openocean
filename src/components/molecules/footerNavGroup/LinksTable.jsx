import React from "react";
import * as S from "./styles";

const LinksTable = () => {
  const listItems = {
    marketplace: [
      { label: "All NFTs" },
      { label: "Art" },
      { label: "Collectibles" },
      { label: "Domain names" },
      { label: "Music" },
      { label: "Photography" },
      { label: "Sports" },
      { label: "Trading Cards" },
      { label: "Utility" },
      { label: "Virtual Worlds" },
    ],
    myAccount: [
      { label: "Profile" },
      { label: "Favorites" },
      { label: "Watchlist" },
      { label: "My Collections" },
      { label: "Settings" },
    ],
    stats: [{ label: "Rankings" }, { label: "Activity" }],
    resources: [
      { label: "Help Center" },
      { label: "Platform Status" },
      { label: "Partners" },
      { label: "Gas-Free Marketplace" },
      { label: "Taxes" },
      { label: "Blog" },
      { label: "Docs" },
      { label: "Newsletter" },
    ],
    company: [
      { label: "About" },
      { label: "Careers" },
      { label: "Ventures" },
      { label: "Grants" },
    ],
  };

  return (
    <S.ListWrapper>
      <S.Column>
        <S.ListHeader>
          <h3>Marketplace</h3>
        </S.ListHeader>
        {listItems.marketplace.map((element) => (
          <S.ListItem key={element.label}>
            <a href="#">{element.label}</a>
          </S.ListItem>
        ))}
      </S.Column>
      <S.Column>
        <S.ListHeader>
          <h3>My Account</h3>
        </S.ListHeader>
        {listItems.myAccount.map((element) => (
          <S.ListItem key={element.label}>
            <a href="#">{element.label}</a>
          </S.ListItem>
        ))}
        <S.ListHeader>
          <h3>Stats</h3>
        </S.ListHeader>
        {listItems.stats.map((element) => (
          <S.ListItem key={element.label}>
            <a href="#">{element.label}</a>
          </S.ListItem>
        ))}
      </S.Column>
      <S.Column>
        <S.ListHeader>
          <h3>Resources</h3>
        </S.ListHeader>
        {listItems.resources.map((element) => (
          <S.ListItem key={element.label}>
            <a href="#">{element.label}</a>
          </S.ListItem>
        ))}
      </S.Column>
      <S.Column>
        <S.ListHeader>
          <h3>Company</h3>
        </S.ListHeader>
        {listItems.company.map((element) => (
          <S.ListItem key={element.label}>
            <a href="#">{element.label}</a>
          </S.ListItem>
        ))}
      </S.Column>
    </S.ListWrapper>
  );
};

export { LinksTable };
