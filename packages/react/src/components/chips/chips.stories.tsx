import React from "react";
import type { Meta, Story } from "@ladle/react";
import { Chips } from ".";
import { Box } from "../box";
import { Text } from "../text";
import { Stack } from "../stack";
import { InputGroup } from "../input";
import { Icon, PhosphorIcon } from "../icon";
import { Button, IconButton } from "../button";

const meta: Meta = {
  title: "Components/Chips",
};

export default meta;

const Control = () => {
  return (
    <InputGroup.Root mt="8" width="30rem" height="auto" px="2" py="3">
      <Chips.Context>
        {({ value }) => {
          return (
            <Chips.Control
              gap="4"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
            >
              {value.map((tag, index) => (
                <Chips.Item key={index} value={tag} index={index}>
                  <Chips.ItemDeleteTrigger asChild>
                    <Button size="xs" visual="outlined" tone="neutral">
                      <Chips.ItemText>{tag}</Chips.ItemText>
                    </Button>
                  </Chips.ItemDeleteTrigger>
                </Chips.Item>
              ))}
              <Chips.Input fontWeight="400" placeholder="Add" px="4" />
            </Chips.Control>
          );
        }}
      </Chips.Context>
    </InputGroup.Root>
  );
};

const ClearTrigger = () => {
  return (
    <Chips.ClearTrigger mt="8" asChild>
      <Button size="sm" visual="outlined" tone="neutral">
        Clear
      </Button>
    </Chips.ClearTrigger>
  );
};

// Default Story
export const Default: Story<Chips.RootProps> = () => {
  return (
    <Chips.Root defaultValue={["react", "vue"]}>
      <Chips.Label>Technologies</Chips.Label>
      <Control />
      <ClearTrigger />
      <Chips.HiddenInput name="technologies" />
    </Chips.Root>
  );
};

Default.storyName = "Default";

// Disabled State
export const Disabled: Story<Chips.RootProps> = () => {
  return (
    <Chips.Root defaultValue={["react", "angular"]} disabled>
      <Chips.Label>Disabled Chips</Chips.Label>
      <Control />
    </Chips.Root>
  );
};
Disabled.storyName = "Disabled";

// Readonly State
export const Readonly: Story<Chips.RootProps> = () => {
  return (
    <Chips.Root defaultValue={["readonly", "tags"]} readOnly>
      <Chips.Label>Readonly Chips</Chips.Label>
      <Control />
    </Chips.Root>
  );
};
Readonly.storyName = "Readonly";

// With Validation
export const Validation: Story<Chips.RootProps> = () => {
  const validateTag = (tag: string) => {
    return tag.length >= 2;
  };

  return (
    <Chips.Root
      defaultValue={["value"]}
      validate={({ inputValue }) => validateTag(inputValue)}
    >
      <Chips.Label>Tags (min 2 characters)</Chips.Label>
      <Control />
      <ClearTrigger />
    </Chips.Root>
  );
};

Validation.storyName = "Validation";

// With Maximum Tags
export const Maximum: Story<Chips.RootProps> = () => {
  return (
    <Chips.Root defaultValue={["tag1", "tag2"]} max={5}>
      <Chips.Label>Tags (max 5)</Chips.Label>
      <Control />
      <ClearTrigger />
    </Chips.Root>
  );
};
Maximum.storyName = "Maximum";
