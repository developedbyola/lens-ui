import { Box } from "../box";
import { Stack } from "../stack";
import { Text } from "../text";
import { Image } from "../image";
import type { Story } from "@ladle/react";
import { AspectRatio, type AspectRatioProps } from ".";

const options = {
  ratios: [
    "square",
    "video",
    "widescreen",
    "photo",
    "photo-classic",
    "cinematic",
    "golden",
  ],
  fits: ["cover", "contain", "fill"],
} as const;

export default {
  title: "Components/Aspect Ratio",
  args: {},
  argTypes: {
    ratio: {
      options: options.ratios,
      control: { type: "select" },
    },
    fit: {
      options: options.fits,
      control: { type: "select" },
    },
  },
};

/**
 * The AspectRatio component is used to embed content, such as images, videos, or iframes,
 * in a fixed ratio container. It prevents layout shift by reserving the correct amount of
 * space in the document while the content loads.
 */

// A default story with the most common use case: a 16:9 image
export const Default: Story<AspectRatioProps> = (args) => (
  <AspectRatio {...args}>
    <Image
      rounded="12"
      backgroundColor="bg.surface"
      src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      alt="A landscape photograph of a mountain lake at dusk."
    />
  </AspectRatio>
);
Default.args = {};

// Showcasing all the different ratio variants
export const Ratio: Story<AspectRatioProps> = (args) => (
  <Stack gap="20" axis="vertical" maxWidth="40rem">
    {options.ratios.map((ratio) => (
      <AspectRatio
        {...args}
        ratio={ratio}
        key={ratio}
        rounded="12"
        minHeight="20rem"
        minWidth="40rem"
        alignContent="center"
        backgroundColor="bg.surface"
      >
        <Text height="fit" align="center" size="14" textTransform="capitalize">
          {ratio}
        </Text>
      </AspectRatio>
    ))}
  </Stack>
);
Ratio.args = {};

// Demonstrating the fit variants
export const Fit: Story<AspectRatioProps> = (args) => (
  <Stack gap="20" axis="vertical">
    {options.fits.map((fit) => (
      <Box key={fit} spaceY="8">
        <Text size="14" textTransform="capitalize">
          {fit}
        </Text>
        <AspectRatio {...args} fit={fit}>
          <Image
            rounded="12"
            backgroundColor="bg.surface"
            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80"
            alt={`Example of object-fit: ${fit}`}
          />
        </AspectRatio>
      </Box>
    ))}
  </Stack>
);
Fit.args = {};

// Showing how it works with any kind of content, not just media
export const Content: Story<AspectRatioProps> = (args) => (
  <AspectRatio {...args}>
    <Stack
      rounded="12"
      height="full"
      bg="bg.subtle"
      alignItems="center"
      justifyContent="center"
    >
      <Text size="14" color="fg.subtle" weight="semibold">
        Centered Content
      </Text>
    </Stack>
  </AspectRatio>
);
Content.args = {};
