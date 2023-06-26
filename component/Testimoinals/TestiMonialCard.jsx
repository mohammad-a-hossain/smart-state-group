import {Box,Text,Image,Flex} from '@chakra-ui/react'

const TestiMonialCard = ({company,image,name,testimonial})=>{
    return(
        <Box 
        backgroundColor='#f1f1f1'
        padding='3rem'
        display='flex'
        flexDirection='column'
        marginBotton={{base:'1rem', sm:'0'}}
        
        >
         <Box>
         icon
         </Box>
         <Text fontSize='lg' color='blue.500' marginY='1.5rem' >
         {testimonial} 
         </Text>
         <Flex gap='1rem' alignItems='center'>
         <Image
         src={image} 
         width='5rem' 
         height='5rem'
         objectFit='cover'
         borderRadius='full'
         />
       </Flex>
        
        </Box>
      
    )
}

export default TestiMonialCard