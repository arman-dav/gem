import { FC, memo, useMemo } from "react";

import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import {
  connectWallet,
  createPopup,
  menuPopup,
} from "../../redux/features/create/createSlice";

import HeaderNavigationLink from "./HeaderNavigationLink";
import { HeaderNavigationProps } from "./model";

const HeaderNavigation: FC<HeaderNavigationProps> = memo(
  ({ currentId, setCurrentId, clientConfig }) => {
    const dispatch = useDispatch();

    const handleCloseAllPopups = () => {
      dispatch(connectWallet(false));
      dispatch(menuPopup(false));
      dispatch(createPopup(false));
    };
    const filterHeaderNavItems = useMemo(() => {

      console.log('process.env.REACT_APP_TYPE = ' + process.env.REACT_APP_TYPE + ' no');

      return clientConfig.headerNavItems.filter((f) => {
          if((f.text !== process.env.REACT_APP_TYPE && f.text !== 'Marketplace') || (f.text === 'Marketplace' && process.env.REACT_APP_TYPE === 'Fractions')){
            return f
          }
        }
      );
    }, [clientConfig]);

    return (
      <div className="header__navigation__links" onClick={handleCloseAllPopups}>
        <>
          {clientConfig &&
            filterHeaderNavItems.map((nav, index) => {
              return (
                <HeaderNavigationLink
                  path={nav.link}
                  isAbsolutePath={nav.isAbsolutePath}
                  name={nav.text}
                  tooltip={nav.tooltip}
                  id={index.toString()}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                  key={uuid_v4()}
                />
              );
            })}
        </>
      </div>
    );
  }
);

export default HeaderNavigation;
