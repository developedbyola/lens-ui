import { Box } from "../box";
import { Text } from "../text";
import { Stack } from "../stack";
import type { Story } from "@ladle/react";
import { Badge, type BadgeProps } from ".";

const options = {
  size: ["xs", "sm", "base", "lg", "xl"],
  shape: ["pill", "round", "rounded", "flat"],
  visual: ["filled", "soft", "outlined", "ghost"],
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
  title: "Components/Badge",
  args: {
    size: "sm",
    tone: "blue",
    visual: "filled",
    shape: "rounded",
    children: "Badge",
  },
  argTypes: {
    visual: {
      control: { type: "select" },
      options: options.visual,
    },
    tone: {
      control: { type: "select" },
      options: options.tone,
    },
    size: {
      control: { type: "select" },
      options: options.size,
      description: "The size of the badge.",
    },
    shape: {
      control: { type: "select" },
      options: options.shape,
    },
  },
};

/**
 * The default solid badge. Use this for primary information that needs to stand out.
 */
export const Default: Story<BadgeProps> = (args) => {
  return <Badge {...args}>{args.children || "Badge"}</Badge>;
};

Default.meta = {
  description:
    "The default solid badge. Use this for primary information that needs to stand out.",
};

/**
 * A gallery of badges showcasing all available tone combinations.
 * Tones convey semantic meaning like status or priority.
 */
export const Tones: Story<BadgeProps> = (args) => (
  <Stack gap="6" flexWrap="wrap">
    {options.tone.map((tone) => (
      <Badge key={tone} {...args} tone={tone}>
        {args.children || "Badge"}
      </Badge>
    ))}
  </Stack>
);

Tones.meta = {
  description:
    "Badges can use different tones to convey semantic meaning such as status, importance, or category.",
};

/**
 * A gallery of badges showcasing all available visual combinations.
 * Visuals convey semantic meaning like appearance.
 */
export const Visuals: Story<BadgeProps> = (args) => (
  <Stack gap="6" flexWrap="wrap">
    {options.visual.map((visual) => (
      <Badge key={visual} {...args} visual={visual}>
        {args.children || visual}
      </Badge>
    ))}
  </Stack>
);

Visuals.meta = {
  description:
    "Badges can use different visual styles to convey semantic meaning such as status, importance, or category.",
};

/**
 * Badges come in different sizes to fit various contexts and information hierarchies.
 */
export const Sizes: Story<BadgeProps> = (args) => (
  <Stack gap="6" items="center" flexWrap="wrap">
    {options.size.map((size) => (
      <Badge key={size} {...args} size={size}>
        {args.children} {size}
      </Badge>
    ))}
  </Stack>
);

Sizes.meta = {
  description:
    "Choose a size that matches the information density and importance relative to surrounding content.",
};

/**
 * A gallery of badges showcasing all available shape combinations.
 */
export const Shapes: Story<BadgeProps> = (args) => (
  <Stack gap="6" flexWrap="wrap">
    {options.shape.map((shape) => (
      <Badge key={shape} {...args} shape={shape}>
        {args.children || shape}
      </Badge>
    ))}
  </Stack>
);

Shapes.meta = {
  description:
    "Badges can use different shapes to fit various design contexts.",
};
