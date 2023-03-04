import { useEffect } from "react";
import {
  setAdjustNothing,
  setAdjustPan,
  setAdjustResize,
  setAdjustUnspecified,
  setAlwaysHidden,
  setAlwaysVisible,
  setHidden,
  setUnchanged,
  setVisible
} from "rn-android-keyboard-adjust";

export enum KeyboardBehaviour {
  AdjustNothing,
  AdjustPan,
  AdjustResize,
  AdjustUnspecified,
  AlwaysVisible,
  AlwaysHidden,
  Visible,
  Hidden,
  Unchanged,
}

export const useKeyboardBehaviour = (keyboardBehaviour: KeyboardBehaviour) => {
  useEffect(() => {
    switch (keyboardBehaviour) {
      case KeyboardBehaviour.AdjustNothing:
        setAdjustNothing();
        break;

      case KeyboardBehaviour.AdjustPan:
        setAdjustPan();
        break;

      case KeyboardBehaviour.AdjustResize:
        setAdjustResize();
        break;

      case KeyboardBehaviour.AdjustUnspecified:
        setAdjustUnspecified();
        break;

      case KeyboardBehaviour.AlwaysHidden:
        setAlwaysHidden();
        break;

      case KeyboardBehaviour.AlwaysVisible:
        setAlwaysVisible();
        break;

      case KeyboardBehaviour.Hidden:
        setHidden();
        break;

      case KeyboardBehaviour.Unchanged:
        setUnchanged();
        break;

      case KeyboardBehaviour.Visible:
        setVisible();
        break;
    }
  }, [keyboardBehaviour]);
}