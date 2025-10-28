import { Box } from "../box";
import { Text } from "../text";
import { Stack } from "../stack";
import { Avatar } from "../avatar";
import { FloatingPanel } from "./";
import { Portal } from "../portal";
import { PhosphorIcon } from "../icon";
import type { Meta } from "@ladle/react";
import { Button, IconButton } from "../button";

const meta: Meta = {
  title: "Components/Floating Panel",
};

export default meta;

const messages = [
  {
    name: "John Doe",
    avatar_url: "https://i.pravatar.cc/150?img=3",
    message: "Hey there! How are you doing?",
    username: "johndoe",
  },
  {
    name: "Sarah Smith",
    avatar_url: "https://i.pravatar.cc/150?img=5",
    message: "Just finished the project! 🎉",
    username: "sarahs",
  },
  {
    name: "Mike Johnson",
    avatar_url: "https://i.pravatar.cc/150?img=15",
    message: "Can we schedule a meeting for tomorrow?",
    username: "mikej",
  },
  {
    name: "Emily Chen",
    avatar_url: "https://i.pravatar.cc/150?img=13",
    message: "Thanks for your help with the code!",
    username: "emilyc",
  },
  {
    name: "Alex Rodriguez",
    avatar_url: "https://i.pravatar.cc/150?img=20",
    message: "The new design looks amazing!",
    username: "alexr",
  },
];

export const Basic = () => {
  return (
    <FloatingPanel.Root>
      <FloatingPanel.Trigger asChild>
        <Button visual="soft" tone="neutral">
          New messages
        </Button>
      </FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content display="flex" flexDirection="column">
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header
                py="6"
                px="8"
                gap="8"
                display="flex"
                alignItems="center"
                backgroundColor="bg.subtle"
              >
                <FloatingPanel.Title flex="1">Messages</FloatingPanel.Title>
                <FloatingPanel.Control
                  p="2"
                  gap="2"
                  rounded="8"
                  display="flex"
                  backgroundColor="bg"
                >
                  <FloatingPanel.StageTrigger stage="minimized" asChild>
                    <IconButton size="24" visual="ghost" tone="neutral">
                      <PhosphorIcon
                        name="ArrowsInSimpleIcon"
                        size="16"
                        weight="bold"
                      />
                    </IconButton>
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="maximized" asChild>
                    <IconButton size="24" visual="ghost" tone="neutral">
                      <PhosphorIcon
                        name="ArrowsOutSimpleIcon"
                        size="16"
                        weight="bold"
                      />
                    </IconButton>
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="default" asChild>
                    <IconButton size="24" visual="ghost" tone="neutral">
                      <PhosphorIcon
                        size="16"
                        weight="bold"
                        name="ArrowsOutLineVerticalIcon"
                      />
                    </IconButton>
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger asChild>
                    <IconButton size="24" visual="ghost" tone="neutral">
                      <PhosphorIcon name="XIcon" size="16" weight="bold" />
                    </IconButton>
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body
              px="8"
              py="20"
              flex="1"
              spaceY="8"
              height="full"
              maxWidth="48rem"
              overflowY="scroll"
            >
              {messages.map((msg) => {
                return (
                  <Stack key={msg.username} gap="10">
                    <Avatar.Root>
                      <Avatar.Image src={msg.avatar_url} />
                      <Avatar.Fallback>{msg.username}</Avatar.Fallback>
                    </Avatar.Root>
                    <Box flex="1" spaceY="1">
                      <Text
                        size="14"
                        weight="medium"
                        lineHeight="1.2"
                        color="fg.headline"
                        textTransform="capitalize"
                      >
                        {msg.username}
                      </Text>
                      <Text size="13" lineHeight="1.2">
                        {msg.message}
                      </Text>
                    </Box>
                  </Stack>
                );
              })}
            </FloatingPanel.Body>
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
};
