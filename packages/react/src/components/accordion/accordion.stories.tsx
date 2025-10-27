import React from "react";
import { Box } from "../box";
import { Accordion } from ".";
import { Text } from "../text";
import { Button } from "../button";
import { motion } from "motion/react";
import { PhosphorIcon } from "../icon";
import type { Story } from "@ladle/react";

export default {
  title: "Components/Accordion",
  args: {
    width: "36rem",
  },
  argTypes: {
    collapsible: {
      control: { type: "boolean" },
      description: "Allow all items to be collapsed",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Allow multiple items to be open simultaneously",
    },
    orientation: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      description: "Orientation of the accordion",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the entire accordion",
    },
  },
};

const Trigger = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Accordion.ItemTrigger asChild>
      <Button span visual="soft" shape="rounded" tone="neutral">
        {children || "Add a label"}
        <Accordion.ItemIndicator>
          <PhosphorIcon name="CaretRight" weight="bold" size={14} />
        </Accordion.ItemIndicator>
      </Button>
    </Accordion.ItemTrigger>
  );
};

/**
 * Default accordion with multiple items. Only one item can be open at a time.
 */
export const Default: Story<Accordion.RootProps> = (args) => (
  <Accordion.Root width="36rem" {...args} defaultValue={["item-1"]}>
    <Accordion.Item value="item-1">
      <Trigger>What is React?</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">
            React is a JavaScript library for building user interfaces,
            particularly single-page applications. It allows developers to
            create reusable UI components.
          </Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Trigger>What are hooks?</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">
            Hooks are functions that let you use state and other React features
            without writing a class. They were introduced in React 16.8.
          </Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>

    <Accordion.Item value="item-3">
      <Trigger>What is JSX?</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">
            JSX is a syntax extension for JavaScript that looks similar to HTML.
            It is used with React to describe what the UI should look like.
          </Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
);

Default.args = {
  collapsible: false,
  multiple: false,
  orientation: "vertical",
  disabled: false,
};

Default.meta = {
  description:
    "Default accordion component with vertical orientation and single item expansion.",
};

/**
 * Accordion that allows multiple items to be open at the same time.
 */
export const Multiple: Story<Accordion.RootProps> = (args) => (
  <Accordion.Root width="36rem" {...args} defaultValue={["item-1"]}>
    <Accordion.Item value="item-1">
      <Trigger>First Item</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">Content for the first accordion item</Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Trigger>Second Item</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">Content for the second accordion item</Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>

    <Accordion.Item value="item-3">
      <Trigger>Third Item</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">Content for the third accordion item</Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
);

Multiple.args = {
  multiple: true,
  collapsible: true,
};

Multiple.meta = {
  description:
    "Accordion that allows multiple items to be open simultaneously.",
};

/**
 * Accordion that can be completely collapsed with no items open.
 */
export const Collapsible: Story<Accordion.RootProps> = (args) => (
  <Accordion.Root width="36rem" {...args}>
    <Accordion.Item value="item-1">
      <Trigger>Collapsible Item 1</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">This accordion can be completely collapsed</Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Trigger>Collapsible Item 2</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">
            All items can be closed when collapsible is true
          </Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
);

Collapsible.args = {
  collapsible: true,
};

Collapsible.meta = {
  description: "Accordion that can be completely collapsed with no items open.",
};

/**
 * Accordion with disabled items to show interaction states.
 */
export const Disabled: Story<Accordion.RootProps> = (args) => (
  <Accordion.Root width="36rem" {...args} defaultValue={["item-1"]}>
    <Accordion.Item value="item-1">
      <Trigger>Enabled Item</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">This item is enabled and can be interacted with</Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>

    <Accordion.Item value="item-2" disabled>
      <Trigger>Disabled Item</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">
            This content won't be visible as the item is disabled
          </Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
);

Disabled.meta = {
  description:
    "Accordion showcasing disabled items and their interaction states.",
};

/**
 * Accordion with lazy mounting for better performance.
 */
export const LazyMount: Story<Accordion.RootProps> = (args) => (
  <Accordion.Root width="36rem" {...args} lazyMount defaultValue={["item-1"]}>
    <Accordion.Item value="item-1">
      <Trigger>Lazy Mount Item</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">
            This content is mounted only when expanded and unmounted when
            collapsed
          </Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Trigger>Another Lazy Item</Trigger>
      <Accordion.ItemContent>
        <Box p="12">
          <Text size="14">Also uses lazy mounting for better performance</Text>
        </Box>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
);

LazyMount.args = {
  lazyMount: true,
};

LazyMount.meta = {
  description:
    "Accordion with lazy mounting for better performance - content is only mounted when expanded.",
};

const animatedAccordionItems = [
  {
    id: "item-1",
    title: "Animated accordion item",
    content:
      "This accordion item component is animated using Motion.",
  },
  {
    id: "item-2",
    title: "Animate component",
    content:
      "By creating a custom component <Animate> to handle the animations.",
  },
];

/**
 * Accordion with smooth animations for opening and closing.
 */
