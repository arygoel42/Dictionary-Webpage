import React from "react";
import { useDisclosure, Fade, Box, Button } from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";

const Aside = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <CiMenuBurger size="3em" onClick={onToggle}>
        Click Me
      </CiMenuBurger>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="grey.500"
          mt="4"
          bg="white.500"
          rounded="md"
          shadow="md"
          onClick={() => console.log("clicked")}
        >
          <Button background={"yellow.100"}>Button</Button>
        </Box>
        <Box
          p="40px"
          color="grey.500"
          mt="4"
          bg="white.500"
          rounded="md"
          shadow="md"
          onClick={() => console.log("clicked")}
        >
          <Button background={"yellow.100"}>Button</Button>
        </Box>
        <Box
          p="40px"
          color="grey.500"
          mt="4"
          bg="white.500"
          rounded="md"
          shadow="md"
          onClick={() => console.log("clicked")}
        >
          <Button background={"yellow.100"}>Button</Button>
        </Box>
      </Fade>
    </div>
  );
};

export default Aside;
