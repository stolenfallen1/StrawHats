interface ForumCardsProps {
  header: string;
  body: string;
  comments: string;
}

const ForumCards = ({ header, body, comments }: ForumCardsProps) => {
  return (
    <div className="border-2 border-gray-300 px-6 py-3">
      <h1 className="text-custom-gold text-xl font-extrabold mb-3">{header}</h1>
      <p className="text-lg mb-4">{body}</p>
      <p className="text-md">{comments}</p>
    </div>
  );
};

export default ForumCards;
