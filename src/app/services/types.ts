export interface ParamsGetProducts{
  filterState?: boolean,
  name?: string,
  sku?: string,
  tags?: string[],
  minPrice?: number,
  maxPrice?: number
}


export interface EditProduct {
  name?: string,
  price?: number,
  sku?: string
  urlImage?: string
  _id: string
  description?: string
  tags?: string[]
  stock?: number
}

export interface Filters {
  filterState?: boolean
  minPrice?: number,
  maxPrice?: number,
  name?: string,
  sku?: string,
  tags?: string[],
}


export interface CreateProduct {
  name: string,
  price: number,
  sku: string
  urlImage?: string
  description?: string
  tags?: string[]
  stock: number
}





