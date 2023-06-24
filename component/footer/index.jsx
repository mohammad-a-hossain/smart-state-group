import { Box, Flex,Text,Button ,Link,SimpleGrid} from '@chakra-ui/react'
import {services, about, workWithUs,  ourOffices} from './footerConstant'


const Footer=()=>{
 return(
    <Box backgroundColor='blue.500'>
    <Box 
    maxWidth='1280px'
    margin='0 auto'
    paddingY='3rem'
    paddingX={{base:'2rem', sm:'0'}}
    >
    <SimpleGrid columns='4' color='blue.100' gap='1.7rem' minChildWidth='150px'>
    <Flex flexDirection='column'>
     <FooterHeader title='Services'/>
     {
        services.map((item) =>(
            <FooterLinks key={item.name} {...item} />
        ))
     }
    </Flex>
    <Flex flexDirection='column'>
    <FooterHeader title='About'/>
    {
        about.map((item) =>(
           <FooterLinks key={item.name} {...item} />
       ))
    }
   </Flex>
   <Flex flexDirection='column'>
   <FooterHeader title='Work With Us'/>
   {
    workWithUs.map((item) =>(
          <FooterLinks key={item.name} {...item} />
      ))
   }
  </Flex>
  <Flex flexDirection='column'>
   <FooterHeader title='Our Office'/>
   {
    ourOffices.map((item) =>(
          <FooterLinks key={item.name} {...item} />
      ))
   }
  </Flex>
    </SimpleGrid>
    </Box>
    <Box backgroundColor='blue.900'
     display='flex'
     padding='2rem'
     justifyContent='center'
     alignItems='center'
     flexDirection='column'
     color='white'
    >
   <Text marginTop='1rem'  fontSize='sm' textAlign='center'> design and develop 2023 </Text>
    </Box>
     
     </Box>
 )
}

export default Footer





const FooterLinks=({link,name})=>{
    return(
        <Text>
        <Link href={link}>{name}</Link>
        
        </Text>
    )
}
const FooterHeader=({title})=>{
    return(
        <Text as ='h4' fontWeight='light' fontSize='xl' marginBotton='1rem'>
        {title}
        
        </Text>
    )
}