import { useRef } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { changeProgress } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";
import CreateBlockchainSection from "../create/CreateBlockchainSection";
import CreateBtn from "../create/CreateBtn";
import CreateFormSectionDescription from "../create/CreateFormSectionDescription";
import CreateFormSectionLabel from "../create/CreateFormSectionLabel";
import CreateImgSection from "../create/CreateImgSection";
import CreateLootSection from "../create/CreateLootSection";
import CreateTitle from "../create/CreateTitle";
import Done from "../CreateLoot/Done";

import { gempoolFakeData } from "./gempoolFakeData";

const Gempool = () => {
  const { progress } = useAppSelector(
    ({ createData }) => ({ progress: createData.data.progress }),
    shallowEqual
  );
  const lootRef = useRef<any>(null);
  const createBtnRef = useRef<any>();

  const executeScroll = () =>
    lootRef.current?.scrollIntoView({ block: "start" });
  const executeBtnScroll = () =>
    createBtnRef.current?.scrollIntoView({ block: "start" });

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeProgress(2));
    executeScroll();
  };

  const closeModal = () => {
    dispatch(changeProgress(0));
    executeBtnScroll();
  };

  return (
    <>
      <div className="create--scroll" ref={lootRef}></div>
      <div className={progress !== 0 ? "create--blur" : "create"}>
        <div className="create__container--size">
          <div className="create__container">
            <CreateTitle text="Create new Gempool" />
            <CreateImgSection />
            <div className="create__container__formSection">
              <CreateFormSectionLabel
                name="name"
                type="text"
                placeholder="Item Name"
              />
              <CreateFormSectionLabel
                name="startingPrice"
                type="text"
                placeholder="Enter location"
              />
              <div className="create__container__formSection--minMaxDiv">
                <CreateFormSectionLabel
                  name="minimum"
                  type="text"
                  placeholder="One Day"
                />
                <CreateFormSectionLabel
                  name="maximum"
                  type="text"
                  placeholder="7 Day"
                />
              </div>
              <CreateFormSectionLabel
                name="priceIncreaseFactor"
                type="text"
                placeholder="100"
              />
              <CreateFormSectionLabel
                name="maximumClaims"
                type="text"
                placeholder="0"
              />
              <CreateFormSectionDescription
                title="Description"
                rows={10}
                cols={74}
                description="The description will be included on the NFT staking page next to staking pool information"
              />
            </div>
            <div ref={createBtnRef}></div>
            {/* empty div for closing modal and continiue from current position */}
            <CreateLootSection data={gempoolFakeData} />
            <CreateBlockchainSection />
            <CreateBtn text="Create" onClick={handleClick} />
          </div>
        </div>
      </div>
      {progress === 2 ? <Done closeModal={closeModal} /> : null}
    </>
  );
};

export default Gempool;
