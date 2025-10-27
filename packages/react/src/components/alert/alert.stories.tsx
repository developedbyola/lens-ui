import React from "react";
import { Alert } from ".";
import { Stack } from "../stack";
import { Button } from "../button";
import { motion } from "motion/react";
import type { Story } from "@ladle/react";

const options = {
  shape: ["flat", "round", "rounded", "pill"],
  visual: ["filled", "soft", "ghost", "outlined"],
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
  size: ["xs", "sm", "base", "lg", "xl"],
} as const;

export default {
  title: "Components/Alert",
  args: {
    tone: "blue",
    visual: "filled",
    shape: "rounded",
    defaultOpen: true,
  },
  argsType: {
    shape: {
      control: { type: "select" },
      options: options.shape,
    },
    size: {
      control: { type: "select" },
      options: options.size,
    },
    visual: {
      control: { type: "select" },
      options: options.visual,
    },
    tone: {
      control: { type: "select" },
      options: options.tone,
    },
    defaultOpen: {
      control: { type: "boolean" },
    },
    open: {
      control: { type: "boolean" },
    },
  },
};

export const Default: Story<Alert.RootProps> = (args) => (
  <Alert.Root {...args} maxWidth={"360"}>
    <Alert.Content>
      <Alert.Title>Your store is open for business.</Alert.Title>
    </Alert.Content>
  </Alert.Root>
);

export const Size: Story<Alert.RootProps> = (args) => (
  <Stack gap="8" items="center" axis="vertical">
    {options.size.map((size) => {
      return (
        <Alert.Root key={size} {...args} size={size}>
          <Alert.Content>
            <Alert.Title>
              Alert has a{" "}
              <strong>
                <em>{size}</em>
              </strong>{" "}
              size allowing for more content.
            </Alert.Title>
          </Alert.Content>
        </Alert.Root>
      );
    })}
  </Stack>
);

export const Visual: Story<Alert.RootProps> = (args) => (
  <Stack gap="8" items="center" axis="vertical">
    {options.visual.map((visual) => {
      return (
        <Alert.Root key={visual} {...args} visual={visual}>
          <Alert.Content>
            <Alert.Title>
              Alert has a{" "}
              <strong>
                <em>{visual}</em>
              </strong>{" "}
              visual
            </Alert.Title>
          </Alert.Content>
        </Alert.Root>
      );
    })}
  </Stack>
);

export const Tone: Story<Alert.RootProps> = (args) => (
  <Stack gap="8" items="center" axis="vertical">
    {options.tone.map((tone) => {
      return (
        <Alert.Root key={tone} {...args} tone={tone}>
          <Alert.Content>
            <Alert.Title>
              Alert has a{" "}
              <strong>
                <em>{tone}</em>
              </strong>{" "}
              tone
            </Alert.Title>
          </Alert.Content>
        </Alert.Root>
      );
    })}
  </Stack>
);

export const Controlled: Story<Alert.RootProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(args.defaultOpen);

  return (
    <React.Fragment>
      <Button visual="soft" tone="neutral" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </Button>
      <Alert.Root
        {...args}
        mt="16"
        open={isOpen}
        onOpenChange={({ open }) => {
          setIsOpen(open);
        }}
      >
        <Alert.Content>
          <Alert.Title>
            isibility is controlled by external state.
          </Alert.Title>
        </Alert.Content>
      </Alert.Root>
    </React.Fragment>
  );
};

export const Animated: Story<Alert.RootProps> = (args) => {
  return (
    <Alert.Root {...args}>
      <Alert.Context>
        {(ctx) => {
          const isVisible = ctx.open;

          return (
            <React.Fragment>
              <Stack justify="center">
                <Alert.Trigger asChild>
                  <Button visual="outlined" tone="neutral">
                    {isVisible ? "Hide" : "Show"}
                  </Button>
                </Alert.Trigger>
              </Stack>
              <motion.div
                initial={{ y: 12, height: 0 }}
                animate={{
                  y: isVisible ? 6 : 12,
                  opacity: isVisible ? 1 : 0,
                  height: isVisible ? "var(--alert-height)" : 0,
                }}
              >
                <Alert.Content hidden={false} asChild>
                  <Alert.Title fontSize="1.4rem">
                    Something went wrong. Please try again.
                  </Alert.Title>
                </Alert.Content>
              </motion.div>
            </React.Fragment>
          );
        }}
      </Alert.Context>
    </Alert.Root>
  );
};
