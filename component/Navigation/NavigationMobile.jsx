import React from 'react'
import {
  Text,
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'

import {HiHomeModern} from 'react-icons/hi2'
import Link from 'next/link'
import { navigationbarConstant } from './navigationbar'
import {HamburgerIcon}  from '@chakra-ui/icons'

 const NavigationMobile = () => {
  return (
    <Box
    color='blue.500'
    paddingY='2rem'
    backgroundColor='white'
    display={{base:'block', md:'none'}}
    >

    <Box maxWidth='580px'  margin='0 auto'>
    <Flex alignItems='center' justifyContent='space-between'>
    <Link href='/'>
      <Box display='flex' gap='2' alingnItems='center'> 
      <HiHomeModern size='30' />
     <Text fontSize='2xl' fontWeight='black'>
     Smart State
     </Text>
     </Box> 
     </Link>
     <Menu>

     <MenuButton 
     as={IconButton}
     aria-label='Options'
     icon={<HamburgerIcon />}
     variant='outline'>
   
     </MenuButton>
     <MenuList>
      {
      navigationbarConstant.map((nav) =>(
        <NavigationLinks key={nav.title} {...nav} />
      ))
     }

     </MenuList>
     </Menu>
    

    {/*  <Button padding='1.5rem' colorScheme='twitter'  fontSize='2xl' fontWeight='medium'>
     create listing
     </Button> */}
    </Flex>
    
    </Box>
    

    </Box>
  )
}

export default NavigationMobile

 const NavigationLinks=({title, link})=>{
   return(
    <Link href={link}>
    <MenuItem alignItems='center'  gap='.5rem'>
    {title}
    </MenuItem>
    
    </Link>
   )
}




