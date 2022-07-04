import { Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
function FixedDistortions() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Container
      w="100vw"
      h="300px"
      bgColor={"blue.100"}
      display="grid"
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Box
        as={motion.div}
        h={isExpanded ? "100px" : "20px"}
        w={isExpanded ? "100px" : "20px"}
        display={"grid"}
        rounded={"20px"}
        bgColor={"red.100"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        onClick={() => setIsExpanded(!isExpanded)}
        layout
      >
        {isExpanded ? "Open" : ""}
      </Box>
    </Container>
  );
}

export default FixedDistortions;
