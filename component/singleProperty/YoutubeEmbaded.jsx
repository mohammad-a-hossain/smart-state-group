import React from 'react'
import {Box,Text} from '@chakra-ui/react'

export default function YoutubeEmbaded() {
    const ratio= (315 / 560) * 100
  return (
    <Box
     paddingTop={`${ratio}%`}
      position='relative'
      height='0' 
      overflow='hidden' 
      frameBorder='0'>
  
     <Text>apartment vedio</Text>
    <iframe
    style={{position:'absolute', top:'0', bottom:'0'}}
    width='100%'
     height='100%'
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
  />
 
    </Box>
  )
}
