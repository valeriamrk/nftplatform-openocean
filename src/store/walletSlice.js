import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallets: [
    {
      id: 1,
      name: "MetaMask",
      logo: "https://opensea.io/static/images/logos/metamask-alternative.png",
    },
    {
      id: 2,
      name: "Coinbase Wallet",
      logo: "https://avatars.githubusercontent.com/u/18060234?s=280&v=4",
    },
    {
      id: 3,
      name: "WalletConnect",
      logo: "https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png",
    },
    {
      id: 4,
      name: "Fortmatic",
      logo: "https://static.opensea.io/logos/fortmatic-alternative.png",
    },
    {
      id: 5,
      name: "Kaikas",
      logo: "https://opensea.io/static/images/logos/kaikas-alternative.png",
    },
    {
      id: 6,
      name: "Bitski",
      logo: "https://static.opensea.io/logos/bitski-alternative.png",
    },
    {
      id: 7,
      name: "Venly",
      logo: "https://opensea.io/static/images/logos/venly.svg",
    },
    {
      id: 8,
      name: "Dapper",
      logo: "https://static.opensea.io/logos/dapper-icon.png",
    },
    {
      id: 9,
      name: "Authereum",
      logo: "https://295431006-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LtqfI5R9O0jZ6EUSMby%2F-M5YjzkZlYRpsKj80DNu%2F-M5Yk_4RdkYkaQ9BFMc5%2Fauthereum_shield.svg?alt=media&token=a23e3a25-06e5-4271-9ca1-bbde6b8070ee",
    },
    {
      id: 10,
      name: "Torus",
      logo: "https://icohigh.net/uploads/posts/2019-08/1567158237_torus_logo.png",
    },
  ],
};

export const walletSlice = createSlice({
  name: "walletData",
  initialState,
  reducers: {},
});

// export const { } = walletSlice.actions;

export default walletSlice.reducer;
