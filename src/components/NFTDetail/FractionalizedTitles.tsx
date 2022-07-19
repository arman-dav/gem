import { FC, memo } from "react";

interface IFractionalizedTitlesType {
  title: string;
  img: string | undefined;
}

const FractionalizedTitles: FC<IFractionalizedTitlesType> = ({
  title,
  img,
}) => {
  return (
    <div className="Fractionalized--titles--container">
      <div className="Fractionalized--titles--container--title">{title}</div>
      {img !== undefined && (
        <div className="Fractionalized--titles--container--icon">
          <img src={img} alt={`${img}`} />
        </div>
      )}
    </div>
  );
};
export default memo(FractionalizedTitles);
