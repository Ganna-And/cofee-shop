import React from 'react';
import {PiHeartLight} from 'react-icons/pi'

type ProductItemProps = {
    item: any
};

const ProductItem:React.FC<ProductItemProps> = ({item}) => {
    
    return <div className='product_item'>
      <img src={item.imgSrc} alt=' coffee'  />
        <h4>{item.description}</h4>
        <div className="price">
        <p>{item.price}</p>
        <p className='discount'>{item.discount}</p>
        <PiHeartLight size={24} className='favorite'/>
        </div>
    </div>
}
export default ProductItem;