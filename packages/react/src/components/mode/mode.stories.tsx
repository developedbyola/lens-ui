import { Mode } from ".";
import { motion } from "motion/react";
import type { Story, Meta } from "@ladle/react";

const options = {
  sizes: ["xs", "sm", "base", "lg", "xl"],
  tones: [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
  ],
}

const meta: Meta = {
  title: "Mode",
  component: Mode.Root,
  argTypes: {
    size: {
      control: { type: "select" },
      options: options.sizes,
      description: "Controls the size of the button",
    },
    tone: {
      control: { type: "select" },
      options: options.tones,
      description: "The color tone of the button",
    },
  }
};
export default meta;


export const Basic: Story<Mode.RootProps> = (args) => (
  <Mode.Root display="flex" alignItems="center" gap="8" w="full" justifyContent="space-between" {...args}>
    <Mode.Label>Switch to dark mode</Mode.Label>
    <Mode.Control>
      <Mode.Thumb/>
    </Mode.Control>
    <Mode.HiddenInput/>
  </Mode.Root>
);
