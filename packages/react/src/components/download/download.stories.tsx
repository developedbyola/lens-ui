import { Download } from "./";
import { Button } from "../button";
import type { Meta } from "@ladle/react";

const meta: Meta = {
  title: "Components/Download",
  component: Download,
};

export default meta;

export const Basic = () => {
  return (
    <Download
      asChild
      data="Hello world"
      fileName="hello.txt"
      mimeType="text/plain"
    >
      <Button shape="pill">Download</Button>
    </Download>
  );
};
