

import { Props as ProductCardsProps } from '../components/ProductCard'
import { ProductTitleProps } from '../components/ProducTitle';
import { ProductImageProps } from '../components/ProductImage';
import { ProductButtonsProps } from '../components/ProductButtons';
export interface Product {
    id: string,
    title: string,
    img?: string
}
  
export interface ProductContextProps {
    counter: number,
    increaseBy: ( value: number ) => void,
    product: Product,
    maxCount?: number
}

//Definir interface 
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardsProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,
    increaseBy: ( value: number ) => void,
    reset: () => void,
}