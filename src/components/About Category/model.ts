export type AboutCategoryProps = {
  aboutCategoryData: AboutCategoryDataType;
  data: AboutCategoryPropsDataType[];
  children: React.ReactNode;
};

type AboutCategoryDataType = {
  title: string;
  description: string;
};

type AboutCategoryPropsDataType = {
  imgUrl: string;
  title: string;
  description: string;
};

export type AboutCategoryActionProps = {
  title: string;
  description: string;
  imgUrl: string;
};
