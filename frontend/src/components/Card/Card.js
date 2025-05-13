import React, { useState } from 'react'
import './Card.css'
import { useAuth } from '../../context/Context';
import axios from 'axios';

export default function Store() {
    const { cartItem, setCartItem,setIsModalOpen,isModalOpen } = useAuth();

    const productsArr = [
        {
            id: 1,
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            id: 2,
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            id: 3,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            id: 4,
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ];

const addToCartHandler = async (id) => {
    const filterProduct = productsArr.find((item) => item.id === id);
    const isExist = cartItem && cartItem.find((item) => item.productId === id); 

    if (isExist) {
        alert("Item already in cart");
        return;
    }

    try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            alert("User not logged in!");
            return;
        }

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart/data`, {
            productId: filterProduct.id,
            title: filterProduct.title,
            price: filterProduct.price,
            imageUrl: filterProduct.imageUrl,
            quantity: 1,
            userId: userId 
        });

        console.log(res);

        const updatedCart = [...cartItem, res.data.data];
        setCartItem(updatedCart);

    } catch (err) {
        console.error("Failed to add to cart", err);
    }
};

      

      
        
    return (
        <>
            <div className='custom-bg  text-center py-2'>
                <h1 className="py-4 text-white custom-font custom-bg " style={{ fontSize: '6rem' }}>The Generics</h1>
            </div>
            <div className=' text-center mt-5'>
                <span className='d-flex justify-content-center text-dark fw-bold fs-3 mb-4'>MUSIC</span>
                <div className='row row-cols-2  '>
                    {productsArr && productsArr.map((item, index) => (
                        <div key={index} className='mt-4'>

                            <div className='mb-2 fs-4'>
                                <span > {item.title}</span>
                            </div>
                            <div>
                                <img src={item.imageUrl} alt='img' />
                            </div>
                            <div className='d-flex justify-content-evenly align-items-center gap-3 '>
                                <span>${item.price}</span>
                                <button type="button" onClick={()=>addToCartHandler(item.id)} className=" btn-hover btn btn-info text-white fw-bold mt-4 px-4"  >Add to cart</button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
            <div className='d-flex justify-content-center my-58 my-5'>
                <button type="button" onClick={()=>setIsModalOpen(!isModalOpen)} class="btn btn-primary btn-lg text-white fw-bold " style={{ backgroundColor: "#777" }}>See the cart</button>
            </div>

        </>
    )
}

