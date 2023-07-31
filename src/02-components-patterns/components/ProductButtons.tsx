import { CSSProperties, useContext, useCallback } from 'react'
import { ProductContext } from './ProductCard'

import styles from '../styles/styles.module.css'

export interface ProductButtonsProps {
  className?: string,
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    //TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext( ProductContext )

    //TODO: isMawReached = useCallback, [ count, maxCount ]
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount, //si no existe va a devolver un false
      [counter, maxCount],
    )
    

    return(
      <div 
        className={ `${styles.buttonsContainer} ${className}`}
        style={ style }
      >
        <button className={ styles.buttonMinus } onClick={() => increaseBy(-1)}> -</button>
        <div className={ styles.countLabel }> {counter}</div>
        <button className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disable }`  } onClick={() => increaseBy(1)}> +</button>
      </div>
    )
  }