import React, {useState} from 'react';

const initialCart=[
    {
        id: crypto.randomUUID(),
        title:"Product 1",
        description: "Descr product 1"  
    },
    {
        id: crypto.randomUUID(),
        title:"Product 2",
        description: "Descr product 2"  
    },
    {
        id: crypto.randomUUID(),
        title:"Product 3",
        description: "Descr product 3"  
    },
]

const ShoppingCart = () => {
    const [cart, setCart]=useState(initialCart);
    const [values, setValues]=useState({
        id:"",
        title:"",
        description:""
    })
    const deleteProduct=(id)=>{
        const auxCart=cart.filter(element=>element.id!==id);
        setCart(auxCart);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newProduct={...values, id: crypto.randomUUID()};
        
        setCart([...cart, newProduct]);
    }

    const handleChange=(evt)=>{
        /*
            evt.target es el elemento que ejecuto el evento
            name identifica el input y value describe el valor actual
        */
        const {target}=evt;
        const {name, value}=target
        /*
            Este snippet:
            1. Clona el estado actual
            2. Reemplaza solo el valor del
                input que ejecutó el evento
        */
        const newValues={
                ...values,
                [name]:value
        };
        // Sincroniza el estado de nuevo
        setValues(newValues)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='title' name='title' type='text' required onChange={handleChange}/>
                <input placeholder='description' name='description' type='text' required onChange={handleChange}/>
                <input value='Save' type='submit'/>
            </form>
            <h1>Shopping cart</h1>
            {
                cart.map(product=>
                    <div key={product.id}> 
                        <h3>{product.id}</h3>
                        <h3>{product.title}</h3>
                        <h3>{product.description}</h3>
                        <button onClick={()=>deleteProduct(product.id)}>Eliminar</button>
                    </div>
                )
            }
        </div>
    );
}

export default ShoppingCart;
