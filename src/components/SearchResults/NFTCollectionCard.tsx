import { FC, useState } from "react";

import {ReactComponent as Icon} from '../../assets/collecton/Group 783 (1).svg'
import Img from "../../assets/home/noImgIcon.svg";
import {ReactComponent as  QuestionIcon } from '../../assets/NFTDetail/questionMark.svg'
import { ReactComponent as ShareIcon } from "../../assets/searchResult/shareIcon.svg";
import { NFTItem } from "../../redux/features/marketplace/model";
import GiaDataUtils from "../../utils/GiaDataUtils";
import AnchorElTooltips from "../ReusableComponents/TollTip";



const NFTCollectionCard: FC<NFTItem | any> = ({
  id,
  onClickToken,
  onClockDetail,
  category,
  data,
  usdPrice,
  onClickShare,
  isAuthenticated,
  image,
  listing
}) => {
  const [showBuyNow, setShowBuyNow] = useState<boolean>(false);
  let categoryName =
  GiaDataUtils.getListingName(data) || data?.title.length > 20
    ? data?.title.slice(0, 20) + "..."
    : data.title || "";
  
  let curentPrice = data?.price * usdPrice.USD;
  let drobPrice = curentPrice.toFixed(0);

  const hasMediaUrl = image !== undefined;
  const isVideo = hasMediaUrl && image.match(/\.(webm)$/);
  const imageUrlForBlurryBg = !isVideo && hasMediaUrl ? image : '';

  const isBuyable = !listing.closed && !listing.sold;
  const closedText = listing.sold ? "Sold" : "Unlisted";
 
   
  return (
      <div className={`nftCollectionCard  `} key={id}>
          <div className={`nftCollectionCard--container ${id  === 1 ? 'nftCollectionCard_fractionalize' : '' } `}>
          <div
              className={`nftCollectionCard__imgSection `}
              onMouseMove={() => setShowBuyNow(true)}
              onMouseLeave={() => setShowBuyNow(false)}
          >
              <div className='nftCollectionCard__imgSection--iconPart' style={{ justifyContent: id === 1 ? 'space-between' : 'flex-end'}}>
                  {id === 1 && (  <div className="nftCollectionCard__imgSection__icons">
                   <Icon/>
                   <QuestionIcon/>
                  </div> ) }
                  <ShareIcon onClick={onClickShare} />
              </div>
              {/* @ts-ignore */}
              <div style={{ '--imageUrl': `url(${imageUrlForBlurryBg})` }}
                  className='nftCollectionCard__imgSection__imgDiv'
                  onClick={onClockDetail}
              >
                  {hasMediaUrl ? (
                      isVideo ? (
                          <video autoPlay loop>
                              <source src={image} type='video/webm' />
                          </video>
                      ) : (
                          <img src={image} alt='#' />
                      )
                  ) : (
                      <img
                          src={Img}
                          alt='#'
                          className='nftCollectionCard__imgSection__imgDiv--noImage'
                      />
                  )}
                  {!isBuyable || showBuyNow ? (
                      <span
                        //   onClick={isBuyable ? onClickToken : () => {}}
                          className={`buyNow ${!isAuthenticated && 'buyNow--disable'} ${!isBuyable && 'buyNow--closed'}`}
                      >
                          {isBuyable ? 'Buy Now' : closedText}
                      </span>
                  ) : null}
              </div>
          </div>
          </div>
         
          <div className='nftCollectionCard__infoSection'>
              <div>
                  <h4 title={categoryName} className='text-ellipsis'>{categoryName}</h4>
                  <p>{`${data?.price} ETH`}    </p>
              </div>
              <div>
                  <div className='nftCollectionCard__infoSection--container_button'>
                      <div className='nftCollectionCard__infoSection--container_button--button'>
                          {id === 1  ? 'Fractionlized gem' :  category?.name}
                      </div>
                      <div className='nftCollectionCard__infoSection--container_button--button' style={{width: id ===  1 ?  '5px' : 'auto'} }>
                      { id === 1 ? "..." : data?.carat}
                       {id === 1 && (
                           <AnchorElTooltips title={`${data?.carat}ct`} >
                           <div className="gemType">
                               Ruby
                           </div>
                           <div className="gemType">
                               Ruby
                           </div>
                         </AnchorElTooltips>
                       )} 
                      </div>
                  </div>
                  <div className='nftCollectionCard__infoSection--usd_price'>
                  USD ${drobPrice} 
                  </div>
              </div>
          </div>
      </div>
  );
};

export default NFTCollectionCard;
