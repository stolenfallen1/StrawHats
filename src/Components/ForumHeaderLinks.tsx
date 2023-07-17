import { Link } from "react-router-dom";

interface ForumHeaderLinksProps {
  title: string;
}

const ForumHeaderLinks = ({ title }: ForumHeaderLinksProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 className="text-5xl text-custom-gold text-center font-extrabold mb-3">
        {title}
      </h1>
      <div>
        <Link to="/" className="text-xl mx-4 text-white font-bold">
          HOME
        </Link>
        <Link to="/characters" className="text-xl mx-4 text-white font-bold">
          CHARACTERS
        </Link>
      </div>
    </div>
  );
};

export default ForumHeaderLinks;
