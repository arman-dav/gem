import { FC } from "react";

import { ReactComponent as CarbonUser } from "../../assets/home/carbonUser.svg";
import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";

import { CollectionItemCardProps } from "./model";

const CollectionItemCard: FC<CollectionItemCardProps> = ({
  className,
  collectionName,
  author,
  photoCover,
}) => {
  return (
    <div className={`${className}__card__container`}>
      <div className={`${className}__card`}>
        <div className={`${className}__card__imgDiv`}>
          <div className={`${className}__card__imgDiv--iconDiv`}>
            <ImgIcon />
          </div>
          <div className={`${className}__card__imgDiv--textDiv`}>
            <p>{photoCover}</p>
          </div>
        </div>
        <div className={`${className}__card__authorDiv`}>
          <div className={`${className}__card__authorDiv--iconDiv`}>
            <CarbonUser />
          </div>
          <div className={`${className}__card__authorDiv--author`}>
            <p
              className={`${className}__card__authorDiv--author--collectionName`}
            >
              {collectionName}
            </p>
            <p className={`${className}__card__authorDiv--author--name`}>
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItemCard;
