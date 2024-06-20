import { forwardRef } from "react";

export const Button = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      disabled={
        props.passwordError || props.emailError || props.repeatPasswordError
      }
    >
      {props.title}
    </button>
  );
});

Button.displayName = "Button";
