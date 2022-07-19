import { FC } from "react";

import { CreateTitleProps } from "./model";

const CreateTitle: FC<CreateTitleProps> = ({ text, children }) => {
  return (
    <div className="create__container--title">
      {children}
      <p>{text}</p>
    </div>
  );
};

export default CreateTitle;
