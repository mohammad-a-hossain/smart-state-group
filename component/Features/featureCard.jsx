
'use client'

import { Box,Badge ,Text, HStack,Flex} from '@chakra-ui/react'
import{ usePropertiesHook} from '../../hooks/usePropertiesHook'
import { IoBodyOutline,IoHappySharp,IoPartlySunnyOutline} from "react-icons/io5";
import Link from 'next/link'

const FeatureCard=(property)=>{
  const{
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalId
  } = usePropertiesHook(property)
  // console.log('card',property)
    return(
        <Box marginBottom='4rem' backgroundColor='lightBlue'>
        <Link href={`/property/externalId`}>
      
        <Box
        backgroundImage={`url('${coverPhoto}')`}
         height='250px'
        backgroundPosition='center'
        backgroundSize='cover'
        position='relative'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        >
        <Box margin='1rem'>
        <Badge colorScheme='green'>
         {purpose}
        </Badge>
        </Box>

        <Box height='40%'>
        <Text fontSize='3xl' fontWeight='medium' color='blue'>
        {price}
        </Text>
        </Box>
        </Box>



        <Box padding='1rem'>
        <Text fontSize='xl' fontWeight='medium' marginBottom='1rem'>{propertyType}</Text>
        <Text fontWeight='medium' fontSize='sm' isTruncated>{title}</Text>
        
        <Text fontWeight='medium' fontSize='sm' isTruncated>{address}</Text>
        <HStack spacing='1.3rem' marginTop='1rem'>
        <Flex alignItems='center' gap='0.3rem'>
           <IoBodyOutline />
        {rooms}
        </Flex>
        <Flex alignItems='center' gap='0.3rem'>
        <IoHappySharp/>
        {baths}
        </Flex>
        <Flex alignItems='center' gap='0.3rem'>
        <IoPartlySunnyOutline/>
        {sqSize}
        </Flex>
        </HStack>
        </Box>
        </Link>
    
        </Box>
    )
}
export default FeatureCard