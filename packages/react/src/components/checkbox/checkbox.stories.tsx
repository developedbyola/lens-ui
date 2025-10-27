import React from "react";
import type { Story } from "@ladle/react";
import { Checkbox } from ".";
import { Box } from "../box";
import { Text } from "../text";
import { Button } from "../button";
import { Stack } from "../stack";
import { PhosphorIcon } from "../icon";

const options = {
  size: ["sm", "xs", "base", "lg", "xl"],
  shape: ["square", "round", "rounded", "circle"],
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
  title: "Components/Checkbox",
  args: {
    size: "sm",
    tone: "blue",
    shape: "round",
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
    },
    invalid: {
      control: { type: "boolean" },
      description: "Whether the checkbox is in an invalid state",
    },
    readOnly: {
      control: { type: "boolean" },
      description: "Whether the checkbox is read-only",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the checkbox is required",
    },
    checked: {
      control: { type: "boolean" },
      description: "Controlled checked state",
    },
    size: {
      control: { type: "select" },
      options: options.size,
    },
    shape: {
      control: { type: "select" },
      options: options.shape,
    },
    tone: {
      control: { type: "select" },
      options: options.tone,
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Default checked state for uncontrolled usage",
    },
  },
};

/**
 * A customizable checkbox component built with Ark UI primitives.
 * Supports single checkboxes, groups, and various states.
 */
export const Default: Story<Checkbox.RootProps> = (args) => (
  <Checkbox.Root {...args}>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <PhosphorIcon name="Check" weight="bold" size="12px" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
);

Default.args = {
  defaultChecked: false,
  disabled: false,
  invalid: false,
  readOnly: false,
  required: false,
};

Default.meta = {
  description: "Basic checkbox component with label and interactive controls.",
};

/**
 * Checkbox group allowing multiple selections.
 * The group manages the state of multiple checkboxes.
 */
export const Group: Story<Checkbox.RootProps> = (args) => {
  const [selected, setSelected] = React.useState<string[]>(["react"]);

  return (
    <Checkbox.Group
      defaultValue={selected}
      onValueChange={(value) => setSelected(value)}
    >
      <Stack gap="6" axis="vertical">
        <Checkbox.Root {...args} value="react">
          <Checkbox.Control>
            <Checkbox.Indicator>
              <PhosphorIcon name="Check" weight="bold" size="12px" />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.Label>React</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>

        <Checkbox.Root {...args} value="vue">
          <Checkbox.Control>
            <Checkbox.Indicator>
              <PhosphorIcon name="Check" weight="bold" size="12px" />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.Label>Vue</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>

        <Checkbox.Root {...args} value="angular">
          <Checkbox.Control>
            <Checkbox.Indicator>
              <PhosphorIcon name="Check" weight="bold" size="12px" />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.Label>Angular</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>

        <Checkbox.Root {...args} value="svelte">
          <Checkbox.Control>
            <Checkbox.Indicator>
              <PhosphorIcon name="Check" weight="bold" size="12px" />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.Label>Svelte</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      </Stack>
    </Checkbox.Group>
  );
};

Group.meta = {
  description:
    "Checkbox group allowing multiple selections. The group manages the state of multiple checkboxes.",
};

/**
 * Controlled checkbox example with external state management.
 * The checkbox state can be controlled programmatically.
 */
export const Controlled: Story<Checkbox.RootProps> = (args) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Stack gap="12" axis="vertical" items="center">
      <Button
        visual="outlined"
        tone="neutral"
        size="sm"
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked ? "Uncheck" : "Check"}
      </Button>

      <Checkbox.Root
        {...args}
        checked={isChecked}
        onCheckedChange={({ checked }) => setIsChecked(checked as boolean)}
      >
        <Checkbox.Control>
          <Checkbox.Indicator>
            <PhosphorIcon name="Check" weight="bold" size="12px" />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Agree to our Terms and Policies.</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </Stack>
  );
};

Controlled.meta = {
  description:
    "Controlled checkbox example with external state management. The checkbox state can be controlled programmatically.",
};
