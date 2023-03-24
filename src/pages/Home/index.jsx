import { useEffect, useState } from 'react'
import Separator from '../../components/Separator'
import { getProducts } from '../../services/products.service'
import { API_URL } from '../../common/envronment'
import { formatter } from '../../utils/number'
import { Link } from 'react-router-dom'

import './styles.scss'

function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    handleProducts()
  }, [])

  const handleProducts = async () => {
    const { data } = await getProducts()
    setProducts(data)
  }

  return (
    <div className="home">
      <img 
        className="home__banner"
        src="//img.ltwebstatic.com/images3_ach/2023/03/20/1679277309c0b87caf8cbcc575cdb051840e237004.gif" 
        alt=""
        loading='lazy'
      />

      <Separator />

      <div>
        <h3>FLASH SALE</h3>

        <div className='shelf__grid'>
          {
            products.map((product) => 
              <Link to={`${product.attributes.link}?sku=${product.attributes.sku}`} key={product.id} className='product__card shelf__grid--item'>
                <div>
                  <img loading='lazy' className='product__image--default' src={`${API_URL}${product.attributes.images.data[0].attributes.formats.small.url}`} />
                  <img loading='lazy' className='product__image--hover' src={`${API_URL}${product.attributes.images.data[1].attributes.formats.small.url}`} />
                </div>
                <h3 className='product__name'>{product.attributes.name}</h3>
                <strong className='product__price'>{formatter.format(product.attributes.price)}</strong>
              </Link>
            )
          }
        </div>
      </div>

      <Separator />
      
      <img 
        className="home__banner"
        src="//img.ltwebstatic.com/images3_ach/2023/03/20/16793004024ac3d819b6af289b29cba78bbfd8ac4f.gif" 
        alt=""
        loading='lazy'
      />

      <Separator />

      <div>
        <h3>FLASH SALE</h3>

        <div className='shelf__grid'>
          {
            products.map((product) => 
              <Link to={`${product.attributes.link}?sku=${product.attributes.sku}`} key={product.id} className='product__card shelf__grid--item'>
                <div>
                  <img loading='lazy' className='product__image--default' src={`${API_URL}${product.attributes.images.data[0].attributes.formats.small.url}`} />
                  <img loading='lazy' className='product__image--hover' src={`${API_URL}${product.attributes.images.data[1].attributes.formats.small.url}`} />
                </div>
                <h3 className='product__name'>{product.attributes.name}</h3>
                <strong className='product__price'>{formatter.format(product.attributes.price)}</strong>
              </Link>
            )
          }
        </div>
      </div>
      
    </div>
  )
}

export default Home
