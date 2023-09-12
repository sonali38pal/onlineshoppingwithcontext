import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

function ProductCard({product}){
    const {imageUrl, name, price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProducrToCard = function(){
        addItemToCart(product);
    }
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>₹{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProducrToCard}>Add to card</Button>
        </div>
    )
}


export default ProductCard;