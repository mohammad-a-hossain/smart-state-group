import { Box,Badge ,Text,Flex,Image} from '@chakra-ui/react'


const TeamCard =({image, name, title,description}) =>{
    return(
        <Box 
        flexDirection='column'
        maxWidth='1280px'
        backgroundColor='#f1f3f5'
        padding='2rem'
        display='flex'
        justifyContent='center'
        alignIems='center'
        marginBottom={{base:'1rem',sm:'0'}}
        >
        
        <Image  
        src={image}
        width='10rem'
        height='10rem'
        objectFit='cover'
        borderRadius='full'
        marginBottom='2rem'
        shadow='md'
         />
         <Text fontSize='xl' fontWeight='bold'>{name}</Text>
         <Text fontSize='lg' fontWeight='bold'>{title}</Text>
         <Text fontSize='md' fontWeight='light' color='blue.600' 
         marginTop='1rem' textAlign='center'
         noOflines='4'>{description}</Text>
        
        </Box>
    )
}
export default TeamCard