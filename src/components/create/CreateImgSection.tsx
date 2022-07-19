import { useState } from "react";

import DropZone from "react-dropzone";

import CreateImgSectionAfterDropping from "./CreateImgSectionAfterDropping";
import CreateImgSectionBeforeDropping from "./CreateImgSectionBeforeDropping";
import { IFileNamesState } from "./model";

const CreateImgSection = () => {
  const [fileNames, setFileNames] = useState<IFileNamesState[]>([]);

  const handleDrop = (acceptedfileNames: any[]) => {
    setFileNames(
      acceptedfileNames.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  return (
    <>
      <span className="create__container__imgSection_span">Upload a file</span>
      <p className="create__container__imgSection_p">
        File types supported: JPG, RAW. Max size: 40 Mb
      </p>
      <DropZone
        accept="image/jpeg, image/png, image/gif, image/bmp image/svg"
        onDrop={handleDrop}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              className: "create__container__imgSection",
            })}
          >
            <input {...getInputProps()} multiple={false} />
            {fileNames.length === 0 ? (
              <CreateImgSectionBeforeDropping />
            ) : (
              <CreateImgSectionAfterDropping fileNames={fileNames} />
            )}
          </div>
        )}
      </DropZone>
    </>
  );
};

export default CreateImgSection;
