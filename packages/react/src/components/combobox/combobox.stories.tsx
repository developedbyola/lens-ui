import React from "react";
import { Combobox } from "./";
import { Text } from "../text";
import { Avatar } from "../avatar";
import { Animate } from "../animate";
import { InputGroup } from "../input";
import { motion } from "motion/react";
import { PhosphorIcon } from "../icon";
import type { Story, Meta } from "@ladle/react";
import { useListCollection, useFilter } from "@ark-ui/react";

const members = [
  {
    name: "Jessica Williams",
    profilePicture:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    email: "jessica.williams@acme.com",
  },
  {
    name: "Alex Kim",
    profilePicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    email: "alex.kim@acme.com",
  },
  {
    name: "Maria Garcia",
    profilePicture:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
    email: "maria.garcia@acme.com",
  },
  {
    name: "Kevin Patel",
    profilePicture:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    email: "kevin.patel@acme.com",
  },
  {
    name: "Lisa Anderson",
    profilePicture:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    email: "lisa.anderson@acme.com",
  },
  {
    name: "Amanda Lee",
    profilePicture:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    email: "amanda.lee@acme.com",
  },
  {
    name: "James Wilson",
    profilePicture:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    email: "james.wilson@acme.com",
  },
];

const meta: Meta = {
  title: "Components/Combobox",
  component: Combobox.Root,
};
export default meta;

const Control = () => {
  return (
    <Combobox.Control mt="6">
      <Combobox.Trigger width="full">
        <InputGroup.Root>
          <Combobox.TextInput
            pl="10"
            flex="1"
            outline="none"
            placeholder="Choose community member..."
          />
          <InputGroup.Addon pr="10">
            <PhosphorIcon name="CaretDownIcon" />
          </InputGroup.Addon>
        </InputGroup.Root>
      </Combobox.Trigger>
    </Combobox.Control>
  );
};

type LabelProps = { children?: React.ReactNode };

const Label = ({ children }: LabelProps) => {
  return (
    <Combobox.Label asChild>
      <Text as="label" size="14" weight="medium">
        {children || "Assign role"}
      </Text>
    </Combobox.Label>
  );
};

type BasicListProps = { items: string[] };

const BasicList = ({ items }: BasicListProps) => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <Combobox.Item
          px="8"
          gap="8"
          key={item}
          rounded="8"
          height="32"
          item={item}
          display="flex"
          cursor="pointer"
          alignItems="center"
          color="fg.headline"
          transition="all 150ms ease-in-out"
          _highlighted={{
            backgroundColor: "bg.subtle",
            _checked: {
              backgroundColor: "bg.subtle",
            },
          }}
        >
          <Combobox.ItemText flex="1" asChild>
            <Text as="span" weight="medium">
              {item}
            </Text>
          </Combobox.ItemText>
          <Combobox.ItemIndicator>
            <PhosphorIcon name="CheckIcon" />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      ))}
    </React.Fragment>
  );
};

type DynamicListProps = { items: (typeof members)[number][] };
const DynamicList = ({ items }: DynamicListProps) => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <Combobox.Item
          px="8"
          gap="8"
          rounded="8"
          height="32"
          item={item}
          display="flex"
          key={item.name}
          cursor="pointer"
          color="fg.headline"
          alignItems="center"
          transition="all 150ms ease-in-out"
          _highlighted={{
            backgroundColor: "bg.subtle",
            _checked: {
              backgroundColor: "bg.subtle",
            },
          }}
        >
          <Avatar.Root size="xs">
            <Avatar.Image src={item.profilePicture} />
          </Avatar.Root>
          <Combobox.ItemText flex="1" asChild>
            <Text as="span" weight="medium">
              {item.name}
            </Text>
          </Combobox.ItemText>
          <Combobox.ItemIndicator>
            <PhosphorIcon name="CheckIcon" />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      ))}
    </React.Fragment>
  );
};

export const Basic: Story = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const initialItems = members.map((m) => m.name);

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  });

  const handleInputChange = (details: any) => {
    filter(details.inputValue);
  };

  return (
    <Combobox.Root
      width="30rem"
      collection={collection}
      onInputValueChange={handleInputChange}
      closeOnSelect
    >
      <Label />
      <Control />

      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.List p="4">
            <BasicList items={collection.items} />
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};

export const Object: Story = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: members,
    filter: contains,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.name,
  });

  const handleInputChange = (details: any) => {
    filter(details.inputValue);
  };

  return (
    <Combobox.Root
      width="30rem"
      collection={collection}
      onInputValueChange={handleInputChange}
      closeOnSelect
    >
      <Label />
      <Control />

      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.List p="4">
            <DynamicList items={collection.items} />
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};

export const Animated: Story = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: members,
    filter: contains,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.name,
  });

  const handleInputChange = (details: any) => {
    filter(details.inputValue);
  };

  return (
    <Combobox.Root
      width="30rem"
      collection={collection}
      onInputValueChange={handleInputChange}
      closeOnSelect
    >
      <Label />
      <Control />

      <Combobox.Positioner>
        <Combobox.Context>
          {(ctx) => {
            const isOpen = ctx.open;

            return (
              <motion.div
                initial={{ scale: 0.9, opacity: 0, height: 0 }}
                animate={{
                  scale: isOpen ? 1 : 0.9,
                  opacity: isOpen ? 1 : 0,
                  height: isOpen ? "auto" : 0,
                }}
                style={{ transformOrigin: "0% 50%" }}
              >
                <Combobox.Content hidden={false}>
                  <Combobox.List p="4">
                    <DynamicList items={collection.items} />
                  </Combobox.List>
                </Combobox.Content>
              </motion.div>
            );
          }}
        </Combobox.Context>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};
