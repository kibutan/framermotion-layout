import { Box, Container, List, ListItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const ITEMS = [1, 2, 3, 4];
function SelectItems() {
  const [selected, setSelected] = useState(1);
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
      <List display={"flex"}>
        {ITEMS.map((item) => (
          <ListItem
            m={4}
            key={item}
            onClick={() => setSelected(item)}
            _hover={{ cursor: "pointer" }}
          >
            Item {item}
            {item === selected ? (
              <motion.div layoutId="arrow">
                <Text h="24px" w="24px">
                  ↑
                </Text>
              </motion.div>
            ) : (
              <></>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default SelectItems;
