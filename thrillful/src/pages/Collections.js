import React, { useContext, useEffect } from 'react';
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'


const Collections = () => {

    //const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==';
    //onst { collectionId } = useParams();
    const { fetchAllCollections, collections } = useContext(ShopContext)


    useEffect(() => {
        fetchAllCollections();

        return () => { };
    }, [fetchAllCollections]);

    if (!collections) return <div>There's no collections</div>;

    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                {
                    collections.map(collection => (
                        <Link to={`/${collection.title}`} key={collection.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                <Image src={collection.image.src} p="2rem" /> 
                                <Text>
                                    {collection.title}
                                </Text>
                                <Text>

                                </Text>

                            </Box>
                        </Link>
                    ))

                }
            </Grid>
        </Box>
    );
};
export default Collections

