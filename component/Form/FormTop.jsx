import {
  Box,
  FormControl,
  Input,
  Text,
  Checkbox,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export const FormTop = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Box width="100%" padding="2rem" backgroundColor="white" color="gray.700">
      <Text fontSize="xl" fontWeight="bold">
        free pdf guide
      </Text>
      <Text fontSize="lg">fill the form for download the pdf and so on</Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            marginTop="1.3rem"
            id="name"
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <Text fontSize="xs" color="red">
              {errors.name.type}{" "}
            </Text>
          )}

          <Input
            marginTop="1.3rem"
            id="email"
            type="email"
            placeholder="your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <Text fontSize="xs" color="red">
              {errors.email.type}{" "}
            </Text>
          )}

          <Flex
            gap={{ base: "0", sm: "1rem" }}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Input
              marginTop="1.3rem"
              id="phone"
              type="number"
              placeholder="phoe number"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <Text fontSize="xs" color="red">
                {errors.phone.type}{" "}
              </Text>
            )}
          </Flex>

          <Checkbox
            marginTop="1.3rem"
            id=""
            type="checkbox"
            placeholder="GDPR"
            {...register("gdpr", { required: true })}
          >
            i agree to send data
          </Checkbox>
          {errors.gdpr && (
            <Text fontSize="xs" color="red">
              {errors.gdpr.type}{" "}
            </Text>
          )}
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          width="100%"
          fontSize="xl"
          padding="2rem"
          marginTop="2rem"
        >
          Download now{" "}
        </Button>
      </form>
    </Box>
  );
};
