import { Box,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import { agents} from '@/features/mockData/agents'
import TeamCard from './TeamCard'

export const Team = () => {
    console.log(agents)
  return (
    <Box
    backgroundColor='gray'
    margin='0 auto'
    maxWidth='1280px'
    paddingY={{base:'3rem', sm:'5rem'}}
    
    >
  <Text
  fontSize={{base:'3rem', sm:'5rem'}}
  color='white'
   textAlign='center'
    fontWeight='medium'
     paddinX='2rem' >
  Team of Agents
  </Text>  
  <Text
  fontSize='2xl'
   textAlign='center'
    fontWeight='light'
     paddinX='2rem' >
  Team of Agents for logng time servece 
  </Text>  

  <Flex 
  justifyContent='space-between'
  gap='1rem'
  direction={{base:'column', sm:'row'}}
  >
{agents.map((agent)=>(
    <TeamCard key={agent.name} {...agent} />
))}
  </Flex>

    </Box>
  )
}
