import { Product, ProductInCart } from "../interfaces/interfaces"
import { useState } from "react"

export const useShoppingCart = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({})

  const onProductCountChange = ( { count, product }: { count: number, product: Product}) => {
    
  setShoppingCart( oldShoppingCart => {

    const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0} //Si el producto no existe entonces se crea el producto, si existe entonces toma el valor del producto.

    if( Math.max( productInCart.count + count, 0) > 0 ) {
      productInCart.count += count
      return {
        ...oldShoppingCart,
        [product.id]: productInCart
      }
    }

    //Borrar el producto
    const { [product.id]: toDelete, ...rest } = oldShoppingCart
    return rest

    // if( count === 0) {
    //   const { [product.id]: toDelete, ...rest } = oldShoppingCart
    //   //console.log("toDelete", toDelete) //Elemento que se elimina.
    //   return rest
    // }
    // return {
    //   ...oldShoppingCart,
    //   [ product.id ]: { ...product, count}
    // }
  })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}