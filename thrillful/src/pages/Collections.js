import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'


const Collections = () => {

    //const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==';
    //onst { collectionId } = useParams();
    const { fetchAllCollections, collections, products } = useContext(ShopContext)

     

    useEffect(() => {
        fetchAllCollections()
        //fetchCollectionById(collectionId)
    }, //[fetchCollectionById, collectionId])
        [fetchAllCollections])


    console.log("collections.js", collections[1].products);

    if (!collections) return <div>Loading...</div>
    return (

        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                {
                    collections.map(collection => (
                        <Link to={`collections/${collection.id}`} key={collection.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                {/* <Image source={collection.src} p="2rem" />  */}
                                <Text>
                                   Title: {collection.title}
                                </Text>
                                <Text>                                    
                                    {collection.handle}
                                </Text>
                                <Text>                                    
                                    {collection.description}
                                </Text>

                            </Box>
                        </Link>

                    ))

                }
            </Grid>

        </Box>

    )
}
export default Collections
