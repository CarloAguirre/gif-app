
import React, { useState } from 'react';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Slam Dunk']);

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;  

        setCategories([newCategory, ...categories])
    }

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1> 

      {/* Input */}
      <AddCategory 
      // onNewCategory = prop
      onNewCategory={onAddCategory}
      />

      {/* Listado de Gif */}
        {
            categories.map(category =>(
              <GifGrid 
              key={category}
              category ={category}
              />
              ))
        }
    </>

  )
}

