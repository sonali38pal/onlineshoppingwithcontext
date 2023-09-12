import "./cart-item.styles.scss";

function CartItem({cartItems}){
  const {name, quantity, price, imageUrl} = cartItems;
   return(
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ₹{price}
        </span>
      </div>
    </div>
   )
}

export default CartItem;