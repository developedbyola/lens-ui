import React from "react";
import { Clipboard } from ".";
import { Text } from "../text";
import { Badge } from "../badge";
import { Button } from "../button";
import { InputGroup } from "../input";
import { Icon, PhosphorIcon } from "../icon";

export default {
  title: "Components/Clipboard",
};
type ControlProps = {
  copied?: React.ReactNode;
};
const Control = ({ copied }: ControlProps) => {
  return (
    <InputGroup.Root width="28rem">
      <Clipboard.Control flex="1" px="10">
        <Clipboard.TextInput />
      </Clipboard.Control>
      <InputGroup.Addon pr="6" backgroundColor="transparent">
        <Clipboard.Context>
          {(ctx) => {
            return (
              <Clipboard.Trigger asChild>
                <Button
                  size="xs"
                  tone="neutral"
                  shape="rounded"
                  visual="outlined"
                  disabled={ctx.copied}
                >
                  <Clipboard.Indicator
                    copied={
                      copied || (
                        <Text as="span" size="14">
                          Copied
                        </Text>
                      )
                    }
                  >
                    <Text as="span" size="14">
                      Copy
                    </Text>
                  </Clipboard.Indicator>
                </Button>
              </Clipboard.Trigger>
            );
          }}
        </Clipboard.Context>
      </InputGroup.Addon>
    </InputGroup.Root>
  );
};

const Label = () => {
  return (
    <Clipboard.Label fontWeight="500" fontSize="1.4rem">
      Share
    </Clipboard.Label>
  );
};

export const Basic = () => {
  return (
    <Clipboard.Root spaceY="6" value="https://example.com/share-link">
      <Label />
      <Control />
    </Clipboard.Root>
  );
};

export const Status = () => {
  const [copyCount, setCopyCount] = React.useState<number>(0);

  const handleStatusChange = (state: boolean) => {
    if (state) {
      setCopyCount((prev) => prev + 1);
    }
  };
  return (
    <Clipboard.Root
      spaceY="6"
      value="https://facebook.com"
      onStatusChange={({ copied }) => {
        handleStatusChange(copied);
      }}
    >
      <Label />
      <Control />
      <Badge size="base" shape="pill" tone="neutral" visual="soft">
        Count: {copyCount}
      </Badge>
    </Clipboard.Root>
  );
};

export const WithIcon = () => {
  return (
    <Clipboard.Root spaceY="6" value="https://example.com/share-link">
      <Label />
      <Control
        copied={
          <Icon asChild color="fg">
            <PhosphorIcon name="CheckIcon" size="16" weight="bold" />
          </Icon>
        }
      />
    </Clipboard.Root>
  );
};
