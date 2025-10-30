import { Listbox } from "./";
import { PhosphorIcon } from "../icon";
import { createListCollection } from "../primitives";
import { type Meta, type Story } from "@ladle/react";

const meta: Meta = {
  title: "Components/Listbox",
};

export default meta;

export const Basic: Story = () => {
  const collection = createListCollection({
    items: ["React", "Solid", "Vue", "Svelte"],
  });

  return (
    <Listbox.Root collection={collection} maxWidth="28rem" width="full">
      <Listbox.Label>Select your framework</Listbox.Label>
      <Listbox.Content mt="8" p="4" spaceY="2">
        {collection.items.map((item, index) => (
          <Listbox.Item
            key={index}
            item={item}
            rounded="6"
            disabled={item === "Solid"}
            _selected={{
              color: "fg.headline",
              backgroundColor: "bg.surface",
            }}
            _hover={{
              color: "fg.headline",
              backgroundColor: "bg.surface",
            }}
          >
            <Listbox.ItemText flex="1" color="inherit">
              {item}
            </Listbox.ItemText>
            <Listbox.ItemIndicator>
              <PhosphorIcon name="CheckIcon" size="16" weight="bold" />
            </Listbox.ItemIndicator>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
};
