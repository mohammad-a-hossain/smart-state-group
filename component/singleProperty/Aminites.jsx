import React from 'react'
import {Box,Flex,Text,Center,Divider} from '@chakra-ui/react'

export default function Aminites() {
  return (
    <Box backgroundColor='#f4f3f2' padding='1.5rem' marginBottom='1rem'>
    <Text fontSize='1.5rem' fontWeight='light' color='gray.500' marginBottom='0.5rem'>
    title of the text
    </Text>
    <Divider marginY='0.5rem' />

    <Text fontWeight='light' color='blue.400' fontSize='1rem' noOfLines='4'>

    at new SourceMapConsumer (D:\PROJECTS\smatr-state-gropu\smart-state-group\node_modules\next\dist\compiled\@next\react-dev-overlay\dist\middleware.js:1:8554)
    at findOriginalSourcePositionAndContent (D:\PROJECTS\smatr-state-gropu\smart-state-group\node_modules\next\dist\compiled\@next\react-dev-overlay\dist\middleware.js:1:59366)
    at D:\PROJECTS\smatr-state-gropu\smart-state-group\node_modules\next\dist\compiled\@next\react-dev-overlay\dist\middleware.js:1:60425
    at new SourceMapConsumer (D:\PROJECTS\smatr-state-gropu\smart-state-group\node_modules\next\dist\compiled\@next\react-dev-overlay\dist\middleware.js:1:8554)
    at findOriginalSourcePositionAndContent (D:\PROJECTS\smatr-state-gropu\smart-state-group\node_modules\next\dist\compiled\@next\react-dev-overlay\dist\middleware.js:1:59366)
    at D:\PROJECTS\smatr-state-gropu\smart-state-group\node
    </Text>

    
    
    </Box>
  )
}
