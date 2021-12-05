import React, { useState } from "react";
import Header from "./Header";

const Home = (props) => {
    console.log("Home Props: ",props)
    const addCart = () =>{
        props.addToCartHandler({pice:1000,name:'i phone 11'})
    } 
    const removeCart = () => {
        if (props.data.length === 0){
            alert("All Cart Removes")
        }else{
            props.removeToCartHandler()
        }
    }
    return (
        <>
            <div>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://i.gadgets360cdn.com/products/large/iqoo-3-db-386x800-1582613523.jpg" />
                    </div>
                    <div className="text-wrapper item"
                        style={{ marginTop: '69px' }}>
                        <span>
                            I-Phone
                        </span>
                        <span>
                            Price: $1000.00
                        </span>
                    </div>
                    <div className="btn-wrapper item"
                        style={{ marginTop: '61px' }}>
                        <button
                        onClick={addCart}
                        >Add To Cart</button>
                        <button
                        style={{
                            marginLeft: '11px'
                        }}
                        onClick={removeCart}
                        >Remove To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;