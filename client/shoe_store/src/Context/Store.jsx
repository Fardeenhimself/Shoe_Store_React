import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function Store({ children }) {
    const [cart, setCart] = useState([]);
    const [log, setLog] = useState(false);

    const cartPage = (val) => {
        const index = cart.findIndex((item) => item._id === val._id);
    
        if (index === -1) {
            val.qty = 1;
            setCart([...cart, val]);
        } else {
            let newQty = parseInt(cart[index].qty) + 1;
            const updatedCart = [...cart];
            updatedCart[index] = { ...cart[index], qty: newQty };
            setCart(updatedCart);
        }
    };
    
    

    const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);
    const totalQty = cart.reduce((total, item) => total + item.qty, 0);

    const remove = (id) => {
        const index = cart.findIndex((item) => item.id === id);

        if (index !== -1) {
            let newQty = cart[index].qty - 1;

            if (newQty > 0) {
                const updatedCart = [...cart];
                updatedCart[index] = { ...cart[index], qty: newQty };
                setCart(updatedCart);
            } else {
                const updatedCart = cart.filter((item) => item.id !== id);
                setCart(updatedCart);
            }
        }
    };

    const usr = (v) => {
        setLog(v);
    };

    const value = { cartPage, cart, totalPrice, totalQty, remove, usr, log, setCart };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
