import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box backgroundColor="#000000" color="#ffffff">
         <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
            <VStack flexDirection="row" justifyContent="left"  p="2rem">
                 <Image src="../logo.jpg" h="2.5rem" w="2.5rem" />
            </VStack>
            <VStack p="2rem">
            <Text textAlign="center">&#169; Thrillful</Text>
            </VStack>
             <VStack flexDirection="row" justifyContent="space-between" pr="1rem">
                 <Link>Social</Link> 
                 <Link>Social</Link>
                 <Link>Social</Link>
             </VStack>
         </Grid>
        </Box>
    )
}

export default Footer
