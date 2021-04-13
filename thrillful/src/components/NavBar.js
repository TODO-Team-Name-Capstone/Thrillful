import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Flex, Text, Icon, Image, Box, Badge } from '@chakra-ui/react'
import { MdMenu, MdShoppingCart } from 'react-icons/md'

const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)


    return (
        <Flex backgroundColor="#000000" flexDirection="row" alignItems="center" justifyContent="space-between" /*navbar element spacing*/ padding="2rem">
            <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30}
                onClick={() => openMenu()}
            ></Icon>
            <Link to="/">
                <Text color="white" align>Thrillful</Text>
            </Link>
            <Box>
                <Icon fill="white" cursor="pointer" as={MdShoppingCart} w={30} h={30}
                    onClick={() => openCart()}
                />
                <Badge backgroundColor="#ff0000" borderRadius="50%">
                    {checkout.lineItems?.length}
                </Badge>
            </Box>

        </Flex>
    )
}

export default NavBar
