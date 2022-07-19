import { useRef } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as LootboxIconSmall } from "../../assets/create/lootboxIconSmall.svg";
import {
  changeCreateBlockchainState,
  changeCreateLootState,
  changeProgress,
} from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";
import CreateLoot from "../CreateLoot/CreateLoot";
import Done from "../CreateLoot/Done";

import CreateBlockchainSection from "./CreateBlockchainSection";
import CreateBtn from "./CreateBtn";
import CreateFormSectionDescription from "./CreateFormSectionDescription";
import CreateFormSectionLabel from "./CreateFormSectionLabel";
import CreateImgSection from "./CreateImgSection";
import CreateLootSection from "./CreateLootSection";
import CreateTitle from "./CreateTitle";
import { lootboxFakeData } from "./lootboxFakeData";

const CreateContainer = () => {
  const { progress } = useAppSelector(
    ({ createData }) => ({ progress: createData.data.progress }),
    shallowEqual
  );

  const lootRef = useRef<HTMLDivElement>(null);
  const createBtnRef = useRef<HTMLDivElement>(null);

  const executeScroll = () =>
    lootRef.current?.scrollIntoView({ block: "start" });
  const executeBtnScroll = () =>
    createBtnRef.current?.scrollIntoView({ block: "start" });

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeProgress(1));
    executeScroll();
  };

  const closeModal = () => {
    dispatch(changeProgress(0));
    executeBtnScroll();
  };

  const handleCreatePageClick = (e: any) => {
    if (
      e.target.className !== "createBlockchain__upperPart" &&
      e.target.className !== "createLootSection__loots__upperPart" &&
      e.target.parentElement.parentElement.parentElement.className !==
        "createBlockchain__secondPart" &&
      e.target.parentElement.parentElement.className !==
        "createLootSection__loots__secondPart"
    ) {
      dispatch(changeCreateBlockchainState(false));
      dispatch(changeCreateLootState(false));
    }
  };

  return (
    <>
      <div className="create--scroll" ref={lootRef}></div>
      <div
        className={progress !== 0 ? "create--blur" : "create"}
        onClick={handleCreatePageClick}
      >
        <div className="create__container--size">
          <div
            className={
              progress !== 0 ? "create--blur__container" : "create__container"
            }
          >
            <CreateTitle text="Create new Lootbox">
              <LootboxIconSmall />
            </CreateTitle>
            <CreateImgSection />
            <div className="create__container__formSection">
              <CreateFormSectionLabel
                name="name"
                type="text"
                placeholder="Name"
              />
              <CreateFormSectionLabel
                name="openPrice"
                type="text"
                placeholder="Open price - Enter location"
              />
              <div className="create__container__formSection--minMaxDiv">
                <CreateFormSectionLabel
                  name="minimum"
                  type="text"
                  placeholder="Minimum Loot Awarded"
                />
                <CreateFormSectionLabel
                  name="maximum"
                  type="text"
                  placeholder="Maximum Loot awarded"
                />
              </div>
              <CreateFormSectionLabel
                name="maximumOpens"
                type="text"
                placeholder="Maximum opens"
              />
              <CreateFormSectionDescription
                title="Description"
                rows={10}
                cols={74}
                description="The description will be included on the NFT staking page next to staking pool information"
              />
            </div>
            <div ref={createBtnRef}></div>{" "}
            {/* empty div for closing modal and continiue from current position */}
            <CreateLootSection data={lootboxFakeData} />
            <CreateBlockchainSection />
            <CreateBtn text="Create" onClick={handleClick} />
          </div>
        </div>
      </div>
      {progress === 1 ? (
        <CreateLoot closeModal={closeModal} title="Create loot" />
      ) : progress === 2 ? (
        <Done closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default CreateContainer;
