'use client'

import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { PropertySlider } from './PropertySlider'


//console.log(data)
  const data =[
    {'name':'abu'},{'name':'kbu'},{'name':'lbu'},{'name':'sbu'},{'name':'fbu'},{'name':'jbu'},

]
export const FeatureProperties = () => {

console.log('indata',{data})

  return (
    <Box
    maxWidth='1280px'
    margin='0 auto'
    paddingY={{base:'3rem', sm:'6rem'}}
    color='gray.600'
    >
    <Text 
    fontSize={{base:'4xl', sm:'5xl'}}
    lineHeight='shorter'
    fontWeight='light'
    paddingX='2rem'
    textAlign='center'
    >
     featureProperties
    </Text>
    <Text 
    fontSize='2xl'
    fontWeight='light'
    paddingX='2rem'
    textAlign='center'
    >
    Refresh had to perform a full reload. Read mor
    </Text>

    <PropertySlider data={data}/>
  
    </Box>
  )
}

