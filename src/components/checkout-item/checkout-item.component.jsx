import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


function CheckOutItem({items}){
    const {imageUrl, name, quantity, price} = items;
    const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(items);

    const removeItemHandler = () => removeItemToCart(items);
    const clearHandler = () => clearItemFromCart(items);

    return(
       <div className='checkout-item-container'>
            <div className='image-container'>
              <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'> ₹{price}</span>
            <div className='remove-button' onClick={clearHandler}> &#10005; </div>
       </div>
    )
}

export default CheckOutItem;