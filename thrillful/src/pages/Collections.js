import React, { useContext, useEffect } from 'react';
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'


const Collections = () => {

    //const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==';
    //onst { collectionId } = useParams();
    const { fetchAllCollections, collections, products} = useContext(ShopContext)



    useEffect(() => {
        fetchAllCollections()
        //fetchCollectionById(collectionId)
    }, //[fetchCollectionById, collectionId])
        [fetchAllCollections])


    // Object.values(collections).forEach(collection => {
    //     console.log("collection.products", collection.products)
    // });

    // collections.map((collection, index) =>
    //     console.log("collections index", collection.products[index].handle))

    if (!collections) return <div>Loading...</div>

    for(let i = 0; i <= collections.length; i++) {
            for(let j = 0; products.length; j++) {
                console.log("Collections.js: ", collections[i].value);
            }

    }

    return (
        <Box p="2rem">
            <Grid m="auto">
                {
                    collections.map((collection, index) => 
                        <Link to={collection} key={collection.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                {/* <Image source={collection.src} p="2rem" />  */}
                                {/* <Text>
                                    Title: {collection.products[index].title}
                                </Text> */}
                                <Text>
                                    {collection.products[index].title}
                                </Text>
                                {/* <Text>
                                    {collection.product[index].description}
                                </Text> */}
                            </Box>
                        </Link>

                    )

                }
            </Grid>
        </Box>
    )
}
export default Collections

