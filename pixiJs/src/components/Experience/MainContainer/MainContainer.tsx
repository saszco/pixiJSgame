import { Container, Sprite } from "@pixi/react";
import { Texture } from "pixi.js";
import { useMemo } from "react";
import type { PropsWithChildren } from "react";
import backgroundAsset from "../../../assets/space-background.webp";
import { Level } from "../../Levels/Level";

interface IMainContainerProps {
  canvasSize: { width: number; height: number };
}

export const MainContainer = ({
  canvasSize,
  children,
}: PropsWithChildren<IMainContainerProps>) => {
  const backgroundTexture = useMemo(() => Texture.from(backgroundAsset), []);

  return (
    <Container>
      <Sprite
        texture={backgroundTexture}
        width={canvasSize.width}
        height={canvasSize.height}
      />
      {children}
      <Level />
    </Container>
  );
};
