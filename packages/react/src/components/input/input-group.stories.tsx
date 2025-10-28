import { InputGroup } from ".";
import { PhosphorIcon } from "../icon";
import { Button, IconButton } from "../button";
import { type Meta, type Story } from "@ladle/react";

const options = {
  size: ["xs", "sm", "base", "lg", "xl"],
  shape: ["flat", "round", "rounded", "pill"],
  visual: ["filled", "outlined", "underlined", "ghost"],
} as const;

const meta: Meta = {
  title: "Components/Input Group",
  component: InputGroup.RootProps,
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

export const Basic: Story<InputGroup.RootProps> = (args) => {
  return (
    <InputGroup.Root {...args} maxWidth="30rem">
      <InputGroup.Addon pl="1.2rem">$</InputGroup.Addon>
      <InputGroup.Input placeholder="How much would you like to send?" />
    </InputGroup.Root>
  );
};

export const WithIcon: Story<InputGroup.RootProps> = (args) => {
  return (
    <InputGroup.Root {...args} maxWidth="30rem">
      <InputGroup.Addon pl="1.2rem">
        <PhosphorIcon weight="bold" size="16" name="MagnifyingGlassIcon" />
      </InputGroup.Addon>
      <InputGroup.Input placeholder="Search for posts, medias, and friends." />
      <InputGroup.Addon>
        <Button size="xs" tone="zinc" shape="flat" visual="soft" height="full">
          <PhosphorIcon weight="bold" size="16" name="ArrowRightIcon" />
        </Button>
      </InputGroup.Addon>
    </InputGroup.Root>
  );
};

export const Textarea: Story<InputGroup.RootProps> = (args) => {
  return (
    <InputGroup.Root
      {...args}
      height="auto"
      maxWidth="30rem"
      flexDirection="column"
      _dark={{}}
    >
      <InputGroup.Textarea autoresize placeholder="Chat with AI" />
      <InputGroup.Addon width="full" px="1.2rem" py=".8rem" justifyContent="space-between">
        <IconButton shape="circle" tone="zinc" visual="soft" size="24">
          <PhosphorIcon weight="bold" size="16" name="PlusIcon" />
        </IconButton>
        <IconButton shape="circle" size="32">
          <PhosphorIcon weight="bold" size="20" name="SparkleIcon" />
        </IconButton>
      </InputGroup.Addon>
    </InputGroup.Root>
  );
};
