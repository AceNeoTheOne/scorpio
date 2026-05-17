import { Box, Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import VehiclesGrid from "../components/VehiclesGrid";
import SideMenu from "../components/SideMenu";
import { useState } from "react";
import { boxStyle } from "../styles/styles";

function Dashboard() {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const today = new Date();
  const [startDate, setStartDate] = useState(lastWeek.toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState(today.toISOString().split("T")[0]);

  const handleStartValueChange = (dateValue: string) => {
    //console.log("Start Date: " + dateValue);
    setStartDate(dateValue);
  };

  const handleEndValueChange = (dateValue: string) => {
    //console.log("End Date: " + dateValue);
    setEndDate(dateValue);
  };

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
        <NavBar onStartValueChange={handleStartValueChange} onEndValueChange={handleEndValueChange} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Box sx={boxStyle} bg={bgColor} width="200px">
            <SideMenu />
          </Box>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box sx={boxStyle} bg={bgColor}>
          <VehiclesGrid startDate={startDate} endDate={endDate} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Dashboard;
