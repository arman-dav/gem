import { FC } from "react";

import { ReactComponent as CloseIcon } from "../../assets/create/closeIcon.svg";

import { IFileNamesState } from "./model";

export type CreateImgSectionAfterDroppingProps = {
  fileNames: IFileNamesState[];
};

const CreateImgSectionAfterDropping: FC<CreateImgSectionAfterDroppingProps> = ({
  fileNames,
}) => {
  return (
    <div className="create__container__imgSection__afterDropping">
      <div
        key={fileNames[0].name}
        className="create__container__imgSection__afterDragging--imgDiv"
      >
        <CloseIcon />
        <img src={fileNames[0].preview} alt={fileNames[0].name} />
      </div>
    </div>
  );
};

export default CreateImgSectionAfterDropping;
