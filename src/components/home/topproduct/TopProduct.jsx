import React, { useState } from 'react'
import { Heading } from '../../common/Heading'
import { ProductItem } from '../product/ProductItem'
import { topProducts } from '../../assets/data/data'

export const TopProduct = () => {
    const [data, setData] = useState(topProducts)
    const allCategories = ['all', ...new Set(data.map((item)=>item.category))];

    const [category, setCategory] = useState(allCategories);
    
    const handleFilter = (category)=>{
        const newItem = topProducts.filter((item)=> item.category === category );
        setData(newItem);

        if (category === 'all') {
            setData(topProducts);
            return
            
        }
    }
  return (
    <>
        <div className="topproduct">
            <div className="container">
                <div className="head">
                    <Heading title='Top Selling Products' desc='Meet our newbies! the latest templates upload to the marketplace'/>
                    <div className="category" >

                        {/* todo */}
                        {category.map((category,id)=>(
                            <button key={
                                id
                            } className='button' onClick={()=> handleFilter(category)}>{category}</button>
                        ))}
                        
                    </div>
                </div>
                <ProductItem  data={data}/>


            </div>
        </div>
    </>
  )
}
