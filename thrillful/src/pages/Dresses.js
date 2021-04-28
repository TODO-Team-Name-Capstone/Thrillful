import React, { useContext, useEffect } from 'react';
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom'


const Dresses = () => {

    const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==';
    const { collectionId } = useParams();
    const { fetchCollectionById, collection } = useContext(ShopContext)


    useEffect(() => {
        fetchCollectionById();

        return () => { };
    }, [fetchCollectionById]);

    if (!collection) return <div>There are no collections.</div>;

    return (
<div>
    DRESSES
</div>

    )
};
export default Dresses
