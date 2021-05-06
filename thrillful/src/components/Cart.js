import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { ShopContext } from '../context/shopContext'
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
    Link,
    Box
} from "@chakra-ui/react"



const Cart = () => {
    const { isCartOpen, isMenuOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)

    // continue shopping 
    const history = useHistory();
    const continueShoppingRoute = () => {
        let path = `/all-products`;
        history.push(path);
    }

    return (
        < >
            <Drawer
                isOpen={isCartOpen}
                isMenuOpen={isMenuOpen}
                placement="right"
                onClose={closeCart}
                size="sm"
            >
                <DrawerOverlay>
                    <DrawerContent>
                   
                        {/* <DrawerCloseButton /> */}
                        <DrawerHeader>Your Shopping Cart</DrawerHeader>

                        <DrawerBody>
                            {
                                checkout.lineItems?.length ? checkout.lineItems.map(item => (
                                    <Grid templateColumns="repeat(5, 1fr)" gap={1} key={item.id} marginBottom="5">
                                        <Flex alignContent="center" justifyContent="center">
                                            <Link style={{ color: "red", fontSize: "13px" }} cursor="pointer" onClick={() => removeLineItem(item.id)}>
                                                remove
                                            </Link>
                                        </Flex>
                                        <Flex alignContent="center" justifyContent="center">
                                            <Image src={item.variant.image.src} />
                                        </Flex>
                                        <Flex alignContent="center" justifyContent="center">
                                            <Text style={{ fontWeight: "bold" }}>
                                                {item.title}
                                            </Text>
                                        </Flex>
                                        <Flex alignContent="center" justifyContent="center">
                                            <Text>
                                                ${item.variant.price}
                                            </Text>
                                        </Flex>
                                        <Flex alignContect="center" justifyContent="center">
                                            <Link style={{ fontSize: "13px" }}>
                                                qty: {item.quantity}
                                            </Link>
                                        </Flex>
                                    </Grid>
                                )) :
                                    <Box h="100%" w="100%">
                                        <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                                            Your cart is empty
                                    </Text>
                                    </Box>
                            }
                        </DrawerBody>

                        <DrawerFooter>
                            <Button w="100%" onClick={()=> {continueShoppingRoute(); closeCart();}}>
                                Continue Shopping
                            </Button>
                        </DrawerFooter>

                        {checkout.lineItems?.length ?
                            <DrawerFooter>
                                <Button w="100%">
                                    <Link href={checkout.webUrl}>
                                        Checkout
                                    </Link>
                                </Button>
                            </DrawerFooter> : null
                        }

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>
    )
}

export default Cart
