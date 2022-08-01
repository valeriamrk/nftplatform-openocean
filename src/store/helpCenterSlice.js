import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  helpCenterItems: [
    {
      title: "Getting Started",
      description:
        "Learn how to create an account, set up your wallet, and what you can do on OpenOcean",
    },
    {
      title: "Buying",
      description:
        "Learn how to purchase your first NFT and understand gas fees and what's gas free on OpenOcean",
    },
    {
      title: "Selling",
      description:
        "Learn how list your NFTs for sale and understand the different ways to list your NFTs",
    },
    {
      title: "Creating",
      description:
        "Learn how to create your very first NFT and how to create your NFT collections so you can begin selling and sharing",
    },
    {
      title: "FAQ",
      description: "Learn answers to frequently asked questions on OpenOcean",
    },
    {
      title: "User Safety",
      description:
        "Learn more about anti-fraud and user safety processes on OpenOcean",
    },
    {
      title: "Partners",
      description:
        "Learn how you can partner with us to showcase your NFT drops",
    },
    {
      title: "Developers",
      description: "Learn how you can develop with OpenOcean",
    },
  ],
  questionItems: [
    { label: "How do I set my NFT as my Twitter profile picture?" },
    { label: "What are the key terms to know in NFTs and Web3?" },
    { label: "How do I create an NFT?" },
    {
      label:
        "What can I do if my art, image, or other IP is being sold without my permission?",
    },
    { label: "What can I do if I think my account is compromised?" },
    { label: "How do I create an OpenOcean account?" },
    { label: "How do creator earnings work on OpenOcean?" },
    { label: "How do I find my funds on Polygon?" },
    { label: "How can I revoke access to delisted items?" },
    { label: "How do I stay safe on Discord?" },
    { label: "Which blockchains does OpenOcean support?" },
    { label: "How do I sell an NFT?" },
    { label: "Where can I find NFT sales?" },
    { label: "How can I stay safe and protect my NFTs?" },
    { label: "How can I report fraudulent content on OpenOcean?" },
  ],
};

export const helpCenterSlice = createSlice({
  name: "helpCenterData",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = helpCenterSlice.actions;

export default helpCenterSlice.reducer;
