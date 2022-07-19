import { FC } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as CloseIcon } from "../../assets/searchResult/close.svg";
import { setPriceFilter } from "../../redux/features/marketplace/marketplaceSlice";

import { SelectedPriceFilterProps } from "./model";

const SelectedPriceFilter: FC<SelectedPriceFilterProps> = ({
  from,
  to,
  children,
}) => {
  const dispatch = useDispatch();

  const handleRemoveFilter = () => {
    dispatch(
      setPriceFilter({
        to: to,
        from: from,
      })
    );
  };

  return (
      <div className='searchResult__searchSection__selectedFilters--selectedFilter'>
          <div>
              {children}
              <p>{from + ' - ' + to}</p>
          </div>
          <CloseIcon
              onClick={handleRemoveFilter}
              className='selectedFilters__closeIcon'
          />
      </div>
  );
};

export default SelectedPriceFilter;
