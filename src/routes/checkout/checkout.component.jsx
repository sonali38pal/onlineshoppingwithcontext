import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

function Checkout(){
    const { cartItems, cartTotal } = useContext(CartContext);

    return(
        <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem)=> {
            return(
                <CheckOutItem key={cartItem.id} items={cartItem} />
            )
          })}
        <div className='total'>TOTAL: ₹{cartTotal}</div>
      </div>
    )
}

export default Checkout;