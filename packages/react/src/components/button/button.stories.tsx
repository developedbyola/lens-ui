import type { Story } from "@ladle/react";
import { Button, type ButtonProps } from ".";
import { Box } from "../box";
import { Text } from "../text";
import { Stack } from "../stack";

const options = {
  size: ["xs", "sm", "base", "lg", "xl"],
  shape: ["flat", "round", "rounded", "pill"],
  visual: ["filled", "outlined", "soft", "ghost"],
  tone: [
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
} as const;

export default {
  title: "Components/Button",
  args: {
    children: "Button",
    size: "base",
    shape: "round",
    tone: "blue",
    visual: "filled",
    link: false,
    disabled: false,
    span: false,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: options.size,
      description: "Controls the size of the button",
    },
    visual: {
      control: { type: "select" },
      options: options.visual,
      description: "The visual style of the button",
    },
    tone: {
      control: { type: "select" },
      options: options.tone,
      description: "The color tone of the button",
    },
    link: {
      control: { type: "boolean" },
      description:
        "If true, the button will have no padding and fit the content",
    },
    shape: {
      control: { type: "select" },
      options: options.shape,
      description: "The border radius of the button",
    },
    span: {
      control: { type: "boolean" },
      description:
        "If true, the button will span the full width of its container",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the button",
    },
    children: {
      control: { type: "text" },
      description: "The button label",
    },
  },
};

/**
 * A highly customizable button component supporting various sizes, visual styles,
 * tones, and shapes. Built with a recipe system for consistent styling.
 */
export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children || "Button"}</Button>
);

Default.args = {};

Default.meta = {
  description:
    "Default button component with interactive controls for all properties.",
};

/**
 * Showcase of all available button sizes.
 */
export const Sizes: Story<ButtonProps> = (args) => (
  <Stack gap="6" items="center" flexWrap="wrap">
    {options.size.map((size) => (
      <Button {...args} key={size} size={size}>
        {args.children || "Button"}
      </Button>
    ))}
  </Stack>
);

Sizes.meta = {
  description:
    "Button component available in different sizes from extra small to extra large.",
};

/**
 * Demonstration of various button shapes and border radii.
 */
export const Shapes: Story<ButtonProps> = (args) => (
  <Stack gap="6" flexWrap="wrap">
    {options.shape.map((shape) => (
      <Button {...args} key={shape} shape={shape}>
        {args.children || "Button"}
      </Button>
    ))}
  </Stack>
);

Shapes.meta = {
  description:
    "Button component with different border radius options: flat, round, rounded, and pill.",
};

/**
 * Button that spans the full width of its container.
 */
export const Spanned: Story<ButtonProps> = (args) => (
  <Box width="300px">
    <Button {...args}>{args.children || "Button"}</Button>
  </Box>
);

Spanned.meta = {
  description:
    "Button that spans the full width of its container using the span property.",
};

/**
 * Link-style button with minimal padding.
 */
export const Link: Story<ButtonProps> = (args) => (
  <Stack gap="4" axis="vertical">
    <Button {...args}>{args.children || "Link Button"}</Button>
    <Text size="14" tone="neutral">
      Regular text next to link button for comparison
    </Text>
  </Stack>
);

Link.meta = {
  description:
    "Link-style button with minimal padding that fits content naturally.",
};

/**
 * Disabled button states across all visual styles.
 */
export const Disabled: Story<ButtonProps> = (args) => (
  <Stack gap="6">
    {options.visual.map((visual) => (
      <Button
        {...args}
        key={visual}
        visual={visual}
        disabled
        textTransform="capitalize"
      >
        {visual}
      </Button>
    ))}
  </Stack>
);

Disabled.meta = {
  description:
    "Disabled button states showing how each visual style appears when disabled.",
};

/**
 * Comprehensive showcase of all visual styles and tones.
 */
export const Visual: Story<ButtonProps> = (args) => (
  <Stack gap="8">
    {options.visual.map((visual) => (
      <Button key={visual} {...args} visual={visual}>
        {args.children || "Button"}
      </Button>
    ))}
  </Stack>
);

Visual.meta = {
  description:
    "Comprehensive showcase of all visual style and tone combinations available for buttons.",
};

/**
 * All tone variations for a specific visual style.
 */
export const Tone: Story<ButtonProps> = (args) => (
  <Stack gap="4" flexWrap="wrap">
    {options.tone.map((tone) => (
      <Button {...args} key={tone} tone={tone}>
        {tone.charAt(0).toUpperCase() + tone.slice(1)}
      </Button>
    ))}
  </Stack>
);

Tone.meta = {
  description:
    "All available color tones for buttons, showing semantic variations like success, warning, error, etc.",
};
