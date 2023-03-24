import { useEffect, useState } from 'react'
import { useQuery } from '../../hooks/useQuery'
import { getProduct } from '../../services/products.service'
import { formatter } from '../../utils/number'
import { API_URL } from '../../common/envronment'

import './styles.scss'
import { Navigate } from 'react-router-dom'

export default function Product() {
  const [product, setProduct] = useState({})
  const query = useQuery()

  useEffect(() => {
    handleProduct()
  }, [])

  const handleProduct = async () => {
    const { data } = await getProduct(query.get('sku'))
    setProduct(data?.[0])
  }

  if (!product) {
    return <Navigate to="/not-found" />
  }

  if (!product.id) {
    return <></>
  }

  return (
    <div>
        <img className='product__image' src={`${API_URL}${product.attributes.images.data[0].attributes.formats.small.url}`} />
        {
            product.attributes.images.data.map((image) =>
                <img loading='lazy' className='product__image' src={`${API_URL}${image.attributes.formats.thumbnail.url}`} />
            )
        }
        <h2>{product.attributes.name}</h2>
        <h2>{formatter.format(product.attributes.price)}</h2>
        <p>{product.attributes.description}</p>
        {
            product.attributes.custom_fields.sizes?.map((size) => 
                <span>{size}{' '}</span>
            )
        }
    </div>
  )
}
