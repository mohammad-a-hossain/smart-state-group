'use client'


import {Box,SimpleGrid} from '@chakra-ui/react'
//import  {DefaultLayout} from '@/features/mockData/propertyList'
import {DefaultLayout} from '../defaultLayout'
import FeatureCard from '@/component/Features/featureCard'
import {propertyLIst} from '@/features/mockData/propertyList'



export default function page(){

  return(
      <DefaultLayout>

      <Box backgroundColor="f4f5f3" padding='1rem'>
      <Box  maxWidth='1280px' margin='0 auto' >
      <SimpleGrid
      columns={{base:'1', sm:'4'}} 
      gap={{base:'1', sm:'2rem'}}>
    
      {
      propertyLIst.map((property) => (
        <FeatureCard key={property.id} {...property} />
      ))
    } 
    </SimpleGrid>
      </Box>
      </Box>

    </DefaultLayout>
  )


}

