import { CSSProperties, createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces'
import { ReactElement } from 'react';

import styles from '../styles/styles.module.css'

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement [] // puede recibir uno o varios children
  className?: string,
  style?: CSSProperties,
  // onChange?: ( product: Product, count: number ) => void;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number

}

export const ProductContext = createContext({} as ProductContextProps)
//Proveedor de información
const { Provider } = ProductContext;

//Necesitamos que reciba childrens.
export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value })

  return(
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div 
        className={ `${styles.productCard} ${className}` } 
        style={ style }
      >
        {children} 
      </div>
    </Provider>
  )
}
