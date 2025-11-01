import { Menu } from ".";
import { For } from "../for";
import { Button } from "../button";
import { motion } from "motion/react";
import { PhosphorIcon } from "../icon";
import type { Meta, Story } from "@ladle/react";

const meta: Meta = {
  title: "Components/Menu",
};
export default meta;

const BasicContent = () => {
  const items = [
    {
      icon_name: "ShoppingBagIcon",
      label: "Shop",
      value: "shop",
    },
    {
      icon_name: "MoneyWavyIcon",
      label: "Billing",
      value: "billing",
    },
    {
      icon_name: "GearFineIcon",
      label: "Settings",
      value: "settings",
    },

    {
      icon_name: "PaperclipIcon",
      label: "Docs",
      value: "docs",
    },
  ];

  return (
    <For each={items} spaceY="2">
      {(item: (typeof items)[number]) => (
        <Menu.Item key={item.value} value={item.value}>
          <Menu.ItemIndicator>
            <PhosphorIcon name={item.icon_name as any} size="20" weight="fill" />
          </Menu.ItemIndicator>
          <Menu.ItemText flex="1">{item.label}</Menu.ItemText>
        </Menu.Item>
      )}
    </For>
  );
};

export const Basic: Story = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button tone="neutral" visual="soft">
          Shortcuts
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content p="4" mt="4" hidden={false}>
          <BasicContent />
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export const Animated: Story = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button tone="neutral" visual="soft">
          Shortcuts
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Context>
          {(ctx) => {
            const isOpen = ctx.open;

            return (
              <motion.div
                initial={{ opacity: 0, y: -12, height: 0 }}
                animate={{
                  y: isOpen ? 0 : -12,
                  opacity: isOpen ? 1 : 0,
                  height: isOpen ? "auto" : 0,
                }}
              >
                <Menu.Content p="4" hidden={false}>
                  <BasicContent />
                </Menu.Content>
              </motion.div>
            );
          }}
        </Menu.Context>
      </Menu.Positioner>
    </Menu.Root>
  );
};
