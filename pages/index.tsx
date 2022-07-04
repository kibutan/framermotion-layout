import { Container, VStack } from "@chakra-ui/react";
import { MyBox, FixedDistortions, SelectItems } from "./Exports";

export default function Home() {
  return (
    <VStack>
      <MyBox />
      <FixedDistortions />
      <SelectItems />
    </VStack>
  );
}
