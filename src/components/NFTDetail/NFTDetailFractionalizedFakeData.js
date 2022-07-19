import QuestionIcon from "../../assets/NFTDetail/questionMark.svg";

export const FractionalizedFakeData = {
  titles: [
    // {
    //   title: "Unit price ($)",
    //   id: 1,
    // },
    {
      title: "Unit price",
      id: 2,
    },
    {
      title: "Fraction",
      id: 3,
      img: QuestionIcon,
    },
    {
      title: "Owner",
      id: 4,
    },
    {
      title: "Purchase action",
      id: 5,
    },
  ],
  content: [
    {
      id: 1,
      usdPrice: "$ 4500",
      ethPrice: 0.2,
      fraction: 23,
      owner: "0x42db....5sdf",
    },
    {
      id: 2,
      usdPrice: "$ 4500",
      ethPrice: 0.1,
      fraction: 20,
      owner: "0x42db....5sdf",
    },
    {
      id: 3,
      usdPrice: "$ 4500",
      ethPrice: 0.3,
      fraction: 26,
      owner: "0x42db....5sdf",
    },
    {
      id: 4,
      usdPrice: "$ 4500",
      ethPrice: 2,
      fraction: 32,
      owner: "0x42db....5sdf",
    },
  ],
};
