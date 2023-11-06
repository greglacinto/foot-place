export interface Product {
  id: string,
  img: string,
  title: string,
  star: JSX.Element,
  reviews: string,
  prevPrice: string,
  newPrice: string
}

export interface NewProduct {
  newPrice: string
  prevPrice: string
  reviews: string
  title: string
  img: string
}
