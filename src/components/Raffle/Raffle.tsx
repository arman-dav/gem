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
import CreateLoot from "../CreateLoot/CreateLoot";
import Done from "../CreateLoot/Done";

import { raffleFakeData } from "./raffleFakeData";

const Raffle = () => {
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
    dispatch(changeProgress(1));
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
            <CreateTitle text="Create new Raffle" />
            <CreateImgSection />
            <div className="create__container__formSection">
              <CreateFormSectionLabel
                name="name"
                type="text"
                placeholder="Item Name"
              />
              <CreateFormSectionLabel
                name="ticketPrice"
                type="text"
                placeholder="Enter Price"
              />
              <div className="create__container__formSection--minMaxDiv">
                <CreateFormSectionLabel
                  name="raffleStartDate"
                  type="text"
                  placeholder="1"
                />
                <CreateFormSectionLabel
                  name="raffleStartDate"
                  type="text"
                  placeholder="3"
                />
              </div>
              <CreateFormSectionLabel
                name="totalAvailableRaffleTickets"
                type="text"
                placeholder="100"
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
            <CreateLootSection data={raffleFakeData} />
            <CreateBlockchainSection />
            <CreateBtn text="Create" onClick={handleClick} />
          </div>
        </div>
      </div>
      {progress === 1 ? (
        <CreateLoot
          closeModal={closeModal}
          title="Create prize"
          secondInputHide="hide"
        />
      ) : progress === 2 ? (
        <Done closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default Raffle;
