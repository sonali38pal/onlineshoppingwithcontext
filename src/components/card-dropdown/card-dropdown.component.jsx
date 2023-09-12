import "./card-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../card-item/cart-item.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";


function CardDropdown(){
    const {cartItems, setIsCartOpen} = useContext(CartContext);

    const navigation = useNavigate();
    const goToCheckOutPage = function(){
        navigation("/checkout");
        setIsCartOpen(false);
    }
    
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map((item)=>(
                <CartItem key={item.id} cartItems={item}/>
            ))}
            </div>
            <Button onClick={goToCheckOutPage}>Checkout</Button>
        </div>
    )
}

export default CardDropdown;