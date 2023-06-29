'use client'

import React from 'react'
import { Box,Badge,Text,GridItem, HStack,Flex,Grid } from '@chakra-ui/react'

import { DefaultLayout } from '@/app/defaultLayout'
//import { usePropertiesHook } from '@/hooks/usePropertiesHook'
import { property} from '@/features/mockData/property'
import { usePropertiesHook } from '@/hooks/usePropertiesHook'
import Thumbnail from '@/component/singleProperty/Thumbnail'
import PropertyState from '@/component/singleProperty/PropertyState'
import Descriptoin from '@/component/singleProperty/Descriptoin'
import Aminites from '@/component/singleProperty/Aminites'
import YoutubeEmbaded from '@/component/singleProperty/YoutubeEmbaded'


export default function page() {

  const{
    address,
    coverPhoto,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalId
  } = usePropertiesHook(property)

  return (
    <DefaultLayout>
    <Box  backgroundColor='#f2f4f2' paddingY='3rem'>
    <Grid templateColumns='repeat(6,1fr)' gap='5'  maxWidth='1280px' margin='0 auto'>

      <GridItem colSpan='6'>
        <Text  fontSize='3xl' fontWeight='medium' color='blue.800' textAlign={{base:'center', sm:'left'}}>

         {title}this is a title for a house 

        </Text>
    
         <Flex fontSize='xl' color='blue.600'  textAlign='center'  alignItems='center' flexDirection={{base:'column',sm:'row'}} gap='0.5rem' marginY={{base:'1rem', sm:'0'}}>
            location at egytpt

             <Text fontWeight='light'>{address}Attempted import error: 'partners'.'length' is not exported from '@/features/mockData/partner' Id={externalId} 3622332323</Text>

            <Badge>
            {purpose}-for satel
            </Badge>

         </Flex>
     </GridItem>
     <GridItem colSpan={{base:6,sm:3}}>
     <Thumbnail />
     </GridItem>

     <GridItem colSpan={{base:6,sm:3}}>
     <PropertyState/>
     <Descriptoin/>
     <Aminites/>
     </GridItem>
    

     <GridItem colSpan={{base:6,sm:3}}>
     <Text>appartment video</Text>
     <YoutubeEmbaded/>
     </GridItem>


     <GridItem colSpan={{base:6,sm:3}}>
     <Text>appartment video</Text>
     <YoutubeEmbaded/>
     </GridItem>
    </Grid>
    
    </Box>
    
    </DefaultLayout>
  )
}

