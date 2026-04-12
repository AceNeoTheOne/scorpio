import { Box, Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import VehiclesGrid from "./components/VehiclesGrid";
function App() {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "ifr",
        lg: "200px 1 fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box borderWidth="2px" borderRadius="lg" margin="10px" bg={bgColor}>
          <VehiclesGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
