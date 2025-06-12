import { Container, Sprite, useTick } from "@pixi/react";
import { Texture } from "pixi.js";
import { useCallback, useEffect, useRef } from "react";
import { DEFAULT_POS_X, DEFAULT_POS_Y } from "../../constants/game-world";
import { useHeroControls } from "../../hooks/useHeroControls";
import type { Direction, IPosition } from "../../types/common";

interface IHeroProps {
  texture: Texture;
  onMove: (gridX: number, gridY: number) => void;
}

export const Hero = ({ texture, onMove }: IHeroProps) => {
  const position = useRef({ x: DEFAULT_POS_X, y: DEFAULT_POS_Y });
  const targetPosition = useRef<IPosition>(null);
  const currentDirection = useRef<Direction>(null);

  const { getControlsDirection } = useHeroControls();

  const direction = getControlsDirection();

  console.log(direction, "test");

  useEffect(() => {
    onMove(position.current.x, position.current.y);
  }, [onMove]);

  const setNextTarget = useCallback((direction: Direction) => {
    if (targetPosition.current) return;
    const { x, y } = position.current;
    currentDirection.current = direction;
  }, []);

  useTick((delta) => {
    if (direction) {
      //set next target
    }

    //handle movement

    //handle completion of movement
  });

  return (
    <Container>
      <Sprite
        texture={texture}
        x={position.current.x}
        y={position.current.y}
        scale={0.5}
        anchor={[1, 0.5]}
      />
    </Container>
  );
};
