import { useState } from "react"

//Creamos primero un hook para manejar el valor antes y despues de los 'eventos'
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    //el nuevo valor del input sera el evento (tipeado), este 'vive' en event.target.value 
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
        // console.log(inputValue)
    }

    //evitamos que al apretar enter el navegador haga refresh
    const onSubmit = (event)=>{
        event.preventDefault()
        
        // si en el inputValue no se ingresa ningun valor entonces no retornada una nueva categorie
        if(inputValue.trim().length <=1) return;
        // setCategories(categories => [ inputValue, ...categories])

        onNewCategory(inputValue.trim())
         
        // luego de ingresar la nueva categoria deberemos 'limpiar' el input value
        setInputValue('')
    }

    

    return (
        //utilizamos la etiqueta form para que al hacer 'enter' tenga el comportamiento de un formulario
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Buscar GIF's"
            value={inputValue}
            onChange={onInputChange}
            />        
        </form>
    )
    }
