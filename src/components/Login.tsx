import { Box, Button, Center, Image, Input, InputGroup, InputLeftAddon, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { boxStyle, inputStyle } from "../styles/styles";
import logo from "../assets/ITL Logo.webp";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CanceledError } from "../web-services/api-client";
import UsersServices, { User, LoginStatus } from "../web-services/users";
import { useNavigate } from "react-router-dom";

//INTERFACES, SCHEMAS

interface Props {
  onLogin: (user: string) => void;
}

const schema = z.object({
  email: z.string().min(1, { message: "Please enter an email" }),
  password: z.string().min(1, { message: "Please enter your password" }),
});
type FormData = z.infer<typeof schema>;

//COMPONENT FUNCTION
const Login = ({ onLogin }: Props) => {
  //SHOW BUTTON FUNCTIONALITY
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //FORM VALIDATION
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //ROUTING
  const navigate = useNavigate();

  //FORM SUBMIT
  const [requestError, setRequestError] = useState("");
  const onSubmit = (data: FieldValues) => {
    setRequestError("");
    if (isValid) {
      const user = {
        vcUSER: data.email,
        vcPASSWORD: data.password,
      };

      //GET USER
      const { request, cancel } = UsersServices.postSelect<User, LoginStatus>(user);
      request
        .then((response) => {
          navigate("/dashboard");
          onLogin(data.email);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          if ((err.response.status = 404)) {
            setRequestError("Invalid email or password");
            return;
          }
          setRequestError(err.message);
        });
    }
  };

  return (
    <Center bgGradient="linear(to-r, gray.600, black)" h="100vh" padding="10px">
      <Stack spacing={5}>
        <Center>
          <Image src={logo} boxSize="40px" objectFit="contain" marginRight={3} />
          <Text as="b" fontSize="25px">
            ITL
          </Text>
        </Center>

        <Box width={{ base: "100%", sm: "100%", md: "400px", lg: "400px", xl: "400px" }} sx={boxStyle} padding="10px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5}>
              <Text as="b" fontSize="25px" color="yellow">
                Sign in
              </Text>

              <InputGroup>
                <InputLeftAddon sx={inputStyle}>Enter email</InputLeftAddon>
                <Input {...register("email")} type="email" textOverflow="ellipsis" sx={inputStyle} autoComplete="true" />
              </InputGroup>
              {errors.email && <Text color="yellow">{errors.email.message}</Text>}

              <InputGroup>
                <InputLeftAddon sx={inputStyle}>Password</InputLeftAddon>
                <Input
                  {...register("password")}
                  paddingRight="66px"
                  type={show ? "text" : "password"}
                  sx={inputStyle}
                  autoComplete="true"
                />
                <InputRightElement width="60px">
                  <Button height="28px" onClick={handleClick} margin="1px" fontSize="16px" marginRight="6px">
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && <Text color="yellow">{errors.password.message}</Text>}
              {requestError && <Text color="yellow">{requestError}</Text>}
              <Button type="submit" fontSize="16px">
                Continue
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Center>
  );
};

export default Login;
