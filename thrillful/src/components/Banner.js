import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react'

const Banner = () => {
    return (
        <Box backgroundColor=""/*background color for testing without pic~delete/ also change banner height and width here*/ w="100%" position="relative" h="30vh" /*color is just to display area until admin banner page is done*/>
            <Image src="" /*banner image link here can use js literal*/
                h="100%" m="auto" objectFit="contain"
                objectPosition="top, center"
            />
            <Text
                position="absolute"
                bottom="20%"
                w="100%"
                textAlign="center"
                color="black"
                fontWeight="bold"
                fontSize="4rem"
            >
                Discount Banner edit/remove text here ~ color and or image above
            </Text>
            <Link to="/products">
                <Center>
                <Button
                    w="10rem" backgroundColor="#ff0000" color="#000000" _hover={{ opacity: "60%" }} position="absolute" 
                    bottom="0.5%" borderStyle="none"  _visited="none" _focus="none"              >
                    Shop Now
                </Button>
                </Center>
            </Link>
        </Box>
    )
}

export default Banner
