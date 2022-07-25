import * as React from "react";

type IAnchorElTooltips = {
  title: string;
  children?: React.ReactNode;
};
const AnchorElTooltips: React.FC<IAnchorElTooltips> = ({ title, children }) => {
  return (
    <div className="module">
      <div className="module--container">
        <div>{title}</div>
        {children}
      </div>
    </div>
  );
};
export default AnchorElTooltips;
