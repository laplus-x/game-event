import "./state.css";

interface StateSceneProps {
  children: React.ReactNode;
}

export const StateScene: React.FC<StateSceneProps> = ({ children }) => {
  return <div className="state-scene">{children}</div>;
};
