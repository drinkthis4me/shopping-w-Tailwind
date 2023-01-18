export interface Product {
  name: string
  price: number
  id: string
  breadcrumbs: Breadcrumb[]
  images: Image[]
  colors: Color[]
  sizes: Size[]
  description: string
  highlights: string[]
  details: string
}

export interface Breadcrumb {
  id: number
  name: string
  href: string
}

export interface Image {
  src: string
  alt: string
}

export interface Color {
  name: string
  class: string
  selectedClass: string
  inStock: boolean
}

export interface Size {
  name: string
  inStock: boolean
}

export interface ProductOverview {
  id: number
  name: string
  coverImage: {
    src: string
    alt: string
  }
  price: number
  href: string
  description: string
}

export interface CartItem extends Product {
  addedTime: string
  selectedColor: string
  seletedSize: string
  quantity: number
}

export interface Cart {
  id: number
  created: string
  items: CartItem[]
}
