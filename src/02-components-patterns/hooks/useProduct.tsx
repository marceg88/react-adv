import { useState, useEffect, useRef } from 'react'
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product,
  onChange?: ( args: onChangeArgs ) => void,
  value?: number,
  initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs) => {
  
  const [ counter, setCounter ] = useState( initialValues?.count || value) //Si viene el initialValue lo toma, sino toma el valor del value. para eso usamos el ||
  const isMounted = useRef(false) //crear objeto que sobrevive diferente renderizaciones del mismo componente.

  const increaseBy = ( value: number) => {

    let newValue = Math.max( counter + value, 0) //para que el minimo valor sea cero

    if( initialValues?.maxCount ){
      newValue = Math.min( newValue, initialValues.maxCount) //para que el maximo valor sea maxCount
    }

    setCounter( newValue )
    onChange && onChange({ count: newValue, product}) //es lo mismo que si onChange trae valor entonces que llame la función(if)
  }

  const reset = () => {
    setCounter( initialValues?.count || value )
  }

  useEffect(() => {
    if( !isMounted.current ) return //que no cargue el counter hasta que el componente no este cargado.
    setCounter( value )
  },[ value ])

  useEffect(() => {
    isMounted.current = true //una vez que el componente este montado cargue true
  }, [])

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  }
}