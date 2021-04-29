import React, { Component } from 'react';
import Client from 'shopify-buy';/*check import*/


const ShopContext = React.createContext();
/*Builds the client gets api from .env file */
const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
  	domain: process.env.REACT_APP_SHOPIFY_DOMAIN
  });


class ShopProvider extends Component {

    state = {
        product: {},
        products: [],
        checkout: {},
        collections: [],
        collection: [],
        /*for cart slide out functionality*/
        isCartOpen: false,
        isMenuOpen: false
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create()
        localStorage.setItem("checkout-id", checkout.id)
        this.setState({ checkout: checkout })
    }

    componentDidMount() {
        if (localStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout()
        }
    }

    fetchCheckout = (checkoutId) => {
        client.checkout
            .fetch(checkoutId)
            .then((checkout) => {
                this.setState({ checkout: checkout })
            })
    }

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            }
        ]
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout })

        this.openCart()
    }

    removeLineItem = async (lineItemIdsToRemove) => {
        const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove)
        this.setState({ checkout: checkout })
    }

    fetchAllProducts = async () => {

        const products = await client.product.fetchAll()
        //updates the state//
        this.setState({ products: products })
    }

    //using handle so product name is in browser link not a number
    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle)
        //updates the state//
        this.setState({ product: product })
    }

    // currently being used in Collections. Does not fetch collections with their products.
    fetchAllCollections = async () => {
        const collections = await client.collection.fetchAll();
        this.setState({ collections: collections });
        //console.log("COLLECTIONS ALL", collections);
    };

    fetchCollectionById = async (collectionId) => {
        const collection = await client.collection.fetchWithProducts(collectionId);
        this.setState({collection: collection.products});
        console.log("collection.products", collection.products);

    }
    // fetchCollectionById = async (collectionId) => {
    //     client.collection.fetchWithProducts(collectionId, { productsFirst: 10 }).then((collection) => {
    //         this.setState({ collections: collection })
    //     });
    // }

      // *****TESTS for getting collections with their products *****
    // fetchAllCollections = async () => {
    //     const collection = await client.collection.fetchAllWithProducts()
    //     //updates the state//
    //     this.setState({ collections: collection })
    // }

    // fetch all collections, including their products
    // fetchAllCollections = async () => {
    //     client.collection.fetchAllWithProducts().then((collections) => {
    //         this.setState({ collections: collections })
    //         console.log("COLLECTIONS ALL", collections);
    //         console.log("COLLECTIONS 1 PRODUCTS", collections[1].products[1].handle);
    //     });
    // }

        // fetchAllCollections = async () => {
    //     const collection = await client.collection.fetchAllWithProducts()
    //     //updates the state//
    //     this.setState({ collections: collection })
    // }


    closeCart = async () => { this.setState({ isCartOpen: false }) }

    openCart = async () => { this.setState({ isCartOpen: true }) }

    closeMenu = async () => { this.setState({ isMenuOpen: false }) }

    openMenu = async () => { this.setState({ isMenuOpen: true }) }

    render() {

        // *** TESTS ******
        // //All collections
        // const test = client.collection.fetchAllWithProducts()
        // console.log("fetch all with prods collection", test)

        // //collection by id 
        const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTc2MzM1Njg0MA==';
        const collectionTest = client.collection.fetchWithProducts(collectionId)
        console.log("collection by id", collectionTest)

        // //all products
        // const productTest = client.product.fetchAll()
        // console.log("product: ", productTest)

        return (
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithHandle: this.fetchProductWithHandle,
                addItemToCheckout: this.addItemToCheckout,
                removeLineItem: this.removeLineItem,
                fetchAllCollections: this.fetchAllCollections,
                fetchCollectionById: this.fetchCollectionById,
                closeCart: this.closeCart,
                openCart: this.openCart,
                closeMenu: this.closeMenu,
                openMenu: this.openMenu

            }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }
export default ShopProvider