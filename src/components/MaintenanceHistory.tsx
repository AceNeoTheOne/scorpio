import { Button } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import useExpenses from "../hooks/useExpenses";

interface Props {
  isOpen: boolean;
  onClose: () => void; // A function that takes no arguments and returns nothing
  vehicleId: string;
  startDate: string;
  endDate: string;
}

const MaintenanceHistory = ({ isOpen, onClose, vehicleId, startDate, endDate }: Props) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const parameters = {
    VehicleID: vehicleId,
    vcSTART_DATE: startDate + " 00:00:00",
    vcEND_DATE: endDate + " 23:59:59",
  };

  const { expenses, error, isLoading, setExpenses, setError, setIsLoading } = useExpenses(parameters);

  let total = 0;
  expenses.forEach((expense) => {
    total += expense.LINETOTAL; // Side effect: updating an external variable
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent maxH="700px" maxW="1400px">
        <ModalHeader>
          Unit {vehicleId} Expenses Detail ({startDate} to {endDate})
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody overflowX="scroll">
          <TableContainer minW="1300px">
            <Table size="sm" variant="striped" colorScheme="teal" fontSize="sm">
              <TableCaption></TableCaption>
              <Thead>
                <Tr>
                  <Th width="1px" fontSize="17px">
                    Order
                  </Th>
                  <Th width="1px" fontSize="17px">
                    Closed
                  </Th>
                  <Th width="1px" fontSize="17px">
                    Status
                  </Th>
                  <Th width="1px" fontSize="17px">
                    Vendor
                  </Th>
                  <Th width="1px" fontSize="17px">
                    Line Type
                  </Th>
                  <Th width="1px" fontSize="17px">
                    Part
                  </Th>
                  <Th fontSize="17px">Description</Th>
                  <Th isNumeric fontSize="17px">
                    Line Total
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {expenses.map((expense) => (
                  <Tr key={expense.LINEID}>
                    <Td>{expense.ORDERNUM}</Td>
                    <Td>{expense.CLOSED}</Td>
                    <Td>{expense.STATUS}</Td>
                    <Td>{expense.VENDORID}</Td>
                    <Td>{expense.LINETYPE}</Td>
                    <Td>{expense.PARTNUMBER}</Td>
                    <Td>{expense.DESCRIP}</Td>
                    <Td isNumeric>{formatCurrency(expense.LINETOTAL)}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th fontSize="17px">TOTAL:</Th>
                  <Th isNumeric fontSize="17px">
                    {formatCurrency(total)}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MaintenanceHistory;
