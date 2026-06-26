import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

interface Props {
  onSelectAnItem: (item: string) => void;
}

const SideMenu = ({ onSelectAnItem }: Props) => {
  return (
    <Accordion allowToggle={true}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Vehicles
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          onClick={() => {
            onSelectAnItem("Fleet Overview");
          }}
          _hover={{ cursor: "pointer" }}
        >
          Fleet Overview
        </AccordionPanel>
        <AccordionPanel
          pb={4}
          onClick={() => {
            onSelectAnItem("PM Supervision");
          }}
          _hover={{ cursor: "pointer" }}
        >
          PM Supervision
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Drivers
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <AccordionPanel
          pb={4}
          onClick={() => {
            onSelectAnItem("Company Drivers");
          }}
          _hover={{ cursor: "pointer" }}
        >
          Company Drivers
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SideMenu;
