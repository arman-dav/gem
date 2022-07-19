import { FC } from "react";

import { CreateFormSectionLabelProps } from "./model";

const CreateFormSectionLabel: FC<CreateFormSectionLabelProps> = ({
  name,
  placeholder,
  type,
  hide,
}) => {
  return (
    <div className={hide ? "input-block--hide" : "input-block"}>
      <input type={type} name={name} id={name} required spellCheck="false" />
      <span className="placeholder">{placeholder}</span>
    </div>
  );
};

export default CreateFormSectionLabel;
