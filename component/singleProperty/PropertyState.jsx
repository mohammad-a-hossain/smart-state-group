import React from 'react'
import {Box,Flex,Text,Center,Divider} from '@chakra-ui/react'

export default function PropertyState() {
  return (
    <Box backgroundColor='white' padding='1.5rem' marginBotton='1rem'>
        <Flex
         flexDirection={{base:'column', sm:'row'}} 
         gap='1rem'
         justifyContent='space-around' 
        alignItems='center'
         fontSize='xl'
        color='gray.500' 
        fontWeight='light'>
        

         <Flex flexDirection='column' gap='0.3rem' justifyContent='center' alignItems='center'>
         <Text>TBES</Text>

         <Flex alignItems='center' gap='0.5rem'>
           <h5>rooms </h5>  
         </Flex>

         </Flex>
         <Center height='50px'>
         <Divider marginY='1rem' />
         
         </Center>

         <Flex flexDirection='column' gap='0.3rem' justifyContent='center' alignItems='center'>
         <Text>bathes</Text>

         <Flex alignItems='center' gap='0.5rem'>
           <h5>rooms </h5>  
         </Flex>

         </Flex>

         <Center height='50px'>
         <Divider marginY='1rem' />
         
         </Center>

         <Flex flexDirection='column' gap='0.3rem' justifyContent='center' alignItems='center'>
         <Text>kitechen</Text>

         <Flex alignItems='center' gap='0.5rem'>
           <h5>rooms </h5>  
         </Flex>

         </Flex>

         <Center height='50px'>
         <Divider marginY='1rem' />
         
         </Center>

         <Flex flexDirection='column' gap='0.3rem' justifyContent='center' alignItems='center'>
         <Text>kitechen</Text>

         <Flex alignItems='center' gap='0.5rem'>
           <h5>rooms </h5>  
         </Flex>

         


        </Flex>
        
        </Flex>
    </Box>
  )
}
