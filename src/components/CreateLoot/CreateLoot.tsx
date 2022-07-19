import { FC, useEffect } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as CloseIcon } from "../../assets/create/closeIcon.svg";
import { ReactComponent as DragImageIcon } from "../../assets/create/dragImageIcon.svg";
import { changeProgress } from "../../redux/features/create/createSlice";
import CreateFormSectionDescription from "../create/CreateFormSectionDescription";
import CreateFormSectionLabel from "../create/CreateFormSectionLabel";
import CreateTitle from "../create/CreateTitle";

import CreateLootButton from "./CreateLootButton";
import { CreateLootProps } from "./model";

const CreateLoot: FC<CreateLootProps> = ({
  closeModal,
  title,
  secondInputHide,
}) => {
  useEffect(() => {
    const close = (e: any) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [closeModal]);

  const handleCloseCreateLootModal = (e: any) => {
    if (e.target.className === "createLoot__modal") {
      closeModal();
    }
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeProgress(2));
  };

  return (
    <div className="createLoot__modal" onClick={handleCloseCreateLootModal}>
      <div className="createLoot">
        <div className="createLoot__container">
          <div className="createLoot__container--title">
            <CreateTitle text={title} />
          </div>
          <div className="createLoot__container__wrapper">
            <div className="createLoot__container__wrapper__imgSection">
              <span>Upload a file</span>
              <p>File types supported: JPG, RAW. Max size: 40 Mb</p>
              <div>
                <CloseIcon />
                <DragImageIcon />
                <p>
                  Drag & drop file or
                  <span> browse media on your devices</span>
                </p>
              </div>
            </div>
            <div className="createLoot__container__wrapper__formSection">
              <CreateFormSectionLabel
                name="nameCreateLoot"
                type="text"
                placeholder="Name"
              />
              <div>
                <CreateFormSectionLabel
                  name="probability"
                  type="text"
                  placeholder="Probability"
                  hide={secondInputHide}
                />
                <p>%</p>
              </div>
              <CreateFormSectionDescription
                title="Description"
                rows={secondInputHide ? 9 : 11}
                cols={50}
              />
            </div>{" "}
          </div>
          <CreateLootButton text="Create" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default CreateLoot;
