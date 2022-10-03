import React, { useContext, useState, useEffect } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Pai, Img, Description, Button } from './styled'
import ModalCom from '../Modal/Modal'
// import Modal from "@material-ui/core/Modal";



export const CardMenu = ({ product, restaurantId, qntd }) => {
    const { name, description, photoUrl, price, id } = product
    const [open, setOpen] = useState(false)
    const {  cart, setCart, removeCart, activeOrder, getActiveOrder } = useContext(GlobalStateContext)

    const closeButton = () => {
        setOpen(false)
    }

    useEffect(() => {
        getActiveOrder()
        closeButton()
    }, [cart])



    const checkCartRes = () => {
        if (cart[0] && restaurantId && cart[0].resID !== restaurantId) {
            return (false)
        } else if (cart[0] && cart[0].resID === restaurantId) {
            return (true)
        }
        return (true)
    }

    function inCart() {
        const valor = cart.length
        for (let i = 0; i < valor; i++) {
            if (cart[i].product.id === id) {
                return (true)
            } else if (cart[i] && cart[i].product.id === restaurantId) {
                return (false)
            }
        }
    }


    const currency = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return (
        <Pai>
            <Img src={product.photoUrl} />
            <Description>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>{currency.format(product.price)}</h3>
                <div>
                    {checkCartRes() ? (
                        <Button inCart={inCart()} onClick={() => !inCart() ? (activeOrder ? alert('Pedido em finalização') : setOpen(true)) : removeCart(id)}>{!inCart() ? 'Adicionar' : 'Remover'}</Button>
                    ) : <p>Pedido no carrinho</p>}
                </div>

            </Description>
            <div>
            {/* <Modal */}
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{
                padding: "1rem", display: "flex",
                alignItems: 'center', justifyContent: 'center'}}
                    {/* > */}
                   
                        <ModalCom
                            product={product}
                            resID={restaurantId}
                            close={() => closeButton(false)}
                        />
            // {/* </Modal> */}
            </div>
            
        </Pai>
        
    )
}
