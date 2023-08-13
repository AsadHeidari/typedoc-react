/**
 * @description This is a custom description for button component.
 * @link [TypedocSite](https://typedoc.org/)
 * @link [NextJS](https://nextjs.org/)
 * @module
 */

import React from "react";

/**
 * @description this is Button Props type.
 */
export type ButtonProps = {
  label: string;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

/**
 * @description this is Button interface.
 */
export interface Button {
  label: string;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

/**
 * function category1
 * @category category
 */
export function category1() {
  console.log("Hi");
}

/**
 * variable category2
 * @category category
 */
export const category2 = "category2";

/**
 * variable group1
 * @group group
 */
export const group1 = "group1";

/**
 * variable group2
 * @group group
 */
export const group2 = "group2";

/**
 * function group3
 * @group group
 */
export function group3() {
  alert("Hi");
}

/*
  NOTE: You can add an HTML tag to the texts.

  Example: @description <h1 class="header"> This is the header/h1> for the title.
  and you can customize this class or tag in the custom.css file.
*/

/**
 * @description A simple button component.
 * @param {string} props.label label for the button.
 * @param {"sm" | "md" | "lg"}  props.size size of the button.
 * @param {string} props.backgroundColor background color of the button.
 * @return {React.Element} The button element.
 * @example
 * <Button text="Click Me">Click Me</Button>
 */
function Button({
  label,
  size = "md",
  backgroundColor = "yellow",
}: ButtonProps): JSX.Element {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: `8px`,
  };

  //  THIS NOT DOCUMENTATION
  function handleOnClick(): void {
    alert("Button clicked");
  }

  return (
    <button style={style} onClick={handleOnClick}>
      {label}
    </button>
  );
}

export default Button;
