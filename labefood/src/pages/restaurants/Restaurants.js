import React from "react";
import { useParams} from 'react-router-dom';
import useRequestData from "../../hooks/useRequestData";



export const Restaurants = () =>{
    
    const { id } = useParams();
    const { data, isLoading } = useRequestData(`/restaurants/${id}`, []);

   const typeProducts = data.restaurant && data.restaurant.products.map(food => {

        return food
    
        
   }).reduce((acc, food) =>{
    if (!acc[food.category]) {
        acc[food.category] = []
    }
    acc[food.category].push(food)
    return acc
}, [])

    
    return (
        {isLoading
            // ? ([])
            :data.restaurant && 
                (
                <>
                <div>
                    <h3>{data.restaurant.name}</h3>
                    <p>{data.restaurant.category}</p>
                    <h1>R${data.restaurant.price}</h1>         
                </div>
                {typeProducts && Object.entries(typeProducts).map((type, i) => (
                    <main key={i}>
                        <h1>{type[0]}</h1>
                        {type[1].map(products => (
                            <div key={products.id}>
                                <img src={products.photoUrl} alt={`Imagem ilustrativa do ${products.name}`}/>
                                <h1>{products.name}</h1>
                                <p>{products.description}</p>     
                            </div>  
                        ))}
                    </main>
            ))}
        
            </>

        )}
            
    )
}

