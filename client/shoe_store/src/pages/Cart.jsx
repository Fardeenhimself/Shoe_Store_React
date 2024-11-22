import { useContext } from "react";
import { AuthContext } from "../Context/Store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, totalPrice, totalQty, remove, setCart } = useContext(AuthContext);

    const reset = ()=>{
        setCart([])
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Sub Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 ? (
                            cart.map((v) => (
                               v.qty > 0 ? (
                                <tr key={v.id}>
                                    <td>{v.id}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={v.imageURL} alt={v.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{v.name}</td>
                                    <td>$ {v.price}</td>
                                    <td>{v.qty}</td>
                                    <td>$ {v.qty * v.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs" onClick={()=>{remove(v.id)}}>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </td>
                                </tr>
                               ) : (
                                <tr>
                                    <td colSpan="6">No Product Added</td>
                                </tr>
                            )
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No Product Added</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total Qty: {totalQty}</th>
                            <th>Total: $ {totalPrice}</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                           {
                            cart.length> 0 ? <th><Link className="btn" to={`/checkout`}>Checkout</Link><button className="btn ml-2" onClick={reset}>Clear</button></th> : <th></th>
                           }
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Cart;
