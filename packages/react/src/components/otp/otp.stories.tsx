import { Otp } from "."
import { Stack } from "../stack";
import { InputGroup } from "../input";
import type { Meta } from "@ladle/react";

const meta: Meta = {
  title: "Components/Otp"
}
export default meta;

export const Basic = () => {
  return (
    <Otp.Root onValueComplete={(e) => alert(e.valueAsString)} placeholder="*">
      <Otp.Label textAlign="center" mb="8">Enter OTP</Otp.Label>
      <Otp.Control>
        <Stack gap="8">
          {[0, 1, 2, 3, 4, 5].map((id, index) => (
            <InputGroup.Root key={id} boxSize="4rem">
              <Otp.Input fontSize="2.4rem" index={index} textAlign="center" />
            </InputGroup.Root>
          ))}
        </Stack>
      </Otp.Control>
      <Otp.HiddenInput />
    </Otp.Root>
  )
}
