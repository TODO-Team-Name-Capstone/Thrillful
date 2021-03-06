import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Heading, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';

const Product = () => {

    const { handle } = useParams();
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)
    
    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if(!product.title) return <div>Loading...</div>
    return (
        <Box p="2rem">
           <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} m="auto">
               <Flex justifyContent="center" alignItems="center">
               <Image src = {product.images[0].src} />
               </Flex>
               <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
                   <Heading pb="2rem">{product.title}</Heading>
                   <Text fontWeight="bold" pb="2rem">${product.variants[0].price}</Text>
                   <Text pb="2rem">{product.description}</Text>
                   <Text pb="2rem">{/*product.rating*//*we need to add the ratings ourselves I think*/}</Text> 
                   <Button
                   onClick={() => addItemToCheckout(product.variants[0].id, 1 /*need code to beable to select quantity*/)}
                   _hover={{opacity: '70%'}}
                   w="10rem" backgroundColor="#ff0000" _focus="none"
                   >Add to cart</Button>
               </Flex>
           </Grid>
        </Box>
    )
}

export default Product

