import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react';

const Products = ({ products, title }) => {

  const [sort, setSort] = useState(null);

  const navigate = useNavigate();

  const sortedProducts = useMemo(() => {
    
    let sorted = [...products]; 
    if (sort === 'asc') {
      sorted.sort((a, b) => parseFloat(a.discount_price) - parseFloat(b.discount_price));
    } else if (sort === 'desc') {
      sorted.sort((a, b) => parseFloat(b.discount_price) - parseFloat(a.discount_price));
    }
    return sorted;
  }, [products, sort]);

  return (
    <div>
        <div className='title-container'>
            <h1>{title}</h1>
            <div className='sort-container'>
            <p>Sort by: </p>
            <select onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Price ascending</option>
            <option value="desc">Price descending</option>
          </select>
        </div>
      </div>
      <div className='products-container'>
        {sortedProducts.map((product) => (
          <div key={product.id} className='product-container' onClick={() => navigate(`/products/${product.id}`)}>
            <img src={product.image_url} alt="" />
            <h1>{product.name}</h1>
            <div className='price-container'>
                        {product.discount_price ? (
                          <>
                              <p className='original-price'>{product.price} $</p>
                              <p className='discount-price'>{product.discount_price} $</p>
                          </>
                          ):(
                          <>
                              <p className='discount-price'>{product.discount_price} $</p>
                          </>
                         )}
                    </div>
            <p>incl. taxes</p>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Products