import React, {useState} from 'react';

const initialProduct={
    title:"titulo",
    description: "descripción",
    image: {
        small: "",
        medium: "",
        large:""
    }
}

const ProductApp = () => {
    //porque es más recommendable usar un objeto que un objeto vacio
    //1. Puede dar problemas cuando se tiene más de un nivel de profundidad
    // const [product, setProduct]=useState({});
    const [product, setProduct]=useState(initialProduct);
    //recibimios la propiedad y el value
    //esto se utiliza mucho para los formularios
    //Generalmente estan compuestos de un objeto con varios atribuos(para cada campo)
    //cada uno se diferencia por su atributo name
    const updateProduct=(proper, value)=>{
        setProduct({
            ...product,
            // proper:value, //esto no funciona, aunque si actualiza el valor, no genera una nueva renderización

            [proper]:value// 
        })
    }
    return (
        <div>
        <button onClick={()=>updateProduct("title", "nuevo titulo")}>Update product</button>
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            {/* Esta limitado, cuando tiene más de un nivel puede fallar */}
            {/* <img src={product.image.small} alt='preview'/> */}
            {/* Se soluciona de esta manera */}
            {/* <img src={product.image?.small} alt='preview'/>  */}

            <img src={product.image?.small} alt='preview'/>
        </div>
    );
}

export default ProductApp;
