import React, { useContext, useEffect } from 'react';
import { Box, Grid, Image, Text, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'


const Collections = () => {
    
    const { fetchAllCollections, collections } = useContext(ShopContext)


    useEffect(() => {
        fetchAllCollections();

        return () => { };
    }, [fetchAllCollections]);

    if (!collections) return <div>There are no collections</div>;

    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                {
                    collections.map(collection => (
                        <Link to={`/${collection.id}`} key={collection.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                <Image src={collection.image.src} p="2rem" h="25rem" w="25rem" m="2.5rem" /> 
                               <Center>
                               <Text>
                                    {collection.title}
                                </Text>
                               </Center>
                            </Box>
                        </Link>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Collections

