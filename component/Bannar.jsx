import React from "react";
import Image from "next/image";
import { Box, Flex, Text, Button, Fade } from "@chakra-ui/react";
import { FormTop } from "./Form/FormTop";
//import {bgImage} from '../component/images/hero.png'

const Bannar = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{ base: "110vh", sm: "60vh" }}
        backgroundImage={`url('/hero.png')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.5"
          backgroundColor="blue.900"
        />
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          justifyContent={{ base: "flex-start", sm: "space-between" }}
          maxWidth="1280px"
          position="absolute"
          color="white"
          fontWeight="light"
          left="0"
          right="0"
          bottom="0"
          top="0"
          margin="0 auto"
          padding="2rem"
        >
          <Box width={{ base: "100%", sm: "50%" }}>
            <Text
              fontSize={{ base: "4xl", sm: "5xl" }}
              lineHeight="shorter"
              marginBotton="1.5rem"
            >
              this is a splundit real state site{" "}
              <strong>just go for buy it........</strong>
            </Text>
            <Text fontSize={{ base: "lg", sm: "2xl" }}>
              a state that your can fill the form for download the pdf and so on
              can fill the form for download the pdf and so on
            </Text>
          </Box>
          <Box
            width={{ base: "100%", sm: "auto" }}
            marginTop={{ base: "1rem", sm: "0" }}
          >
            <FormTop />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
export default Bannar;
