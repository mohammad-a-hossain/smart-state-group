import React from 'react'
import {Box, Text,SimpleGrid} from '@chakra-ui/react'
import { testimonials} from '@/features/mockData/testimonials'
import  TestiMonialCard  from './TestimonialCard'

export const Testimonials = () => {
   // console.log(testimonials)
  return (
    <Box
    backgroundColor='blue.200'> 
    <Box
     maxWidth='1280px'
      margin='0 auto'
     paddingY={{base:'3rem', sm:'6rem'}}>

    <Text 
    fontSize={{base:'4xl',sm:'5xl'}}
     fontWeight='bold'
     lineHeight='shorter'
     paddingX='2rem'
      textAlign='center'>
       Testimonials
        </Text>

    <Text
     fontSize='2rem' 
     marginTop='1rem'
     marginBotton='3rem'
     fontWeight='light' 
     paddingX='2rem'
     textAlign='center'> 
     Lorem ipsum dolor sit amet, consectetur a fermentum,
      ultrices ligula sed, tincidunt est. Nullam vulputate
      </Text>
    <SimpleGrid 
    columns='3'
    minChildWidth='300px'
    gap={{base:'0.5rem', sm:'2.5rem'}}
    > {
        testimonials.map((testi) =>(
            <TestiMonialCard key={testi.name} {...testi} />
        ))

    }
    
    </SimpleGrid>
   
    
    </Box>
   </Box>
  )
}
