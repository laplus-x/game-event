import type React from "react";
import "./scene.css";

interface SceneProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

export const Scene: React.FC<SceneProps> = ({ width, height, children }) => {
  return (
    <div
      className="scene"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </div>
  );
};
