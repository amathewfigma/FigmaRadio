import * as React from "react";
import {
  Button as BaseButton,
  ButtonOwnerState,
  ButtonProps
} from "@mui/base/Button";



const Button = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <BaseButton
      {...props}
      slotProps={{
        root: (state: ButtonOwnerState) => ({
          className: `hover:text-orange-500 transition-colors ${
            state.focusVisible ? "outline-0 ring-2 ring-orange-500" : ""
          }`
        })
      }}
      ref={ref}
    />
  );
});

export default Button;