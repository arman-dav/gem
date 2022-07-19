export type GempoolDetailsTableWithTwoColumnProps = {
  data: WithTwoColumnDataType[];
  title: string;
};

type WithTwoColumnDataType = {
  id: number;
  first: string;
  second: string;
};

export type GempoolDetailsTableWithThreeColumnProps = {
  data: WithThreeColumnDataType[];
  title: string;
};

type WithThreeColumnDataType = {
  id: number;
  first: string;
  second: string;
  third: string;
};

export type GempoolDetailsInfoCompProps = {
  nft: string;
  title: string;
  secondBtn: string;
  description: string;
  details: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    last: string;
  };
  detailsData: detailsFakeDataType;
};

export type detailsFakeDataType = {
  first: string | number;
  second: string | number;
  third: string | number;
  fourth: string | number;
  last: string | number;
};

export type DetailsSliderItemProps = {
  collectionName: string;
  author: string;
};
