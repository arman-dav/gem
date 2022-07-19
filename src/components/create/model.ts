export type CreateTitleProps = {
  text: string;
};

export type CreateBtnProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.LegacyRef<HTMLDivElement>;
};

export type CreateFormSectionLabelProps = {
  type: string;
  placeholder: string;
  name: string;
  hide?: string;
};

export type CreateLootSectionLootProps = {
  text: string;
};

export type CreateFormSectionDescriptionProps = {
  title: string;
  description?: string;
  rows: number;
  cols: number;
};

export type CreateLootSectionProps = {
  data: CreateLootSectionPropsDataType[];
};

type CreateLootSectionPropsDataType = {
  text: string;
  id: number;
  imgSrc?: string;
};
export type CreateFormSectionProps = {
  schema: string;
};

export interface IFileNamesState {
  name: string;
  preview: string;
  lastModified: number;
  path: string;
  size: number;
}
