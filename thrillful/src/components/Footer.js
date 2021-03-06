import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack, HStack, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box backgroundColor="#000000" color="#ffffff">
         <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
            <VStack flexDirection="row" justifyContent="center"/*needs adjusting*/  p="2rem">
                 <Image /*src="../logo.jpg" h="2.5rem" w="2.5rem"*/ /*if removed leave vstack for spacing*/ />
            </VStack>
            <VStack>
            <HStack p="1rem">
            <Text mr="2rem" textAlign="center">&#169; Thrillful</Text>
            <Link to='/contact'>Contact Us</Link>
            </HStack>
             <HStack flexDirection="row" justifyContent="space-between" pr="1rem">
                 <Link>Social</Link> 
                 <Link>Social</Link>
                 <Link>Social</Link>
             </HStack>
            </VStack>

         </Grid>
        </Box>
    )
}

export default Footer
