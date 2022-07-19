import { Discord, Twitter } from 'react-bootstrap-icons';


import { ConfigurationType, ClientConfigType } from "./types";

export const configurations: { [env: string]: ConfigurationType } = {
  development: {
    chainId: 42,
    networkName: "Kovan",
    deployments: require("../abis/kovan.abis.json"),
  },
  test: {
    chainId: 42,
    networkName: "Kovan",
    deployments: require("../abis/kovan.abis.json"),
  },
  production: {
    chainId: 42,
    networkName: "Kovan",
    deployments: require("../abis/kovan.abis.json"),
  },
};

export const clientConfig: ClientConfigType = {
  NextGem: {
    brandName: "Genesis Gems",
    description: `
      We’re bringing historic gemstones to web3. 
      Our collection of 880 precious gemstones dates back to the Chantel Dynasty in 800 AD, with a proven history trading back among emperors, temples, and migration to the United States.
      Each stone has been certified by the GIA for authenticity. The GIA is an independent organization & the World's authority in gemology.
    `,
    page404: {
      titles: ["Was there something here?", "Is there a missing page?", "Is there a broken link?"],
      descriptions: [
        `Precious, rare, and hard to find. Is that what you're looking for? Well, we have gems...`,
        `We couldn't find the precious page you're looking for, but we do have some precious gems...`,
        `“The gem cannot be polished without friction, nor man perfected without trials.” — Chinese Proverb`,
        `“These gems have life in them: their colors speak, say what words fail of.” — Mary Ann Evans`,
        `“Whatever anyone does or says, I must be good; just as if the emerald were always saying this: "Whatever anyone does or says, I must still be emerald, and keep my color.” — Marcus Aurelius`,
        `“Guard well your spare moments. They are like uncut diamonds. Discard them and their value will never be known. Improve them and they will become the brightest gems in a useful life.” ― Ralph Waldo Emerson`,
      ],
    },
    socialAccounts: [
      {
        name: "Twitter",
        handle: "GenesisGemsNFT",
        link: "https://twitter.com/GenesisGemsNFT",
        icon: Twitter,
      }, {
        name: "Discord",
        link: "https://discord.gg/xsFfs5pS",
        icon: Discord,
      }
    ],
    headerNavItems: [
      {
        text: "Home",
        link: "/",
        isAbsolutePath: true,
      },
      {
        text: "Collections",
        link: "/Collection",
      },
      {
        text: 'Fractions',
        link: '/fractions'
      },
      {
        text: "Marketplace",
        link: "/marketplace",
      },
      {
        text: "List",
        link: '',
        tooltip: 'Coming soon'
      },
      {
        text: "FAQ",
        link: "https://www.genesisgems.io/faq",
        isAbsolutePath: true
      },
    ],
    footerNavItems: [
      // {
      //   text: "Create",
      //   links: [
      //     {
      //       text: "NFT Staking Pools",
      //       link: "/create/attributedNft",
      //     },
      //     {
      //       text: "NFT Lootboxes",
      //       link: "/",
      //     },
      //     {
      //       text: "NFT Raffles",
      //       link: "/",
      //     },
      //   ],
      // },
      {
        text: "My account",
        links: [
          {
            text: "My Profile",
            link: "https://opensea.io/account",
            isAbsolutePath:true
          },
          // {
          //   text: "My Gem Pools",
          //   link: "/create/gempool",
          // },
          // {
          //   text: "My Lootboxes",
          //   link: "/create/lootbox",
          // },
          // {
          //   text: "My Raffles",
          //   link: "/create/raffle",
          // },
        ],
      },
      {
        text: "Learn",
        links: [
          {
            text: "FAQ",
            link: "https://www.genesisgems.io/faq",
            isAbsolutePath: true
          },
        ],
      },
    ],
  },
};
