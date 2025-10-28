import { Box } from "../box";
import { Text } from "../text";
import { Stack } from "../stack";
import { Button } from "../button";
import { Input, type InputProps } from "./input";
import { type Meta, type Story } from "@ladle/react";

const options = {
  size: ["xs", "sm", "base", "lg", "xl"],
  shape: ["flat", "round", "rounded", "pill"],
  visual: ["filled", "outlined", "underlined", "ghost"],
} as const;

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  args: {
    size: "base",
    shape: "round",
    disabled: false,
    visual: "outlined",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: options.size,
      description: "Controls the size of the input",
    },
    visual: {
      control: { type: "select" },
      options: options.visual,
      description: "The visual style of the input",
    },
    shape: {
      control: { type: "select" },
      options: options.shape,
      description: "The border radius of the input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input",
    },
  },
};

export default meta;

export const Basic: Story<InputProps> = (args) => {
  return <Input {...args} maxWidth="30rem" placeholder="Legal name" />;
};
