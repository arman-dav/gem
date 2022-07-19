import { FC, useEffect, useState } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as CloseIcon } from "../../assets/create/closeIcon.svg";
import { ReactComponent as OpenDropDownIcon } from "../../assets/create/openDropDown.svg";
import { ReactComponent as PlusIcon } from "../../assets/create/plusIcon.svg";
import {
  changeCreateBlockchainState,
  changeCreateLootState,
  selectLoot,
} from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

import { CreateLootSectionProps } from "./model";

const CreateLootSection: FC<CreateLootSectionProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { selectedLoots, createLootState } = useAppSelector(
    ({ createData }) => ({
      selectedLoots: createData.data.selectedLoots,
      createLootState: createData.data.createLootState,
    }),
    shallowEqual
  );

  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    if (selectedLoots.length === 3) {
      setMarginLeft(2);
    } else if (selectedLoots.length > 3) {
      setMarginLeft(2 + (selectedLoots.length - 3) * 16.7);
    }
  }, [selectedLoots.length]);

  return (
    <div className="createLootSection">
      <div className="createLootSection__loots">
        <div
          className="createLootSection__loots__upperPart"
          onClick={(e: any) => {
            if (e.target.className === "createLootSection__loots__upperPart") {
              dispatch(changeCreateLootState(!createLootState));
            }
            dispatch(changeCreateBlockchainState(false));
          }}
        >
          <div style={{ marginLeft: `-${marginLeft}rem` }}>
            {selectedLoots.length !== 0 ? (
              selectedLoots.map((selectedLoot) => {
                return (
                  <div key={selectedLoot.id}>
                    <img src={selectedLoot.imgSrc} alt="/" />
                    <p>{selectedLoot.name}</p>
                    <CloseIcon
                      onClick={() => dispatch(selectLoot(selectedLoot))}
                    />
                  </div>
                );
              })
            ) : (
              <p>Loot</p>
            )}
          </div>
          {selectedLoots.length < 3 ? null : (
            <span>
              <div></div>
              <span></span>
            </span>
          )}
          <OpenDropDownIcon
            className={
              createLootState
                ? "createLootSection__loots__upperPart--iconUp"
                : ""
            }
            onClick={() => {
              dispatch(changeCreateLootState(!createLootState));
            }}
          />
        </div>

        {createLootState ? (
          <div className="createLootSection__loots__secondPart">
            {data?.map(({ id, text, imgSrc }) => (
              <div id={`${id}`} key={id}>
                <img src={imgSrc} alt="/" />
                <p
                  onClick={(e: any) => {
                    dispatch(
                      selectLoot({
                        imgSrc: e.target.parentElement.firstChild.currentSrc,
                        name: e.target.textContent,
                        id: e.target.parentElement.id,
                      })
                    );
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="createLootSection--addLoot">
        <PlusIcon />
      </div>
    </div>
  );
};

export default CreateLootSection;