export const Animated: Story<Accordion.RootProps> = (args) => {
  return (
    <Accordion.Root width="36rem" {...args} defaultValue={["item-1"]}>
      {animatedAccordionItems.map((item) => {
        return (
          <Accordion.Item value={item.id} key={item.id}>
            <Accordion.ItemContext>
              {(ctx) => {
                const isOpen = ctx.expanded;

                return (
                  <React.Fragment>
                    <Accordion.ItemTrigger asChild>
                      <Button visual="soft" shape="rounded" tone="neutral">
                        {item.title}
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: isOpen ? 90 : 0 }}
                        >
                          <Accordion.ItemIndicator asChild>
                            <PhosphorIcon
                              name="CaretRight"
                              weight="bold"
                              size={14}
                            />
                          </Accordion.ItemIndicator>
                        </motion.span>
                      </Button>
                    </Accordion.ItemTrigger>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: isOpen ? "auto" : 0 }}
                      style={{ overflowY: "hidden" }}
                    >
                      <Accordion.ItemContent p="12" hidden={false}>
                        <Text size="14" color="fg">
                          {item.content}
                        </Text>
                      </Accordion.ItemContent>
                    </motion.div>
                  </React.Fragment>
                );
              }}
            </Accordion.ItemContext>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

Animated.meta = {
  description:
    "Accordion with smooth animations for opening and closing using Motion.",
};

const horizontalAccordionItems = [
  {
    id: "item-1",
    title: "",
    icon_name: "ThumbsUpIcon",
    content: "Wow, we are glad to hear that.",
  },
  {
    id: "item-2",
    title: "",
    icon_name: "ThumbsDownIcon",
    content: "Ohh, we are sorry to hear that. ",
  },
];

/**
 * Horizontal accordion layout for side navigation or feature showcases.
 */
export const Horizontal: Story<Accordion.RootProps> = (args) => {
  return (
    <Accordion.Root
      {...args}
      gap="4"
      width="36rem"
      display="flex"
      defaultValue={["item-1"]}
    >
      {horizontalAccordionItems.map((item) => {
        return (
          <Accordion.Item value={item.id} key={item.id} display="flex" gap="4">
            <Accordion.ItemTrigger asChild>
              <Button
                gap="8"
                w="fit"
                shape="pill"
                visual="soft"
                tone="neutral"
                color="fg.subtle"
                justifyContent="start"
              >
                <Accordion.ItemIndicator>
                  <PhosphorIcon
                    size={20}
                    weight={"fill"}
                    name={item.icon_name as any}
                  />
                </Accordion.ItemIndicator>
                {item.title}
              </Button>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent
              px="16"
              height="40"
              display="flex"
              alignItems="center"
              rounded="full"
              backgroundColor="bg.surface"
            >
              <Text size="14" color="fg" lineHeight="1">
                {item.content}
              </Text>
            </Accordion.ItemContent>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

Horizontal.args = {
  orientation: "horizontal",
};

Horizontal.meta = {
  description:
    "Horizontal accordion layout suitable for side navigation or feature showcases.",
};

/**
 * Horizontal accordion with smooth opening and closing animations.
 */
export const AnimatedHorizontal: Story<Accordion.RootProps> = (args) => {
  return (
    <Accordion.Root
      width="36rem"
      {...args}
      defaultValue={["item-1"]}
      display="flex"
      gap="4"
    >
      {horizontalAccordionItems.map((item) => {
        return (
          <Accordion.Item value={item.id} key={item.id}>
            <Accordion.ItemContext display="flex" gap="4">
              {(ctx) => {
                const isOpen = ctx.expanded;

                return (
                  <React.Fragment>
                    <Accordion.ItemTrigger asChild>
                      <Button
                        gap="8"
                        w="fit"
                        shape="pill"
                        visual="soft"
                        tone="neutral"
                        color="fg.subtle"
                        justifyContent="start"
                      >
                        <Accordion.ItemIndicator>
                          <PhosphorIcon
                            size={20}
                            weight={"fill"}
                            name={item.icon_name as any}
                          />
                        </Accordion.ItemIndicator>
                        {item.title}
                      </Button>
                    </Accordion.ItemTrigger>
                    <motion.div
                      initial={{ width: 0 }}
                      style={{ overflowX: "hidden" }}
                      animate={{ width: isOpen ? "auto" : 0 }}
                    >
                      <Accordion.ItemContent
                        h="40"
                        px="16"
                        w="auto"
                        rounded="full"
                        hidden={false}
                        display="flex"
                        bg="bg.surface"
                        overflow="hidden"
                        alignItems="center"
                        maxW="max-content"
                      >
                        <Text
                          size="14"
                          color="fg"
                          minW="20.4rem"
                          lineHeight="1"
                        >
                          {item.content}
                        </Text>
                      </Accordion.ItemContent>
                    </motion.div>
                  </React.Fragment>
                );
              }}
            </Accordion.ItemContext>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

AnimatedHorizontal.args = {
  orientation: "horizontal",
};

AnimatedHorizontal.meta = {
  description:
    "Horizontal accordion with smooth opening and closing animations.",
};

/**
 * Accordion controlled by a provider for external state management.
 */
export const Provider: Story<Accordion.RootProps> = (args) => {
  const accordion = Accordion.use();

  return (
    <Accordion.Provider {...args} value={accordion} width="36rem" spaceY="4">
      <Accordion.Item value="item-1">
        <Trigger>Provider Controlled</Trigger>
        <Accordion.ItemContent>
          <Box p="12">
            <Text size="14">
              This accordion is controlled by a provider component
            </Text>
          </Box>
        </Accordion.ItemContent>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Trigger>Another Item</Trigger>
        <Accordion.ItemContent>
          <Box p="12">
            <Text size="14">Also controlled by the provider</Text>
          </Box>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Provider>
  );
};

Provider.meta = {
  description:
    "Accordion controlled by a provider for external state management.",
};
