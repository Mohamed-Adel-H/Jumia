export interface Customer {
  countryCode: string
  id: number
  name: string
  state: number
}


export interface CustomerResponse {
  customers: Array<Customer>
  currentPage: number
  totalItems: number
  totalPages: number
}

