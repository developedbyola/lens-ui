import { Box } from "../box";
import { Container } from "./";
import { Badge } from "../badge";
import type { Meta } from "@ladle/react";

const meta: Meta = {
  title: "Components/Container",
  component: Container,
};

export default meta;

export const Basic = () => {
  return (
    <Container
      rounded="8"
      height="24rem"
      maxWidth="36rem"
      border=".5px solid"
      borderColor="border"
      backgroundColor="bg.subtle"
    />
  );
};

export const Content = () => {
  return (
    <Container
      rounded="8"
      height="24rem"
      maxWidth="36rem"
      border=".5px solid"
      alignContent="center"
      borderColor="border"
      backgroundColor="bg.subtle"
    >
      <Box width="fit" mx="auto">
        <Badge shape="pill">Content</Badge>
      </Box>
    </Container>
  );
};
