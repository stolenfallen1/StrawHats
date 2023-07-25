import ForumCards from "./ForumCards";

const cardData = [
  { header: "Header 1", body: "Body 1", comments: "Comments 1" },
  { header: "Header 2", body: "Body 2", comments: "Comments 2" },
  { header: "Header 3", body: "Body 3", comments: "Comments 3" },
];

const ForumCardsContainer = () => {
  return (
    <div className="pt-2">
      <div className="flex justify-center items-center md:flex-row sm:flex-col custom-400:flex-col custom-300:flex-col">
        {cardData.map((card, index) => (
          <ForumCards
            key={index}
            header={card.header}
            body={card.body}
            comments={card.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default ForumCardsContainer;
