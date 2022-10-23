
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImage = async()=>{
      const newImages = await getGifs(category);
      setImages(newImages)
      setIsLoading(false)
    }
  
    //EL hook useEffect ayuda a que luego de ejecutarse la peticion http no se vuelva a a ejecutar 2 o mas veces, siempre y cuando el segundo arg ([]) este vacio.
    useEffect(() => {
      
      getImage();
      
    }, [])

  return {
    images,
    isLoading
  }
}
