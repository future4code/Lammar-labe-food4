import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";
import CardDeta from "../../components/CardDeta/CardDeta";
import { CardMenu } from "../../components/CardMenu/CardMenu";
import { Titulo, Body, ContainerAll, Wrap, HeaderContainer, Container, Buttons } from './styled'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";




export const Restaurants = () => {
    useProtectedPage()
    const [data, setData] = useState({ restaurant: {} })
    const params = useParams()
    const { resInfo, setResInfo } = useContext(GlobalStateContext)
    // const navigate = useNavigate()

    useEffect(() => {
        getRestaurantes()
    }, [])

    const categorias = data.restaurant && data.restaurant.products && data.restaurant.products.map((prod) => {
        return prod.category
    })

    const filtro = categorias && categorias.filter((item, i) => {
        return categorias.indexOf(item) === i
    })

    const produtos = (item, i) => {
        const array = i.filter((it) => it.category === item)
        const card = array.map((produ) => {
            return (
                <CardMenu key={Math.random()} restaurantId={params.id} product={produ} />

            )
        })

        return (
            <div>
                <Titulo>
                    {item}
                </Titulo>
                <hr></hr>
                {card}
            </div>
        )
    }


    const lista = filtro && filtro.map((cate) => {
        return produtos(cate, data.restaurant.products)
    })



    const getRestaurantes = () => {
        axios.get(`${BASE_URL}/restaurants/${params.id}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                // setRestaurante(res.data)
                setResInfo(res.data.restaurant)
                setData(res.data)
            })
            .catch((err) => {
                alert(err, 'Erro ao carregar')
            })
    }

    return (
        <Body>
            <ContainerAll>
                <Wrap>
                    <div id="Wrap">
                        <HeaderContainer>
                        <CardDeta restaurant={data && data.restaurant} />
                        </HeaderContainer>
                        <Container>

                        </Container>
                        <Buttons>

                        </Buttons>
                        <div id="WrapMainContainer">
                            <div id="WrapMain">
                                <div>
                                {lista}
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </Wrap>
            </ContainerAll>
        </Body>
    )
}

