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
        collectionName:"",
        lineItems: [],
        quantity: 0,
        /*for cart slide out functionality*/
        isCartOpen: false,
        isMenuOpen: false
    }

    // Checkout
    createCheckout = async () => {
        const checkout = await client.checkout.create()
        localStorage.setItem("checkout_id", checkout.id)
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

    // Shopping Cart
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

    // // (checkoutId, Line item to update)
    updateLineItem = async (checkoutId, lineItemToUpdate) => {
        // Update the line item on the checkout (change the quantity or variant)
        client.checkout.updateLineItems(checkoutId, lineItemToUpdate).then((checkout) =>{
            this.setState ({ checkout: checkout })
        })
    }

    // updateLineItem = async (checkoutId, lineItemToUpdate) => {
    //     // Update the line item on the checkout (change the quantity or variant)
    //     const checkout = await client.checkout.updateLineItems(checkoutId, lineItemToUpdate)
    //     const lineItems = checkout.lineItems;
    //     this.setState = ({ checkout: checkout })
    //     this.setState = ({ lineItems : lineItems})        
    // }

    // Products
    fetchAllProducts = async () => {
        const products = await client.product.fetchAll()
        //updates the state//
        this.setState({ products: products })
    }

    //using handle so product name is in browser link not a number
    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle)
        const quantity = await client.product.quantity;
        //updates the state//
        this.setState({ product: product })
        this.setState({ quantity: quantity})
    }

    // Collections
    // currently being used in Collections.js. Does not fetch collections with their products.
    fetchAllCollections = async () => {
        const collections = await client.collection.fetchAll();
        this.setState({ collections: collections });
        //console.log("COLLECTIONS ALL", collections);
    };

    // Collection.js
    fetchCollectionById = async (collectionId) => {
        const collection = await client.collection.fetchWithProducts(collectionId);
        const collectionName = collection.title;
        this.setState({collection: collection.products});
        this.setState({collectionName: collectionName});
    }

    closeCart = async () => { this.setState({ isCartOpen: false }) }

    openCart = async () => { this.setState({ isCartOpen: true }) }

    closeMenu = async () => { this.setState({ isMenuOpen: false }) }

    openMenu = async () => { this.setState({ isMenuOpen: true }) }

    render() {
    // TEST update line item
        // const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80YzRhM2E1MDVlZDJiYTk1MzJjMzQwNGY5YTM5M2Y0ZT9rZXk9YTdhODM0YWQyYmM5NzJiNmZiNGI4ZTEwZGI1NmY2ZWE=';
        // const lineItemToUpdate = [
        //     { id: 'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzM5NzAwMTQyNDU3MDAwMD9jaGVja291dD00YzRhM2E1MDVlZDJiYTk1MzJjMzQwNGY5YTM5M2Y0ZQ==', quantity:2 }
        // ];
        // updateLineItem(checkoutId, lineItemToUpdate);
        return (
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithHandle: this.fetchProductWithHandle,
                addItemToCheckout: this.addItemToCheckout,
                removeLineItem: this.removeLineItem,
                updateLineItem: this.updateLineItem,
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