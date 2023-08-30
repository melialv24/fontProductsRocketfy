export interface ProductCard {
  name?: string,
  price?: number,
  sku?: string
  urlImage?: string
  _id?: string
}

export interface Filters {
  filterState: boolean
  minPrice?: number,
  maxPrice?: number,
  name?: string,
  sku?: string,
  tags?: string[],
}

export interface ProductDetailCard extends ProductCard {
  description?: string
  tags?: string[]
  stock?: number
}

export interface SizePaginator{
  lowValue: number
  highValue: number
}


export interface ReceiveDetailsData {
  product: ProductDetailCard
}
