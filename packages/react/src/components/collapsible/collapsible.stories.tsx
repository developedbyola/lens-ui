import { Box } from "../box";
import { Text } from "../text";
import { Collapsible } from ".";
import { Stack } from "../stack";
import { Button } from "../button";
import { Avatar } from "../avatar";
import { motion } from "motion/react";

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

export default {
  title: "Components/Collapsible",
};

const Header = () => {
  return (
    <Stack items="center" justify="between">
      <Text
        as="h2"
        size="20"
        weight="medium"
        lineHeight="1"
        color="fg.headline"
      >
        Community members
      </Text>
      <Collapsible.Trigger asChild>
        <Button visual="outlined" tone="neutral" size="sm">
          Show
        </Button>
      </Collapsible.Trigger>
    </Stack>
  );
};

type ContentProps = {
  animatable?: boolean;
};

const Content = ({ animatable }: ContentProps) => {
  return (
    <Collapsible.Content
      p="12"
      mt="16"
      spaceY="10"
      rounded="12"
      backgroundColor="bg.subtle"
      hidden={animatable ? false : undefined}
    >
      {members.map((member) => {
        return (
          <Stack key={member.name} gap="10">
            <Avatar.Root shape="rounded">
              <Avatar.Image src={member.profilePicture} />
            </Avatar.Root>
            <Box flex="1">
              <Text
                size="14"
                weight="medium"
                lineHeight="1.2"
                color="fg.headline"
              >
                {member.name}
              </Text>
              <Text lineHeight="1.2" size="13">
                {member.email}
              </Text>
            </Box>
          </Stack>
        );
      })}
    </Collapsible.Content>
  );
};

export const Default = () => {
  return (
    <Collapsible.Root width="full">
      <Header />
      <Content />
    </Collapsible.Root>
  );
};

export const Animated = () => {
  return (
    <Collapsible.Root width="full">
      <Header />
      <Collapsible.Context>
        {(ctx) => {
          const isOpen = ctx.open;

          return (
            <motion.div
              initial={{ height: 0, scale: 0.9, opacity: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.9,
                height: isOpen ? "auto" : 0,
              }}
            >
              <Content animatable />
            </motion.div>
          );
        }}
      </Collapsible.Context>
    </Collapsible.Root>
  );
};
