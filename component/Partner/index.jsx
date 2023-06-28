'use client'
import React,{useState} from 'react'
import { Box,Text,Image ,SimpleGrid} from '@chakra-ui/react'
import { partners} from '@/features/mockData/partner'

export const Partner=()=>{
   // const [partners] = useState([...partner])
    //console.log(partners)
  return (
    
    <SimpleGrid 
    columns={partners.length}
    margin="0 auto"
    >
  
   {partners.map((partner) =>(
    <Image 
    key={partner}
    src={partner.image}
 
    alignSelf='center'
    padding={{base:'2rem', sm:'3rem'}}
    />
   )) 
}
    

    </SimpleGrid>
  )
}
