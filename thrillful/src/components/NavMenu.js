import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text,
    Flex,
    Image,
    Box,
    VStack
} from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext'

const NavMenu = () => {

    const { isMenuOpen, closeMenu} = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign="center">Catagories</DrawerHeader>
                    <DrawerBody backgroundColor="#000000" color="#ff0000" flexDirection="row" alignItems="center" justifyContent="space-between" >
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="/products">All Products</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="">Dresses</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="">Joggers</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="">Rompers</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="">Accessories</Link>
                        </VStack>
                        <VStack _hover={{ color: "#ffffff" }} p="2rem">
                            <Link to="">Beauty</Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Text textAlign="center">Footer</Text>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
            
        </Drawer>
    )
}

export default NavMenu
