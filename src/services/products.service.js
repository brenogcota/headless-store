import { API_URL } from '../common/envronment'
import { request } from '../common/fetch'

export async function getProducts() {
    return request(`${API_URL}/api/products?populate=images`)
}

export async function getProduct(sku) {
    return request(`${API_URL}/api/products?populate=images&filters[sku][$eq\]=${sku}`)
}