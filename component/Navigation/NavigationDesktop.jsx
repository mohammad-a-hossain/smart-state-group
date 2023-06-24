import React from 'react'
import { Box, Flex,Text,Button } from '@chakra-ui/react'
import {HiHomeModern} from 'react-icons/hi2'
import Link from 'next/link'
import { navigationbarConstant } from './navigationbar'


 const NavigationDesktop = () => {
  return (
    <Box
    color='blue.500'
    paddingY='2rem'
    backgroundColor='white'
    display={{base:'none', md:'block'}}
    >

    <Box maxWidth='1280px' margin='0 auto'>
    <Flex alignItems='center' justifyContent='space-between'>
    <Link href='/'>
      <Box display='flex' gap='2' alingnItems='center'> 
      <HiHomeModern size='30' />
     <Text fontSize='2xl' fontWeight='black'>
     Smart State
     </Text>
     </Box> 
     </Link>
     
     <Flex gap='12' alignItems='center' fontWeight='medium'>
      {
      navigationbarConstant.map((nav) =>(
        <NavigationLinks key={nav.title} {...nav} />
      ))
     }
     <Button padding='1.5rem' colorScheme='twitter'  fontSize='2xl' fontWeight='medium'>
     create listing
     </Button>
     </Flex>
    
    </Flex>
    
    </Box>
    

    </Box>
  )
}

export default NavigationDesktop

 const NavigationLinks=({title, link})=>{
   return(
    <Link href={link}>
    <Flex alignItems='center'  gap='.5rem'>
    {title}
    </Flex>
    
    </Link>
   )
}