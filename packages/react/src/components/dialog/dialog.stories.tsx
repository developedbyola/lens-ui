import { Dialog } from ".";
import { Box } from "../box";
import { Text } from "../text";
import { Stack } from "../stack";
import { Badge } from "../badge";
import { Avatar } from "../avatar";
import { Portal } from "../portal";
import { motion } from "motion/react";
import { PhosphorIcon } from "../icon";
import type { Meta } from "@ladle/react";
import { Button, IconButton } from "../button";

const meta: Meta = {
  title: "Components/Dialog",
  component: Dialog.Root,
};

export default meta;

const Control = () => {
  return (
    <Stack gap="4">
      <Dialog.Trigger asChild>
        <Button flex="1" shape="rounded" size="lg">
          Lend with Drift
        </Button>
      </Dialog.Trigger>
      <Button visual="soft" shape="rounded" size="lg" tone="neutral">
        Alternatives
      </Button>
    </Stack>
  );
};

type ContentProps = {
  isAnimated?: boolean;
};
const Content = ({ isAnimated }: ContentProps) => {
  const coins = [
    "https://s2.coinmarketcap.com/static/img/coins/128x128/5805.png",
    "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
    "https://s2.coinmarketcap.com/static/img/coins/128x128/7083.png",
  ];

  return (
    <Dialog.Content
      p="2rem"
      rounded="2.8rem"
      hidden={isAnimated ? false : undefined}
    >
      <Stack gap="16">
        <Avatar.Root size="xl" shape="rounded" visual="soft">
          <Avatar.Image
            scale="1.2"
            src="https://s2.coinmarketcap.com/static/img/coins/128x128/31278.png"
          />
          <Avatar.Fallback>Dr</Avatar.Fallback>
        </Avatar.Root>
        <Box flex="1" spaceY="3" alignSelf="center">
          <Badge
            px="0"
            gap="6"
            size="xs"
            height="fit"
            visual="ghost"
            tone="neutral"
            lineHeight="1"
            fontWeight="500"
            color="neutral.50"
            justifyContent="start"
          >
            Drift
            <PhosphorIcon weight="fill" size="3" name="CircleIcon" />
            <Text as="span" color="emerald.70">
              6.58%{" "}
            </Text>
            APY
          </Badge>
          <Text
            as="h2"
            size="16"
            weight="medium"
            lineHeight="1"
            color="fg.headline"
          >
            Lending yield
          </Text>
        </Box>
        <Stack gap="6" items="center">
          <IconButton size="28" shape="circle">
            <PhosphorIcon size="20" weight="bold" name="PlusIcon" />
          </IconButton>
          <Dialog.CloseTrigger asChild>
            <IconButton size="24" shape="circle" visual="soft" tone="neutral">
              <PhosphorIcon size="16" weight="bold" name="XIcon" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Stack>
      </Stack>

      <Box border=".5px dashed" borderColor="border" my="3.2rem" />

      <Stack gap="20" items="end">
        <Text flex="1" color="neutral.50" size="14" lineHeight="1.3">
          Deposit your stablecoins with Drift to earn yield from lending
          markets.
        </Text>
        <Stack mb="2">
          {coins.map((coin, index) => {
            return (
              <Avatar.Root
                size="xs"
                key={coin}
                borderColor="bg"
                border="2px solid"
                ml={index > 0 ? "-8" : "0"}
              >
                <Avatar.Image src={coin} alt="coin" />
                <Avatar.Fallback>C</Avatar.Fallback>
              </Avatar.Root>
            );
          })}
        </Stack>
      </Stack>
    </Dialog.Content>
  );
};

export const Basic = () => {
  return (
    <Dialog.Root width="32rem" modal={false} closeOnInteractOutside={false}>
      <Control />
      <Box mt="12">
        <Content />
      </Box>
    </Dialog.Root>
  );
};

export const WithBackdrop = () => {
  return (
    <Dialog.Root width="32rem" closeOnInteractOutside={false}>
      <Control />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Content />
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export const Animated = () => {
  return (
    <Dialog.Root width="36rem" closeOnInteractOutside={false}>
      <Control />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Context>
            {(ctx) => {
              const isOpen = ctx.open;

              return (
                <motion.div
                  initial={{ scale: 0.9, height: 0, opacity: 0 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0.9,
                    height: isOpen ? "auto" : 0,
                  }}
                >
                  <Content isAnimated />
                </motion.div>
              );
            }}
          </Dialog.Context>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
