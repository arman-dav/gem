import { FC, memo, useEffect, useState } from "react";

import { Bounce } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

import { HeaderNavigationLinkType } from "./model";

const HeaderNavigationLink: FC<HeaderNavigationLinkType> = ({
  path,
  tooltip,
  name,
  isAbsolutePath,
  id,
  currentId,
  setCurrentId,
}) => {
  const [width, setWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [ourName] = useState(name);
  const windowHandler = () => {
    setInnerWidth(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener(
      "resize",
      windowHandler,
      false
    )
    return ()=> window.removeEventListener('resize',windowHandler,false)
  },[])
  

  const [isTooltip, setIsTooltip] = useState(false);
  const tooltipEl = tooltip ? (
    <div className={isTooltip ? "tooltip_active" : "tooltip"}>{tooltip}</div>
  ) : null;

  return (
    <div
      key={id}
      id={id}
      className="header__navigation__links--link tooltip-parent"
      onClick={
        path
          ? (e) => {
              setWidth(e.currentTarget.offsetWidth);
              setCurrentId(e.currentTarget.id);
            }
          : () => {}
      }
    >
      {id === currentId && (
        <Bounce
          className={
            innerWidth > 850
              ? "header__navigation__links--link--bounce"
              : "header__navigation__links--link--bounceMedia"
          }
        >
          <div style={{ width: width }}>
            <span></span>
          </div>
        </Bounce>
      )}
      {tooltipEl}
      {path ? (
        isAbsolutePath ? (
          <a href={path}>{ourName}</a>
        ) : (
          <NavLink to={path}>{ourName}</NavLink>
        )
      ) : (
        <span
          onClick={() => window.innerWidth < 1200 && setIsTooltip(!isTooltip)}
        >
          {ourName}
        </span>
      )}
    </div>
  );
};

export default memo(HeaderNavigationLink);
