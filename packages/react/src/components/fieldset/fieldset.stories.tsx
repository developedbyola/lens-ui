import { Fieldset } from "./";
import { Field } from "../field";
import { InputGroup } from "../input";
import { Checkbox } from "../checkbox";
import { PhosphorIcon } from "../icon";
import type { Meta } from "@ladle/react";

const meta: Meta = {
  title: "Components/Fieldset",
};

export default meta;

export const Basic = () => {
  return (
    <Fieldset.Root width="full" maxWidth="30rem">
      <Fieldset.Legend fontSize="1.8rem">Contact</Fieldset.Legend>
      <Fieldset.Helper>Provide your contact information data.</Fieldset.Helper>
      <Fieldset.Error>Provide your contact information data</Fieldset.Error>
      <Field.Root spaceY="6" mt="20">
        <Field.Label>Email</Field.Label>
        <InputGroup.Root>
          <Field.Input px="1rem" placeholder="e.g Thomas" />
        </InputGroup.Root>
        <Field.Helper>Provide your email address</Field.Helper>
        <Field.Error>Provide your email address</Field.Error>
      </Field.Root>
    </Fieldset.Root>
  );
};

export const WithCheckbox = () => {
  return (
    <Fieldset.Root width="full" maxWidth="30rem">
      <Fieldset.Legend fontSize="1.8rem">Motion</Fieldset.Legend>
      <Fieldset.Helper>
        Control how animations and transitions are rendered within the
        application.
      </Fieldset.Helper>
      <Fieldset.Error>
        We are unable to complete the request try again later.
      </Fieldset.Error>
      <Checkbox.Root mt="20">
        <Checkbox.Control>
          <Checkbox.Indicator>
            <PhosphorIcon name="Check" weight="bold" size="12px" />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Reduce motion</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </Fieldset.Root>
  );
};
