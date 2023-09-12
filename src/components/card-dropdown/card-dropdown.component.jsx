// import "./card-dropdown.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../card-item/cart-item.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItems ,EmptyMessage,  } from "./card-dropdown.styles";

function CardDropdown(){
    const {cartItems, setIsCartOpen} = useContext(CartContext);

    const navigation = useNavigate();
    const goToCheckOutPage = function(){
        navigation("/checkout");
        setIsCartOpen(false);
    }
    
    return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ?  (cartItems.map((item)=>(
                    <CartItem key={item.id} cartItems={item}/>
                ))): (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }
           
            </CartItems>
            <Button onClick={goToCheckOutPage}>Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CardDropdown;