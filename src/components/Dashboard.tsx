import { Box, Grid, GridItem, Show, useToast, useColorModeValue } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import VehiclesGrid from "../components/VehiclesGrid";
import PMSGrid from "./PMSGrid";
import DriversGrid from "../components/DriversGrid";
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

  const toast = useToast();

  const [item, setClickedMenuItem] = useState("Fleet Overview");
  const handleMenuClick = (item: string) => {
    console.log(item);
    if (startDate > endDate) {
      toast({
        title: "Warning.",
        description: "Start date is later than end date.",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
      return;
    }
    setClickedMenuItem(item);
  };

  const [refreshKey, setRefreshKey] = useState<number>(0);
  const handleRefresh = (): void => {
    if (startDate > endDate) {
      toast({
        title: "Warning.",
        description: "Start date is later than end date.",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
      return;
    }
    // Incrementing the key forces a complete remount
    setRefreshKey((prev) => prev + 1);
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
        <NavBar onStartValueChange={handleStartValueChange} onEndValueChange={handleEndValueChange} onRefresh={handleRefresh} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Box sx={boxStyle} bg={bgColor} width="200px">
            <SideMenu onSelectAnItem={handleMenuClick} />
          </Box>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box sx={boxStyle} bg={bgColor}>
          {/* VEHICLES */}
          {item === "Fleet Overview" && <VehiclesGrid startDate={startDate} endDate={endDate} key={refreshKey} />}
          {item === "PM Supervision" && <PMSGrid key={refreshKey} />}
          {/* DRIVERS */}
          {item === "Company Drivers" && <DriversGrid startDate={startDate} endDate={endDate} key={refreshKey} />}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Dashboard;
