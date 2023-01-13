export interface Product {
  name: string
  price: number
  href: string
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
  selectedClass:string
  inStock: boolean
}


export interface Size {
  name: string
  inStock: boolean
}
