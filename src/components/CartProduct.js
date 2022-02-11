import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useStore, actions } from "../store"

function CartProduct({data, setData}) {
    const [state, dispatch] = useStore()

    const handleSub = (index) => {
        if(data[index].quantity > 1) {
            data[index].quantity -= 1
            const newData = data.slice()
            localStorage.setItem("cart", JSON.stringify(newData))
            setData(newData)
            dispatch(actions.setCart(newData))
        }
    }

    const handleAdd = (index) => {
        data[index].quantity += 1
        const newData = data.slice()
        localStorage.setItem("cart", JSON.stringify(newData))
        setData(newData)
        dispatch(actions.setCart(newData))
    }

    const handleDelete = (index) => {
        data.splice(index, 1)
        const newData = data.slice()
        localStorage.setItem("cart", JSON.stringify(newData))
        setData(newData)
        dispatch(actions.setCart(newData))
    }
    
    return (
        <div className="list_product_cart">
            {
                state.cart && state.cart.map((product, index) => (
                    <div key={index} className="flex">
                        <Link to={`/product/${product.link}`}><img src={product.image} alt="" /></Link>
                        <div className="flex-col">
                            <Link to={`/product/${product.link}`}><h3>{product.name}</h3></Link>
                            <p>{product.price}<span>,000₫</span></p>
                            <div>
                                <button onClick={() => handleSub(index)}>-</button>
                                <input type="text" value={product.quantity} disabled />
                                <button onClick={() => handleAdd(index)}>+</button>
                            </div>
                        </div>
                        <p>{product.price * product.quantity}<span>,000₫</span></p>
                        <div><i onClick={() => handleDelete(index)} className="fas fa-times"></i></div>
                    </div>
                ))
            }
        </div>
    )
}

export default CartProduct