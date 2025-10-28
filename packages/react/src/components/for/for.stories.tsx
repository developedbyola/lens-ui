import { For } from "./";
import { Button } from "../button";
import type { Meta, Story } from "@ladle/react";

const meta: Meta = {
  title: "Components/For",
};
export default meta;

export const Basic: Story = () => {
  return (
    <For
      gap="4"
      display="flex"
      flexWrap="wrap"
      each={[
        "react",
        "typescript",
        "tailwindCSS",
        "vue",
        "svelte",
        "angular",
        "next JS",
      ]}
    >
      {(item, index) => {
        return (
          <Button
            key={index}
            tone="neutral"
            visual="ghost"
            textTransform="capitalize"
          >
            {item}
          </Button>
        );
      }}
    </For>
  );
};
