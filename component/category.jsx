import React from 'react'
import CategorySingle from './category.single'

const Category = () => {
    return (

        <div className="category-container">
            <CategorySingle href='/search?category=men' name='Men' />
            <CategorySingle href='/search?category=women' name='Women' />
            <CategorySingle href='/search?category=kid' name='Kid' />
           
        </div>
    )
}

export default Category
