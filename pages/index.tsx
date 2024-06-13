import { Button, Group } from "@mantine/core";
import {DarkLightSwitch} from "../DarkLightSwitch";

export default function IndexPage() {
  return (
    <Group mt={50} justify="center">

      <Button size="xl">Welcome to Mantine!</Button>
        <DarkLightSwitch/>
    </Group>
  );
}
