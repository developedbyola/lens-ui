import "./ladle.css";
import React from "react";
import { Box } from "../src/components/box";
import { Stack } from "../src/components/stack";
import type { GlobalProvider } from "@ladle/react";
import { Container } from "../src/components/container";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  React.useEffect(() => {
    if (globalState.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [globalState.theme]);

  return (
    <Box>
      <Container maxWidth="40rem" minHeight="90vh" alignContent="center" py="4rem">
        <Stack justify="center" items="center" axis="vertical">
          {children}
        </Stack>
      </Container>
    </Box>
  );
};
