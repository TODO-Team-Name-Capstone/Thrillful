import React from 'react'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react'

const Banner = () => {
    return (
        <Box backgroundColor="pink"/*background color for testing without pic~delete/ also change banner height and width here*/ w="100%" position="relative" h="30vh"> 
            <Image src="" /*banner image link here can use js literal*/
            h="100%" m="auto" objectFit="contain"
            objectPosition="top, center"
            />
        </Box>
    )
}

export default Banner
