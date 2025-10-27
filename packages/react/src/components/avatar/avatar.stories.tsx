import { Avatar } from ".";
import { Box } from "../box";
import { Text } from "../text";
import { Stack } from "../stack";
import { Story } from "@ladle/react";

const options = {
  shape: ["square", "round", "rounded", "circle"],
  size: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
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
  visual: ["filled", "outlined", "ghost", "soft"],
} as const;

export default {
  title: "Components/Avatar",
  args: {
    size: "base",
    tone: "neutral",
    shape: "circle",
    visual: "soft",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: options.size,
    },
    shape: {
      control: { type: "select" },
      options: options.shape,
    },
    visual: {
      control: { type: "select" },
      options: options.visual,
    },
    tone: {
      control: { type: "select" },
      options: options.tone,
    },
  },
};

//   A graphical representation of a user or entity. Avatars can display images, icons, or initials as a fallback when images fail to load.

//   ## Features
//   - Supports image loading with automatic fallback
//   - Customizable sizes and styles through recipes
//   - Accessibility compliant with proper ARIA labels
//   - Flexible composition with multiple sub-components

//   ## Sub-components
//   - \`Avatar.Root\` - Main container component
//   - \`Avatar.Image\` - Image content
//   - \`Avatar.Fallback\` - Fallback content when image fails
//   - \`Avatar.Context\` - Context provider
//   - \`Avatar.Provider\` - Root provider
// `,

// Default avatar with image
export const Default: Story<Avatar.RootProps> = (args) => (
  <Avatar.Root {...args}>
    <Avatar.Image src="https://i.pravatar.cc/300?img=37" alt="User avatar" />
    <Avatar.Fallback>JD</Avatar.Fallback>
  </Avatar.Root>
);

// Avatar with fallback (broken image)
export const Fallback: Story<Avatar.RootProps> = (args) => (
  <Avatar.Root {...args}>
    <Avatar.Image src="https://broken-link.com/image.jpg" alt="User avatar" />
    <Avatar.Fallback>JD</Avatar.Fallback>
  </Avatar.Root>
);

// Different sizes
export const Sizes: Story<Avatar.RootProps> = (args) => (
  <Stack gap="4" alignItems="center">
    {options.size.map((size) => {
      return (
        <Box key={size} width="fit">
          <Avatar.Root {...args} size={size}>
            <Avatar.Image
              src="https://i.pravatar.cc/300?img=11"
              alt="Small avatar"
            />
            <Avatar.Fallback>SM</Avatar.Fallback>
          </Avatar.Root>
          <Text size="12" mt="4" align="center" color="gray.60">
            {size}
          </Text>
        </Box>
      );
    })}
  </Stack>
);

// With status change callback
export const Status: Story<Avatar.RootProps> = (args) => (
  <Avatar.Root {...args}>
    <Avatar.Image
      src="https://i.pravatar.cc/300?img=21"
      alt="User avatar with status tracking"
    />
    <Avatar.Fallback>ST</Avatar.Fallback>
  </Avatar.Root>
);

// Group of avatars
export const Group: Story<Avatar.RootProps> = (args) => (
  <Stack items="center" gap="-2">
    {[5, 8, 32, 16].map((num) => (
      <Avatar.Root
        key={num}
        {...args}
        border="2px solid"
        borderColor="white"
        ml={num > 1 ? "-8" : "0"}
        _dark={{ borderColor: "neutral.90" }}
      >
        <Avatar.Image
          alt={`user avatar ${num} `}
          src={`https://i.pravatar.cc/300?img=${num}`}
        />
        <Avatar.Fallback> U{num}</Avatar.Fallback>
      </Avatar.Root>
    ))}
  </Stack>
);

// Using context provider
export const Provider: Story<Avatar.RootProps> = (args) => {
  const avatar = Avatar.use();

  return (
    <Avatar.Provider value={avatar}>
      <Avatar.Root {...args}>
        <Avatar.Image
          src="https://i.pravatar.cc/300?img=20"
          alt="Provided avatar"
        />
        <Avatar.Fallback>PV</Avatar.Fallback>
      </Avatar.Root>
    </Avatar.Provider>
  );
};
