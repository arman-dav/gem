import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/Faq"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));

const Create = lazy(() => import("./pages/CreatePage"));
const LootBox = lazy(() => import("./pages/LootBoxPage"));
const Gempool = lazy(() => import("./pages/GempoolPage"));
const CardPack = lazy(() => import("./pages/CardPackPage"));
const Raffle = lazy(() => import("./pages/RafflePage"));
const AttributedNFT = lazy(() => import("./pages/AttributedNFTPage"));

const AboutGempool = lazy(() => import("./pages/AboutGempools"));
const AboutLootbox = lazy(() => import("./pages/AboutLootbox"));
const AboutRaffles = lazy(() => import("./pages/AboutRaffles"));
const AboutCardPack = lazy(() => import("./pages/AboutCardPack"));
const AboutAttributedNFT = lazy(() => import("./pages/AboutAttributedNFT"));
const AboutCraftPool = lazy(() => import("./pages/AboutCraftingPool"));
const AboutTimeLuck = lazy(() => import("./pages/AboutTimeLuck"));

const GempoolDetails = lazy(() => import("./pages/GempoolDetailsPage"));
const LootboxDetails = lazy(() => import("./pages/LootboxDetailsPage"));
const RaffleDetails = lazy(() => import("./pages/RaffleDetailsPage"));
const CardCheckDetails = lazy(() => import("./pages/CardCheckDetailsPage"));
const CraftingPoolPage = lazy(() => import("./pages/CraftingPoolPage"));
const TimeLuckPage = lazy(() => import("./pages/TimeLuckPage"));

const Creator = lazy(() => import("./pages/CreatorPage"));

const Collection = lazy(() => import("./pages/dinamic-pages/CollectionPage"));

// const BlogCollectionsPage = lazy(() => import("./pages/BlogCoollections"));
const BlogCollectionsPage = lazy(() => import("./pages/BlogCollections"));

const NFTFractionComponent = lazy(() =>
  import("./pages/dinamic-pages/NFTFractionComponent")
);

const NFTDetailComponent = lazy(() =>
  import("./pages/dinamic-pages/NFTDetail")
);
const Home = lazy(() => import("./components/Home/Home"));

const routes = [
  {
    enabled: true,
    path: "/",
    component: () => <Home />,
    title: "home page ",
    child: null,
  },
  {
    enabled: true,
    path: "/about",
    component: () => <About />,
    title: "About page",
    child: null,
  },

  {
    enabled: true,
    path: "/faq",
    component: () => <FAQ />,
    title: "FAQ page",
    child: null,
  },
  {
    enabled: true,
    path: "/marketplace",
    component: () => process.env.REACT_APP_TYPE === 'Fractions'? <Marketplace />:<NotFound />,
    title: "Marketplace page",
    child: null,
  },
  {
    enabled: true,
    path: "/create",
    component: () => <Create />,
    title: "Create page",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutLootbox",
    component: () => <LootBox />,
    title: "Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutGempool",
    component: () => <Gempool />,
    title: "Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/cardpack",
    component: () => <CardPack />,
    title: "CardPack",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutRaffles",
    component: () => <Raffle />,
    title: "Raffle",
    child: null,
  },
  {
    enabled: true,
    path: "/create/craftingPool",
    component: () => <CraftingPoolPage />,
    title: "Crafting Pool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/timeLock",
    component: () => <TimeLuckPage />,
    title: "Time Luck",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutAttributedNFT",
    component: () => <AttributedNFT />,
    title: "Attributed NFT",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutGempool",
    component: () => <AboutGempool />,
    title: "About Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/timeLock",
    component: () => <AboutTimeLuck />,
    tittle: "Time Lock",
  },
  {
    enabled: true,
    path: "/craftingPool",
    component: () => <AboutCraftPool />,
    title: "About Craft pool",
  },
  {
    enabled: true,
    path: "/aboutLootbox",
    component: () => <AboutLootbox />,
    title: "About Lootbox",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutRaffles",
    component: () => <AboutRaffles />,
    title: "About Raffles",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutCardPack",
    component: () => <AboutCardPack />,
    title: "About Card Pack",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutAttributedNFT",
    component: () => <AboutAttributedNFT />,
    title: "About Attributed NFT",
    child: null,
  },
  {
    enabled: true,
    path: "/profile",
    component: () => <Creator />,
    title: "Creator home page",
    child: null,
  },
  {
    enabled: true,
    path: "/details/gempool",
    component: () => <GempoolDetails />,
    title: "Gempool Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/lootbox",
    component: () => <LootboxDetails />,
    title: "Gempool Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/raffle",
    component: () => <RaffleDetails />,
    title: "Raffle Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/cardCheck",
    component: () => <CardCheckDetails />,
    title: "Card Check Details",
    child: null,
  },
  {
    enabled: true,
    path: "/collection",
    component: () => process.env.REACT_APP_TYPE === 'Fractions'? <Collection /> :<NotFound />,
    title: "Collection",
    child: null,
  },
  {
    enabled: true,
    path: "/fractions",
    component: () => process.env.REACT_APP_TYPE === 'Fractions'? <NotFound />: <Collection />,
    title: "fractions",
    child: null,
  },
  {
    enabled: true,
    path: "/blog",
    component: () => <Blog />,
    title: "blog",
    child: null,
  },
  {
    enabled: true,
    path: "/blogCollections",
    component: () => <BlogCollectionsPage />,
    title: "blog Collections",
    child: null,
  },
  {
    enabled: true,
    path: "/fraction-detail/:tokenAddress/:tokenId",
    component: () => <NFTFractionComponent />,
    title: "blog Collections",
    child: null,
  },
  {
    enabled: true,
    path: "/detail/:tokenAddress/:tokenId",
    component: () => <NFTDetailComponent />,
    title: "blog Collections",
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
