import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import React from "react";

const SideMenu = () => {
  return (
    <Accordion allowToggle={true}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Main
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>Fleet Overview</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Settings
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
      </AccordionItem>
    </Accordion>
  );
};

export default SideMenu;
