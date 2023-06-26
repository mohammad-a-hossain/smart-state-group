import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import { testimonials} from '@/features/mockData/testimonials'
import  TestiMonialCard  from './TestimonialCard'

export const Testimonials = () => {
    console.log(testimonials)
  return (
    <Box
    backgroundColor='blue.200'
    


    > 
    <Box maxWidth='1280px' margin='0 auto' paddingY={{base:'3rem', sm:'6rem'}}>
    <Text fontSize='4xl' fontWeight='bold' textAlign='center'> Testimonials </Text>
    <Text fontSize='1rem' fontWeight='light' textAlign='center'> Lorem ipsum dolor sit amet, consectetur a fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate</Text>
    
    {
        testimonials.map((testi) =>(
            <TestiMonialCard key={testi.name} {...testi} />
        ))

    }
    
    </Box>
   </Box>
  )
}
