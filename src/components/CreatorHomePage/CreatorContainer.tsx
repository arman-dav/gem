import { useMemo, useState } from "react";

import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";

import coverPhoto from "../../assets/creator/coverPhoto.png";
import profilePhoto from "../../assets/creator/profilePhoto.png";
import SearchIcon from "../../assets/home/SearchIcon";
import { setModal } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";
import NetworkBanner from "../NetworkBanner/NetworkBanner";
import BuyNowModal from "../ReusableComponents/BuyNowmodal/BuyNowModal";

import CreatorSider from "./CreatorSider";
import CreatorSortByPrice from "./CreatorSortByPrice";

type activeType = {
  id: number;
  active: boolean;
  title: string;
  type: string;
};

const CreatorContainer = () => {
  const dispatch = useDispatch();
  const [typeData, setTypeData] = useState([
    {
      id: 1,
      active: false,
      title: "My gems",
      type: "allTokens",
    },
    {
      id: 2,
      active: true,
      title: "My listings",
      type: "allListings",
    },
  ]);

  const { user, Moralis, isInitialized } = useMoralis();
  const [accountNft, setAccountNft]: any = useState([]);
  let userAddress = user?.attributes.accounts[0];
  const [isCheck, setIsCheck] = useState(false);
  const { isOnValidChain, isModal } = useAppSelector(
    ({ walletData, createData }) => ({
      isOnValidChain: walletData.isOnValidChain,
      isModal: createData.isModal,
    })
  );

  const [type, setType] = useState("allListings");
  const userListingsDataRequestParams = {
    field: "transfer.to_address",
    operator: "=",
    value: userAddress,
  };

  const handleCheck = () => {
    setIsCheck(!isCheck);
  };
  useMemo(() => {
    let filter: any = isCheck
      ? []
      : [
          userListingsDataRequestParams,
          {
            field: "listing.closed",
            operator: "!=",
            value: true,
          },
        ];
    Moralis.Cloud.run(type, { filter: filter }, { useMasterKey: true }).then(
      (res) => setAccountNft(res)
    );
  }, [isInitialized, Moralis.Cloud, user, type, isCheck]);

  const handleActive = (item: activeType) => {
    const contentClone = [...typeData];
    contentClone.map((i) => (i.active = false));
    item.active = true;
    setType(item.type);
    setTypeData(contentClone);
  };
  const contentStr: any = localStorage.getItem("itemDetail");
  const content = JSON.parse(contentStr);
  const hadleCloseModul = (className: string) => {
    if (className === "nftDetailContent--modal") {
      dispatch(setModal(false));
    }
  };

  return (
    <div className="creatorContainer">
      {isModal && (
        <div
          className="nftDetailContent--modal"
          onClick={(e) =>
            hadleCloseModul((e.target as HTMLDivElement).className)
          }
          style={{
            height: window.innerHeight,
            top: window.scrollY,
          }}
        >
          <BuyNowModal content={content} isOnValidChain={isOnValidChain}>
            {isOnValidChain ? (
              <button
                type="button"
                onClick={(e) =>
                  hadleCloseModul((e.target as HTMLDivElement).className)
                }
              >
                Confirm
              </button>
            ) : (
              <NetworkBanner
                message={(networkName) =>
                  `Your wallet appears to be connected to an unsupported network. This token is only available on ${networkName}. Please connect to ${networkName} to proceed.`
                }
              />
            )}
          </BuyNowModal>
        </div>
      )}
      <div className="creatorContainer__backgroundImg">
        <img src={coverPhoto} alt="cover" />
      </div>
      <div className="creatorContainer__content">
        <div>
          <div className="creatorContainer__content__userImg">
            <img src={profilePhoto} alt="profile" />
          </div>
          <p className="creatorContainer__content__userName">My Profile</p>
          <div className="creatorContainer__content__itemsOwners">
            <div className="creatorContainer__content__itemsOwners--items">
              {userAddress !== undefined &&
                userAddress.slice(0, 6) +
                  "..." +
                  userAddress.slice(
                    userAddress.length - 5,
                    userAddress.length - 1
                  )}
            </div>
          </div>
          <div className="creatorContainer__content__searchPart">
            <div className="creatorContainer__content__searchPart--search">
              <SearchIcon color="#C4C4C4" />
              <input type="text" placeholder="Enter your search terms here" />
            </div>
            <CreatorSortByPrice />
          </div>
          <div className="creatorContainer__content__type">
            {typeData.map((item) => (
              <div
                key={item.id}
                style={{
                  borderBottom: item.active ? "1px solid #B1DFF7" : "none",
                }}
                onClick={() => handleActive(item)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="allItems" onClick={handleCheck}>
            <div
              className="allItems__check"
              style={{ background: isCheck ? "#B1DFF7" : "" }}
            ></div>
            <div className="allItems__title">Show closed items</div>
          </div>
          <div className="creatorContainer__content__sliderSection">
            <CreatorSider accountNft={accountNft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorContainer;
////0xfb96566bf057f0d07e14c951369421f40c3d80a081a52f0f9251f84a772f6c13
//0x39c86a07a4f411fb26c6964820791372b5add8db
//0x52854879711eec57f47a63dbed8b00c589f3c12e
