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
              Main
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
