import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props || {};

    const cartReducer = (prevValue,currentValue) => prevValue + currentValue.earn;
    const total = cart.reduce( cartReducer  ,0)
    return (
        <div>
            <h3>Programmer</h3>
            <hr />
            <div className="card" style={{"width": "18rem","backgroundColor":"honeydew"}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h4>Added:{cart.length}</h4></li>
                    <li className="list-group-item"><h5>Total Cost:${total}</h5></li>
                </ul>
                <div className="card-footer">
                    <ul>
                        {
                            cart.map( person => <li>{person.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;