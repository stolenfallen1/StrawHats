import ForumHeader from "../Components/ForumHeader";
import ForumCardsContainer from "../Components/ForumCardsContainer";

const Forum = () => {
  return (
    <div className="m-0 p-0 box-border">
      <div style={{ height: "45vh" }}>
        <ForumHeader />
      </div>
      <div style={{ height: "55vh" }} className="bg-custom-red">
        <ForumCardsContainer />
      </div>
    </div>
  );
};

export default Forum;
