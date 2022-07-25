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
    element: () => <Home />,
    title: "home page ",
    child: null,
  },
  {
    enabled: true,
    path: "/about",
    element: () => <About />,
    title: "About page",
    child: null,
  },

  {
    enabled: true,
    path: "/faq",
    element: () => <FAQ />,
    title: "FAQ page",
    child: null,
  },
  {
    enabled: true,
    path: "/marketplace",
    element: () => process.env.REACT_APP_TYPE === 'Fractions'? <Marketplace />:<NotFound />,
    title: "Marketplace page",
    child: null,
  },
  {
    enabled: true,
    path: "/create",
    element: () => <Create />,
    title: "Create page",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutLootbox",
    element: () => <LootBox />,
    title: "Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutGempool",
    element: () => <Gempool />,
    title: "Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/cardpack",
    element: () => <CardPack />,
    title: "CardPack",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutRaffles",
    element: () => <Raffle />,
    title: "Raffle",
    child: null,
  },
  {
    enabled: true,
    path: "/create/craftingPool",
    element: () => <CraftingPoolPage />,
    title: "Crafting Pool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/timeLock",
    element: () => <TimeLuckPage />,
    title: "Time Luck",
    child: null,
  },
  {
    enabled: true,
    path: "/create/aboutAttributedNFT",
    element: () => <AttributedNFT />,
    title: "Attributed NFT",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutGempool",
    element: () => <AboutGempool />,
    title: "About Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/timeLock",
    element: () => <AboutTimeLuck />,
    tittle: "Time Lock",
  },
  {
    enabled: true,
    path: "/craftingPool",
    element: () => <AboutCraftPool />,
    title: "About Craft pool",
  },
  {
    enabled: true,
    path: "/aboutLootbox",
    element: () => <AboutLootbox />,
    title: "About Lootbox",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutRaffles",
    element: () => <AboutRaffles />,
    title: "About Raffles",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutCardPack",
    element: () => <AboutCardPack />,
    title: "About Card Pack",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutAttributedNFT",
    element: () => <AboutAttributedNFT />,
    title: "About Attributed NFT",
    child: null,
  },
  {
    enabled: true,
    path: "/profile",
    element: () => <Creator />,
    title: "Creator home page",
    child: null,
  },
  {
    enabled: true,
    path: "/details/gempool",
    element: () => <GempoolDetails />,
    title: "Gempool Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/lootbox",
    element: () => <LootboxDetails />,
    title: "Gempool Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/raffle",
    element: () => <RaffleDetails />,
    title: "Raffle Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/cardCheck",
    element: () => <CardCheckDetails />,
    title: "Card Check Details",
    child: null,
  },
  {
    enabled: true,
    path: "/collection",
    element: () => process.env.REACT_APP_TYPE === 'Fractions'? <Collection /> :<NotFound />,
    title: "Collection",
    child: null,
  },
  {
    enabled: true,
    path: "/fractions",
    element: () => process.env.REACT_APP_TYPE === 'Fractions'? <NotFound />: <Collection />,
    title: "fractions",
    child: null,
  },
  {
    enabled: true,
    path: "/blog",
    element: () => <Blog />,
    title: "blog",
    child: null,
  },
  {
    enabled: true,
    path: "/blogCollections",
    element: () => <BlogCollectionsPage />,
    title: "blog Collections",
    child: null,
  },
  {
    enabled: true,
    path: "/fraction-detail/:tokenAddress/:tokenId",
    element: () => <NFTFractionComponent />,
    title: "blog Collections",
    child: null,
  },
  {
    enabled: true,
    path: "/detail/:tokenAddress/:tokenId",
    element: () => <NFTDetailComponent />,
    title: "blog Collections",
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
