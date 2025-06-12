import { useCallback, useEffect, useState } from "react";
import { DIRECTION_KEYS } from "../types/common";
import type { Direction } from "../types/common";

export const useHeroControls = () => {
  const [heldDirection, setHeldDirection] = useState<Direction[]>();

  const handleKey = useCallback((e: KeyboardEvent, isKeyDown: boolean) => {
    const direction = DIRECTION_KEYS[e.code];

    if (!direction) return;

    setHeldDirection((prev) => {
      if (isKeyDown) {
        return prev?.includes(direction) ? prev : [direction, ...(prev || [])];
      }
      return prev?.filter((dir) => dir !== direction);
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => handleKey(e, true);
    const handleKeyUp = (e: KeyboardEvent) => handleKey(e, false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }, [handleKey]);

  const getControlsDirection = useCallback(() => {
    return heldDirection?.[0] || null;
  }, [heldDirection]);

  return { getControlsDirection };
};
