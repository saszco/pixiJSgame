import { Stage } from "@pixi/react";
import { useCallback, useEffect, useState } from "react";
import { calculateCanvasSize } from "../../helpers/common";
import { MainContainer } from "./MainContainer/MainContainer";

export const Experience = () => {
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize);

  const updateCanvasSize = useCallback(() => {
    setCanvasSize(calculateCanvasSize());
    console.log("Stage rendering with size", canvasSize);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [updateCanvasSize]);

  return (
    <Stage width={canvasSize.width} height={canvasSize.height}>
      <MainContainer canvasSize={canvasSize}></MainContainer>
    </Stage>
  );
};
