import { Field } from "./";
import { InputGroup } from "../input";
import { PhosphorIcon } from "../icon";
import type { Story, Meta } from "@ladle/react";

const meta: Meta = {
  title: "Components/Field",
};

export default meta;

export const Basic: Story = () => {
  return (
    <Field.Root spaceY="6" width="full" maxWidth="30rem">
      <Field.Label>First name</Field.Label>
      <InputGroup.Root>
        <Field.Input px="1rem" placeholder="e.g Thomas" />
      </InputGroup.Root>
      <Field.Helper>Provide your legal first name</Field.Helper>
    </Field.Root>
  );
};

export const WithError: Story = () => {
  return (
    <Field.Root invalid spaceY="6" width="full" maxWidth="30rem">
      <Field.Label>First name</Field.Label>
      <InputGroup.Root>
        <Field.Input px="1rem" placeholder="e.g Thomas" />
      </InputGroup.Root>
      <Field.Error color="red.fg">Provide your legal first name</Field.Error>
    </Field.Root>
  );
};

export const RequiredIndicator: Story = () => {
  return (
    <Field.Root invalid spaceY="6" width="full" maxWidth="30rem">
      <Field.Label>First name</Field.Label>
      <InputGroup.Root>
        <Field.Input px="1rem" placeholder="e.g Thomas" />
        <InputGroup.Addon pr="1rem">
          <Field.RequiredIndicator color="rose.fg">
            <PhosphorIcon name="WarningCircleIcon" weight="bold" size="20" />
          </Field.RequiredIndicator>
        </InputGroup.Addon>
      </InputGroup.Root>
      <Field.Error>Provide your legal first name</Field.Error>
    </Field.Root>
  );
};
