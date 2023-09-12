import "./card-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingBagIcon} from "../../assets/shopping-bag.svg";



function CardIcon(){
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const cardOpenHandler = function(){
    setIsCartOpen(!isCartOpen);
  }
    return(
       <div className='cart-icon-container' onClick={cardOpenHandler}>
         <ShoppingBagIcon className='shopping-icon'/>
         <span className='item-count'>{cartCount}</span>
       </div>
    )
}

export default CardIcon;