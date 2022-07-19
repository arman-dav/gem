import { ReactComponent as CloseIcon } from "../../assets/create/closeIcon.svg";
import { ReactComponent as DragImageIcon } from "../../assets/create/dragImageIcon.svg";

const CreateImgSectionBeforeDropping = () => {
  return (
    <div className="create__container__imgSection__beforeDroppinng">
      <div className="create__container__imgSection--img">
        <div className="create__container__imgSection__imgContainer">
          <CloseIcon />
          <div className="create__container__imgSection__imgContainer--imgDiv">
            <DragImageIcon />
          </div>
          <p>
            Drag & drop file or
            <span>browse media on your device</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateImgSectionBeforeDropping;
