import { Grid, GridItem } from "@chakra-ui/react";
import Aside from "./Aside";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={`
        "aside main"
      `}
        gridTemplateRows={"1fr"} // Only one row left, so it's 1fr
        gridTemplateColumns={"200px 1fr"} // Sidebar and main content layout
        width="100vw"
        height="100vh"
        p="0" // Remove padding
        m="0" // Remove margin
        boxSizing="border-box"
      >
        {/* Sidebar (Aside) */}
        <GridItem
          bg="yellow.100"
          area={"aside"}
          borderRight="1px solid"
          borderColor="gray.200"
        >
          <Aside />
        </GridItem>

        {/* Main Content */}
        <GridItem bg="white.300" area={"main"} height={"100%"}>
          <Form />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
