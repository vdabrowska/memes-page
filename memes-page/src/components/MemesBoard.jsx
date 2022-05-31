import Meme from "./Meme";

const MemesBoard = () => {
  return (
    <div className="memesBoard">
      <div className="mem">
        <Meme />
      </div>
    </div> // może nie div ale chodzi o to "opakowanie" dla memów
  );
};
export default MemesBoard;
