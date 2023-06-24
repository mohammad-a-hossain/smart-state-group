
import React from "react"
import Image from "next/image"
import { Box, Flex,Text,Button } from '@chakra-ui/react'
//import {bgImage} from '../component/images/hero.png'


 const Bannar=()=>{
    return(
        <Box position='relative'
            minHeight={{base:'110vh', sm:'60vh'}}
            backgroundImage= {`url('/hero.png')`}
            backgroundPosition='center' 
            backgroundSize='cover' 
            backgroundAttachment='fixed'
            
        > 
      <Box position='absolute' width='100%' height='100%' opacity='0.5' backgroundColor='blue.900' />
        </Box> 
    )
}
export default Bannar
