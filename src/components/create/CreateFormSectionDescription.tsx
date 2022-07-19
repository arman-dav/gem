import { FC } from "react";

import { CreateFormSectionDescriptionProps } from "./model";

const CreateFormSectionDescription: FC<CreateFormSectionDescriptionProps> = ({
  cols,
  rows,
  title,
  description,
}) => {
  return (
    <div className="create__container__formSection--descriptionDiv">
      <label htmlFor="description">
        {/* {title} */}
        {description ? <p>{description}</p> : null}
        <textarea
          name="description"
          id="description"
          placeholder="Provide a detailed description of your photo"
          rows={rows}
          cols={cols}
        />
      </label>
    </div>
  );
};

export default CreateFormSectionDescription;
