interface ForumCardsProps {
  header: string;
  body: string;
  comments: string;
}

const ForumCards = ({ header, body, comments }: ForumCardsProps) => {
  return (
    <div
      className="m-10 flex flex-col items-center justify-center border-2 border-gray-300 px-6 py-3 rounded-lg"
      style={{ width: "280px", height: "280px" }}
    >
      <h1 className="text-custom-gold text-xl font-extrabold mb-3">{header}</h1>
      <p className="text-lg mb-4">{body}</p>
      <p className="text-md">{comments}</p>
    </div>
  );
};

export default ForumCards;
