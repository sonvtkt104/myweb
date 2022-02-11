import { Link } from "react-router-dom"
import { useStore, actions} from '../store'

function CartSubProduct() {
    const [state, dispatch] = useStore()

    const handleDelete = (index) => {
        state.cart.splice(index, 1)
        const newData = state.cart.slice()
        localStorage.setItem("cart", JSON.stringify(newData))
        dispatch(actions.setCart(newData))
    }
 
    return (
        <div>
            {
                state.cart.map((product, index) => (
                    <div key={index} className="flex">
                        <Link to={product.link}><img src={product.image} alt="" /></Link>
                        <div className="flex-col">
                            <Link to={product.link}><h3>{product.name}</h3></Link>
                            <span>{product.quantity}</span>
                            <p>{product.price},000₫</p>
                        </div>
                        <i onClick={() => handleDelete(index)} className="fas fa-times"></i>
                    </div> 
                ))
            }
        </div>
    )
}
export default CartSubProduct