import HamburgerMenu from "react-hamburger-menu";
import { shallowEqual, useDispatch } from "react-redux";

import { changeMobileMenuState } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

const HeaderNavigationMobile = () => {
  const dispatch = useDispatch();

  const { mobileMenuState } = useAppSelector(
    ({ createData }) => ({
      mobileMenuState: createData.data.mobileMenuState,
    }),
    shallowEqual
  );

  return (
    <div className="header__navigation--mobile">
      <div className="header__navigation--mobile--burgerMenu">
        <div onClick={() => dispatch(changeMobileMenuState(!mobileMenuState))}>
          <HamburgerMenu
            isOpen={mobileMenuState}
            color="#fff"
            menuClicked={() =>
              dispatch(changeMobileMenuState(!mobileMenuState))
            }
            width={16}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigationMobile;
