import ForumWallpaper from "../Asset/ForumAssets/ForumWallpaper.jpeg";
import ForumHeaderLinks from "./ForumHeaderLinks";

const ForumHeader = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        className="brightness-50"
        src={ForumWallpaper}
        style={{ height: "45vh", width: "100%" }}
      />
      <ForumHeaderLinks title="ONE PIECE" />
    </div>
  );
};

export default ForumHeader;
