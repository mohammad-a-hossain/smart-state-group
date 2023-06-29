 "use client"

import { DefaultLayout } from '../defaultLayout'
import {FormTop } from '@/component/Form/FormTop'
import {Box,Grid,GridItem,Text} from '@chakra-ui/react'
import { useForm } from "react-hook-form";


 

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,Button,TextArea,Checkbox
  } from '@chakra-ui/react'






export default function page(){

      const { register, handleSubmit } = useForm();
const onSubmit = data => console.log(data);


    return(
        <DefaultLayout>
        <Box backgroundColor='#f3f2f1' padding='3rem'>
          <Grid templateColumns='repeat(6,1fr)' gap='5' maxWidth='1280px' margin='0 auto'>

            <GridItem colSpan={{base:6, sm:4}}>
             

            <FormTop/>
            </GridItem>
            


            <GridItem colSpan={{base:6, sm:2}}>
             <Text>contact us</Text>
             <Text>Mr abu hossian
             <br/>
             houser no 28 modhushohaid new medical road Sylhet
             </Text>

            </GridItem>

          </Grid>
        </Box>
        </DefaultLayout>
    )
}
