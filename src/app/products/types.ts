export interface ProductCard {
  name?: string,
  price?: number,
  sku?: string
  urlImage?: string
  _id?: string
}

export interface ProductDetailCard extends ProductCard {
  description?: string
  tags?: string[]
  stock?: number
}


export interface ReceiveDetailsData {
  product: ProductDetailCard
}
