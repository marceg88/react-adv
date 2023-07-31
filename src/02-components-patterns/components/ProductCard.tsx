import { CSSProperties, createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces'
import { ReactElement } from 'react';

import styles from '../styles/styles.module.css'

export interface Props {
  product: Product,
  //children?: ReactElement | ReactElement [] // puede recibir uno o varios children
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string,
  style?: CSSProperties,
  // onChange?: ( product: Product, count: number ) => void;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number
  initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps)
//Proveedor de información
const { Provider } = ProductContext;

//Necesitamos que reciba childrens.
export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = 
    useProduct({ onChange, product, value, initialValues })

  return(
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount
    }}>
      <div 
        className={ `${styles.productCard} ${className}` } 
        style={ style }
      >
        { 
          children({
            count: counter,
            isMaxCountReached: isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,

            increaseBy,
            reset
          }) 
        } 
      </div>
    </Provider>
  )
}
