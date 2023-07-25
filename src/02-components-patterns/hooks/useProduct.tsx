import { useState, useEffect, useRef } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product,
  onChange?: ( args: onChangeArgs ) => void,
  value?: number
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs) => {
  
  const [ counter, setCounter ] = useState(value)
  //Verificar si el useProduct es controlado
  const isControlled = useRef( !!onChange ) //!!onChange = true

  const increaseBy = ( value: number) => {

    if( isControlled.current ){
      return onChange!({ count: value, product }) //!verificar que no sea undefined
    }
    const newValue = Math.max( counter + value, 0)
    setCounter( newValue )
    onChange && onChange({ count: newValue, product}) //es lo mismo que si onChange trae valor entonces que llame la función(if)
  }

  useEffect(() => {
    setCounter(value)
  },[value])

  return{
    counter,
    increaseBy
  }
}