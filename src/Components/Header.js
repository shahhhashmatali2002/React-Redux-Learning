import React, { useEffect, useState } from "react";

const Header = (props) => {
    console.log("Header Props: ", props)
    return (
        <>
            <h1>React Redux Tutorial</h1>
            <div className="add-to-cart mt-5">
                <span className="cart-count"><div style={{ marginTop: '-8px', marginLeft: '-4px' }}>{props.data.length}</div></span> 
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </>
    )
};

export default Header