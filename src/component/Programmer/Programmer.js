import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Programmer.css'


const Programmer = () => {

    const [persons,setPersons] = useState([]);

    // cart state
    const [cart,setCart] = useState([]);

    // handle event handler
    const handleAddPerson = person =>{
        const newCart = [...cart,person];
        setCart(newCart)
        console.log(newCart);
    }

    useEffect( ()=>{
        fetch('./programmer.JSON')
        .then(res =>res.json())
        .then(data => setPersons(data))
    } , [])
    return (
        <div>
            <div className="row programmer-container">
                <div className="col-md-9">
                    {/* loaded programmer */}
                    <div className="row row-gap">
                        {
                            persons.map(person => 
                            <Person
                            key = {person.key}
                            person ={person}
                            handleAddPerson = {handleAddPerson}
                            ></Person>)
                        }
                    </div>
                    
                    
                </div>
                <div className="col-md-3">
                    <Cart
                    cart = {cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Programmer;