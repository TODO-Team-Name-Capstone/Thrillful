import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'



const Dresses = () => {

    const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==';
    //const { collectionId } = useParams();
    const { fetchCollectionById, collection } = useContext(ShopContext)


    useEffect(() => {
        fetchCollectionById(collectionId);

        return () => { };
    }, [fetchCollectionById, collectionId]);



    var products = collection.products;
    console.log("collection.PRODUCTS", products);

    if (!collection) return <div>There are no collections.</div>;
    return (

        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                {
                   products.map(product => (
                        <Link to={`product/${product.handle}`} key={product.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                <Image src={product.images[0].src} p="2rem" h="25rem" w="25rem" m="2.5rem" /> 
                               <Center>
                               <Text>
                                    {product.title}
                                </Text>
                               </Center>
                               <Center>
                               <Text>
                                    ${product.variants[0].price}
                                </Text>
                               </Center>
                            </Box>
                        </Link>
                    ))
                }
            </Grid>
        </Box >
    )
};
export default Dresses