import { Box, Input, InputGroup, InputLeftAddon, useColorModeValue } from "@chakra-ui/react";
import { inputStyle } from "../styles/styles";

interface Props {
  onStartValueChange: (dateValue: string) => void;
  onEndValueChange: (dateValue: string) => void;
  labelValue: string;
}

//interface NewProps extends Props {
//labelValue: string;
//}

const DatePicker = ({ onStartValueChange, onEndValueChange, labelValue }: Props) => {
  //const [value, setValue] = React.useState("");
  //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const lastWeek = new Date();
  if (labelValue === "Start Date") lastWeek.setDate(lastWeek.getDate() - 7);

  return (
    <>
      <Box width="320px" marginRight={3}>
        <InputGroup>
          {/*<InputLeftAddon sx={inputStyle}>{value}</InputLeftAddon> */}
          <InputLeftAddon sx={inputStyle}>{labelValue}</InputLeftAddon>
          {/*<Input type="date" sx={inputStyle} value={value} onChange={handleChange} /> */}
          <Input
            type="date"
            sx={inputStyle}
            defaultValue={lastWeek.toISOString().split("T")[0]}
            onChange={(event) => {
              {
                /*handleChange;*/
              }
              if (labelValue === "Start Date") onStartValueChange(event.target.value);
              if (labelValue === "End Date") onEndValueChange(event.target.value);
            }}
          />
        </InputGroup>
      </Box>
    </>
  );
};

export default DatePicker;
