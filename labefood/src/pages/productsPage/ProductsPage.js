
import React from "react";
import { useParams} from 'react-router-dom';
import useRequestData from "../../hooks/useRequestData";


    export const ProductsPage = () =>{
    
    
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
        // ? <h1>Carregando</h1>
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





// .catch(e => alert(e.response.data.message))
// }, []);



// import React from "react";
// import { useParams} from 'react-router-dom';
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { BASE_URL } from "../../constants/constants";
// import { useNavigate } from 'react-router-dom';

// const GetRestaurants = async (id) => {
//     const {data} = await axios.get(
//         `${BASE_URL}restaurants/${id}`,
//         {
//             headers: {
//                 auth: 'token',
//                 "Content-type": "application-jason"
//             }
//         }
//     )
// }

// export const Restaurants = () =>{
    
    
//     const { id } = useParams();
//     const [restaurant, setRestaurant] = useState();

//     const navigate = useNavigate();

//     useEffect(() => {
//         GetRestaurants(id)
//         .then(restaurant => {
//             setRestaurant(restaurant[0]);
//     })
//        .catch((error) => {
//         console.log(error)
//         alert ('Ocorreu um erro, tente novamente')
//        })
//     }, []);

//     {restaurant && restaurant.map ((restaurant, index) => {
//         return(
//             <li key={index}>
//                 {restaurant}
//             </li>
//             )
//         })};
  
//     return (
//         !restaurant ? <h1>Não há restaurante com este id</h1> : (
//                 <>
//                 <img src={restaurant.products.photoUrl} alt="imagem do Prato"/>
//                 <h1>{restaurant.category}</h1>
//                 <h1>R${restaurant.price}</h1>
//                 <h1>{restaurant.name}</h1>
//                 <p>{restaurant.description}</p>

//             </>  
//     ))
// }

// export default GetRestaurants;
