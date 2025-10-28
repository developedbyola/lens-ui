import { Box } from "../box";
import { Editable } from "./";
import { Text } from "../text";
import { Stack } from "../stack";
import { Button } from "../button";
import { InputGroup } from "../input";
import { Icon, PhosphorIcon } from "../icon";
import type { Meta, Story } from "@ladle/react";

const meta: Meta = {
  title: "Components/Editable",
  component: Editable,
};

export default meta;

export const Basic = () => {
  return (
    <Editable.Root
      width="30rem"
      placeholder="Address"
      defaultValue="123 Bashorun Street, Bodija, Ibadan"
    >
      <Editable.Label asChild>
        <Text as="label" size="14">
          Work address
        </Text>
      </Editable.Label>
      <Editable.Context>
        {(ctx) => {
          return (
            <Editable.Area>
              <InputGroup.Root size="sm" hidden={!ctx.editing}>
                <Editable.Input px="1rem" />
              </InputGroup.Root>
              <Editable.Preview fontSize="1.4rem">
                {ctx.value || "What's your address?"}
              </Editable.Preview>
            </Editable.Area>
          );
        }}
      </Editable.Context>
    </Editable.Root>
  );
};
