import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  position,
  Switch,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppProps } from "next/app";
import { useState } from "react";

function MyBox() {
  const [position, setPosition] = useState("End");
  const [isLayout, setLayout] = useState(true);
  return (
    <Container w="100vw" h="300px" bgColor={"blue.100"} display="grid">
      <Box
        as={motion.div}
        h="100px"
        w="100px"
        display={"grid"}
        rounded={"20px"}
        bgColor={"red.100"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        justifySelf={position}
        layout={isLayout}
      >
        MyBox
      </Box>
      <FormControl display="flex" alignItems={"center"}>
        <FormLabel id="layoutSwitch">Use Layout Animation</FormLabel>
        <Switch
          id="layoutSwitch"
          onChange={(e) => {
            setLayout(e.target.checked);
          }}
        />
      </FormControl>
      <ButtonGroup mt={4}>
        <Button onClick={() => setPosition("start")}>Start</Button>
        <Button onClick={() => setPosition("center")}>Center</Button>
        <Button onClick={() => setPosition("end")}>End</Button>
      </ButtonGroup>
    </Container>
  );
}

export default MyBox;
