import image from "./assets/title_board.png";
import "./titleboard.css";

interface TitleBoardProps {
  text: string;
}

export const TitleBoard: React.FC<TitleBoardProps> = ({ text }) => {
  return (
    <span className="title-board" style={{ backgroundImage: `url(${image})` }}>
      {text}
    </span>
  );
};
