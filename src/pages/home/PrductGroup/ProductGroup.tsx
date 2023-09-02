import React from 'react';
import ProductItem from './ProductItem';

type ProductGroupProps = {
    data:any
};

const ProductGroup:React.FC<ProductGroupProps> = ({data}) => {
    


    return <div className='product_group' id='menu'>
        <h1>{data.title}</h1>
        <div className="product_list">
        {data.products.map((item:any)=>(
            <li className='product_group_li' key={item.id}>{<ProductItem item={item}/>}</li>
        ))}
        </div>
    </div>
}
export default ProductGroup;