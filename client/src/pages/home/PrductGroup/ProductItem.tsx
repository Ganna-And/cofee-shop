import React from 'react';
import {PiHeartLight} from 'react-icons/pi'


interface Product{
    id: number,
    description: string,
    price: string,
    imgSrc: string,
    discount:string
  }
type ProductItemProps = {
    product: Product
};

const ProductItem:React.FC<ProductItemProps> = ({product}) => {
    
    return <div className='product_item'>
      <img src={product.imgSrc} alt=' coffee'  />
        <h4>{product.description}</h4>
        <div className="price">
        <p>{product.price}</p>
        <p className='discount'>{product.discount}</p>
        <PiHeartLight size={24} className='favorite'/>
        </div>
    </div>
}
export default ProductItem;