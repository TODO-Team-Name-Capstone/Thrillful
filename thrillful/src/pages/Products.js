import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Text, Image } from '@chakra-ui/react'


const Products = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>
    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} m="auto">
                {
                    products.map(product => (
                        <Link to={`product/${product.handle}`} key={product.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign='center'/*move text here*/>
                                <Image src={product.images[0].src} p="2rem" /> 
                                <Text>
                                    {product.title}
                                </Text>
                                <Text>
                                    ${product.variants[0].price}
                                </Text>
                            </Box>
                        </Link>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Products
