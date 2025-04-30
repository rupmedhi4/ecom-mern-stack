import React, { useEffect, useState } from 'react';
import Modal from './../../Modal/Modal';
import { useAuth } from '../../context/Context';

export default function ShowingCartItems() {
    const { setIsModalOpen, isModalOpen, cartItem, setCartItem } = useAuth();

    const closeHandler = () => {
        setIsModalOpen(false);
    };


    const total = cartItem.reduce((acc, item) => acc + item.price, 0);

    const removeItem = (id) => {
        const updatedCart = cartItem.filter(item => item.id !== id);
        setCartItem(updatedCart);
        localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    };

    const handlePurchase = () => {
        alert("Order successful!");
        setCartItem([]);
        localStorage.removeItem("cartItem");
        setIsModalOpen(false);
    };

    return (
        <Modal>
            <div className="d-flex justify-content-between align-items-center mb-3 rounded mt-3">
                <span className="fs-2 fw-bold mx-auto">CART</span>
                <button onClick={closeHandler} className="btn-close"></button>
            </div>

            <div className="d-flex fw-bold border-bottom border-danger pb-2">
                <div className="col-4">ITEM</div>
                <div className="col-4">PRICE</div>
                <div className="col-4">QUANTITY</div>
            </div>

            {cartItem.map((item) => (
                <div key={item.id} className="d-flex align-items-center py-3 border-bottom">
                    <div className="col-4">
                        <img src={item.imageUrl} alt={item.title} width="50" height="50" className="mb-1" />
                        <p className="mb-0">{item.title}</p>
                    </div>
                    <div className="col-4">${item.price}</div>
                    <div className="col-4 d-flex align-items-center">
                        <span className="me-2">1</span>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger btn-sm">Remove</button>
                    </div>
                </div>
            ))}

            <div className="text-end mt-3 fw-bold fs-5">
                Total $ {total}
            </div>

            <div className="text-center mt-4">
                <button onClick={handlePurchase} className="btn btn-info text-white fw-bold">PURCHASE</button>
            </div>
        </Modal>
    );
}
