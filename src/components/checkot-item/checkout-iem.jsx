import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.scss';



const Checkout =()=>{
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } =(CartContext);
    
    return (
        <div>
        <h1>im check out page</h1>

        {
            cartItems.map((cartItem)=>{
                const {id,name,quantity} = cartItem;
                return (
                    <div key={id}> 
                    <h2>name</h2>
                    <span>{quantity}</span>
                    <span onClick={()=>addCartItem(cartItem)}>+</span>
                    <span >-</span>
                    </div>
                )
            })
        }
        
        
        
        </div>
    )

}


export default Checkout