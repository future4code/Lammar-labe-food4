import { Container, Order, IMG, OrderInfo, Btns, Icons } from "./Styled"
import { useNavigate } from "react-router-dom";
import {useRequestData} from "../../hooks/useRequestData"
import { goToFeed, goToRestaurants, goToProfile} from "../../routes/coordinator";
import Avatar from '../../assets/Avatarsvg'
import Shopping_Cart from '../../assets/Shopping_Cartsvg'
import Clock from "../../assets/clock.svg"
import { BASE_URL } from "../../constants/constants";
import House from '../../assets/Housesvg'
export const Footer = ({current}) => {

    const navigate = useNavigate()
  
    const { data } = useRequestData(BASE_URL + "/active-order", [])
    
    return (
        <Container>
      {data && data.order && data.order !== null
      ? <Order disp={'flex'}>
          <IMG>
            <img src={Clock} alt="Ícone de timer" />
          </IMG>
          <OrderInfo>
            <p>Pedido em andamento</p>
            <p>{data.order && data.order.restaurantName}</p>
            <p>SUBTOTAL: R${data.order && (data.order.totalPrice).toFixed(2).replace(".", ",")}</p>
          </OrderInfo>
        </Order> 
      : <Order disp={'none'} ></Order> }
      <Btns>
        <Icons onClick={() => goToFeed(navigate)} idx={current === 'Feed' && 1}><House/></Icons>
        <Icons onClick={() => goToRestaurants(navigate)} idx={current === 'Cart' && 2}><Shopping_Cart/></Icons>
        <Icons onClick={() => goToProfile(navigate)} idx={current === 'Profile' && 3}><Avatar/></Icons>
      </Btns>
    </Container>
  )
    
}