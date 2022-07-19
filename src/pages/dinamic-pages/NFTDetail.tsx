import { contentData } from "../../components/NFTDetail/model";
import NFTDetailContainer from "../../components/NFTDetail/NFTDetailComponent";
const NFTDetail = () => {
  const contentJson: any = localStorage.getItem("itemDetail");
  const content: contentData = JSON.parse(contentJson);
  console.log(content, "content");

  return <>{content !== undefined ? <NFTDetailContainer /> : null}</>;
};
export default NFTDetail;
