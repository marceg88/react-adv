import '../styles/custom-styles.css'

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
import { useShoppingCart } from "../hooks/useShoppingCart"

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart()
  
  return(
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          products.map( product => (
            <ProductCard 
              value={ shoppingCart[product.id]?.count || 0} //Si no existe lo pone en 0
              product={ product } 
              className="bg-dark text-white"
              onChange={onProductCountChange} //Se podría llamar así tambien, porque emite los argumentos del mismo tipo.
              // onChange={(evento) => onProductCountChange(evento) }
            >
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-bold"/>
              <ProductButtons className="custom-buttons button"/>
            </ProductCard>   
          ))
        }
      </div>
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(( [key, product] ) => (
            <ProductCard 
              key={ key }
              product={ product } 
              className="bg-dark text-white" 
              style={{ width: '100px' }}
              value={ product.count }
              onChange={ (evento) => onProductCountChange( evento ) }
            >
              <ProductImage className="custom-image"/>
              <ProductButtons 
                className="custom-buttons button"
                style={{ display: 'flex', justifyContent:'center'}}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}


