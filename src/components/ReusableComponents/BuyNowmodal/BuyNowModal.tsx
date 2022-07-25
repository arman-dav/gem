import { FC, memo, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import { getPriceData } from "../../../redux/features/priceCalculate/priceCalculate";
import { useAppSelector } from "../../../redux/hook";
import { FRACTION_ROUT, ITEM_PAGE_ROUT } from "../../../utils/variable";
import { contentData } from "../../NFTDetail/model";

import BuyNowModalImage from "./BuyNowModalImage";
import BuyNowModalPrice from "./BuyNowModalPrice";
import BuyNowModalSecondTitle from "./BuyNowModalSecondTitle";
import BuyNowModalTitle from "./BuyNowModalTitle";

export type contentProps = {
    content: contentData;
    children: any;
    isOnValidChain: boolean;
};

const BuyNowModal: FC<contentProps> = (props) => {
    const { pathname } = useLocation();
    const dispatch = useDispatch<any>();
    const dataLength = props.content?.fractionsSold;

    const { USD } = useAppSelector(({ CalculatePrice }) => ({
        USD: CalculatePrice.price.USD,
    }));

    useEffect(() => {
        dispatch(getPriceData());
    }, [dispatch]);

    const [isItemPageRoute] = [
        pathname === ITEM_PAGE_ROUT
    ];

    const isFractionRoute = pathname.startsWith('/fraction-detail') ;

    return (
        <div className="buyNowModal">
            <div className="buyNowModal--title">
                {pathname === "/profile" ? "List item " : "Complete checkout"}
            </div>
            <div className="buyNowModal--content">
                <BuyNowModalImage
                    isFractionRoute={isFractionRoute}
                    content={props.content}
                />
                {props.isOnValidChain ? (
                    <div className="buyNowModal__content__container">
                        {isFractionRoute && (
                            <BuyNowModalTitle
                                pathname={pathname}
                                isFractionRoute={isFractionRoute}
                                content={props.content}
                            />
                        )}
                        <BuyNowModalSecondTitle
                            pathname={pathname}
                            dataLength={dataLength}
                            USD={USD}
                            isFractionRoute={isFractionRoute}
                            isItemPageRoute={isItemPageRoute}
                            data={props.content.data}
                            content={props.content}
                        />
                    </div>
                ) : null}
            </div>
            <BuyNowModalPrice
                pathname={pathname}
                isItemPageRoute={isItemPageRoute}
                price={
                    props.content?.data?.price === undefined
                        ? props.content.price
                        : props.content.data.price
                }
            >
                {props.children}
            </BuyNowModalPrice>
        </div>
    );
};
export default memo(BuyNowModal, (prevProps, nextProps) => {
    if (prevProps.children !== nextProps.children) {
        return false;
    } else {
        return true;
    }
});
