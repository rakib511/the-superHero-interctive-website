import React from 'react';
import './Person.css'

const Person = (props) => {


    const {name,img,earn,country,proffession} = props.person || {};
    // console.log(props.person);

    return (
        <div className="col-md-4">
            <div className="card" style={{"width": "18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p>location: {country}</p>
                    <h5 className="card-text">
                        Job:{proffession}</h5>
                    <p><small>eanr: ${earn}</small></p>
                    <button 
                    onClick={ ()=> props.handleAddPerson(props.person)}
                    className="btn btn-success">
                    <i className="fas fa-shopping-cart"></i> Add cart</button>
                    {/* <a href="/shop" className="btn btn-success"><i class="fas fa-shopping-cart"></i> Add cart</a> */}
                </div>
                <div className='icon-style'>
                    <h1><i className="fab fa-facebook-square"></i></h1>
                    <h1><i class="fab fa-twitter-square"></i></h1>
                </div>
               
                    
            </div>
        </div>
    );
};

export default Person;