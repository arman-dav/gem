import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as OpenDropDownIcon } from "../../assets/create/openDropDown.svg";
import {
  changeCreateBlockchainState,
  changeCreateLootState,
  selectBlockchain,
} from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

import { blockChainFakeData } from "./blockchainFakedata";

const CreateBlockchainSection = () => {
  const { createBlockchainState, selectedBlockchain } = useAppSelector(
    ({ createData }) => ({
      selectedLoots: createData.data.selectedLoots,
      createBlockchainState: createData.data.createBlockchainState,
      selectedBlockchain: createData.data.selectedBlockchain,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  return (
    <div className="createBlockchain">
      <div
        className="createBlockchain__upperPart"
        onClick={(e: any) => {
          console.dir(e.target);
          if (e.target.className === "createBlockchain__upperPart") {
            dispatch(changeCreateBlockchainState(!createBlockchainState));
          }
          dispatch(changeCreateLootState(false));
        }}
      >
        {selectedBlockchain ? (
          <div key={selectedBlockchain.id}>
            <img src={selectedBlockchain.imgSrc} alt="/" />
            <p>{selectedBlockchain.name}</p>
            {/* <CloseIcon
              onClick={() => dispatch(selectBlockchain(selectedBlockchain))}
            /> */}
          </div>
        ) : (
          <p>Blockchain</p>
        )}

        <OpenDropDownIcon
          className={
            createBlockchainState ? "createBlockchain__upperPart--iconUp" : ""
          }
          onClick={() => {
            dispatch(changeCreateBlockchainState(!createBlockchainState));
          }}
        />
      </div>
      {createBlockchainState ? (
        <div className="createBlockchain__secondPart">
          <div>
            {blockChainFakeData.map(({ id, imgSrc, text }) => (
              <div id={`${id}`} key={id}>
                <img src={imgSrc} alt="/" />
                <p
                  onClick={(e: any) => {
                    dispatch(
                      selectBlockchain({
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
        </div>
      ) : null}
    </div>
  );
};

export default CreateBlockchainSection;
