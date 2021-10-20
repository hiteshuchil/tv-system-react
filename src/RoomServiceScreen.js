import React from "react";
import CardImage1 from './assets/images/food1.png';
import CardImage2 from './assets/images/food2.png';
import CardImage3 from './assets/images/food3.png';
import CardImage4 from './assets/images/food4.png';

const items = [
  {
    id: 1,
    name: "Full English Breakfast",
    desc: "Breakfeast fit for a king.",
    price: 50,
  },
  {
    id: 2,
    name: "Mix Grill",
    desc: "Grilled and mixed to perfection.",
    price: 75,
  },
  {
    id: 3,
    name: "Burger",
    desc: "Taste's just like McDonalds, at five times the price.",
    price: 50,
  },
  {
    id: 4,
    name: "Chicken Shawarma",
    desc: "Dubai classic - extra garlic sauce, extra pickles included.",
    price: 25,
  },

];

const RoomServiceScreen = () => {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsToBuy = () => items.map((item) => (
    <div key={item.id}>
      {/* {`${item.name}: $${item.price}`} */}
      <button className="btn btn-primary purple-outline-button" type="submit" onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  ));

  const listItemsInCart = () => items.map((item) => (
    
    <div key={item.id}>
      ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
      <button type="submit" onClick={() => removeFromCart(item)} className="btn btn-primary purple-outline-button" >Remove</button>
    </div>

  ));

  return (
          <React.Fragment>


                <div className="container-fluid home-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="welcome mt-3">Order Room Service
                        </h1>
                    </div>
                    <div className="col-12">
                        <div className="row ms-5 mt-5">
                                <div className="col-2">

                                <div className="card card-bg" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage1} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">{items[0].name}</h5>
                                        <p className="card-text">{items[0].desc}<br />
                                        Price: AED {items[0].price}</p>
                                        <div className="d-grid">
                                        {listItemsToBuy().[0]}
                                        </div>
                                        </div>
                                </div>


                                </div>
                                <div className="col-2">
                                <div className="card card-bg" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage2} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">{items[1].name}</h5>
                                        <p className="card-text">{items[1].desc}<br />
                                        Price: AED {items[1].price}</p>
                                        <div className="d-grid">
                                        {listItemsToBuy().[1]}
                                        </div>
                                        </div>
                                </div>
                                        
                                </div>
                                <div className="col-2">
                                <div className="card card-bg" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage3} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">{items[2].name}</h5>
                                        <p className="card-text">{items[2].desc}<br />
                                        Price: AED {items[2].price}</p>
                                        <div className="d-grid">
                                        {listItemsToBuy().[2]}
                                        </div>
                                        </div>
                                </div>
                                </div>
                                <div className="col-2">
                                <div className="card card-bg" style={{height: "350px"}}>
                                        <img className="card-img-top" src={CardImage4} alt="Card image cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">{items[3].name}</h5>
                                        <p className="card-text">{items[3].desc}<br />
                                        Price: AED {items[3].price}</p>
                                        <div className="d-grid">
                                        {listItemsToBuy().[3]}
                                        </div>
                                        </div>
                                </div>
                                </div>

                                <div className="col-4">
                                <div className="card card-bg" style={{height: "350px"}}>
                                        <div className="card-header">
                                        <h5 className="card-title">Your Shopping Cart</h5>
                                        </div>
                                        <div className="card-body">
                                        <p className="card-text" id="cartBody">
                                        <div>
                                        <div>{listItemsInCart()}</div>
                                        <div>Total: ${cartTotal}</div>
                                        <div>
                                                <button onClick={() => setCart([])} className="btn btn-primary purple-outline-button">Clear</button>
                                        </div>
                                        </div>
                                        </p>
                                        <b>Total: AED {cartTotal}</b> 
                                        </div>
                                        <div className="card-footer">
                                         
                                        {/* <div className="d-grid">
                                        <a href="#" className="btn btn-primary bg-purple">Confirm and Order Now</a>
                                        </div> */}
                                        </div>
                                </div>
                                </div>



                    </div>



                    </div>
                
                </div>
            </div>  
            </React.Fragment>
  );
};

export default RoomServiceScreen;



// import { Fragment, useEffect, useState } from 'react';
// import CardImage1 from './assets/images/spa1.png';
// import CardImage2 from './assets/images/spa2.png';
// import CardImage3 from './assets/images/spa3.png';
// import CardImage4 from './assets/images/spa4.png';



    



// function SpaScreen() {

//     const colbugfix = {
//       width: "230px",
//       marginTop: "50px"
//     };

//     const[cartValue,setCartValue] = useState(0); 

//     function addCartValue(val) {
//         // setCartValue(val);
//     };

//   return (   
//     <Fragment>

//             <div className="container-fluid home-container">
//                 <div className="row">
//                     <div className="col-12">
//                         <h1 className="welcome mt-3">Welcome to the Spa
//                         </h1>
//                     </div>
//                     <div className="col-12">
//                         <div className="row ms-5 mt-5">
//                                 <div className="col-2">

//                                 <div className="card card-bg" style={{height: "350px"}}>
//                                         <img className="card-img-top" src={CardImage1} alt="Card image cap" />
//                                         <div className="card-body">
//                                         <h5 className="card-title">1 Hour Facial Massage</h5>
//                                         <p className="card-text">Enjoy a relaxing clay facial at our spa.<br />
//                                         Price: AED300<br />
//                                         Time: 1 hour</p>
//                                         <div className="d-grid">
//                                         <a href="#" className="btn btn-primary purple-outline-button" onClick={addCartValue(300)}>Book Now</a>
//                                         </div>
//                                         </div>
//                                 </div>


//                                 </div>
//                                 <div className="col-2">
//                                 <div className="card card-bg" style={{height: "350px"}}>
//                                         <img className="card-img-top" src={CardImage2} alt="Card image cap" />
//                                         <div className="card-body">
//                                         <h5 className="card-title">1 Hour Nose Massage</h5>
//                                         <p className="card-text">Enjoy a nose massage at our spa.<br />
//                                         Price: AED200<br />
//                                         Time: 1 hour</p>
//                                         <div className="d-grid">
//                                         <a href="#" className="btn btn-primary purple-outline-button">Book Now</a>
//                                         </div>
//                                         </div>
//                                 </div>
                                        
//                                 </div>
//                                 <div className="col-2">
//                                 <div className="card card-bg" style={{height: "350px"}}>
//                                         <img className="card-img-top" src={CardImage3} alt="Card image cap" />
//                                         <div className="card-body">
//                                         <h5 className="card-title">30 min Hot Stone Massage</h5>
//                                         <p className="card-text">Enjoy burning hot stones on your skin.<br />
//                                         Price: AED500<br />
//                                         Time: 30 mins</p>
//                                         <div className="d-grid">
//                                         <a href="#" className="btn btn-primary purple-outline-button">Book Now</a>
//                                         </div>
//                                         </div>
//                                 </div>
//                                 </div>
//                                 <div className="col-2">
//                                 <div className="card card-bg" style={{height: "350px"}}>
//                                         <img className="card-img-top" src={CardImage4} alt="Card image cap" />
//                                         <div className="card-body">
//                                         <h5 className="card-title">Accupuncture Massage</h5>
//                                         <p className="card-text">No pain, no gain. Be a man!<br />
//                                         Price: AED250<br />
//                                         Time: 30 mins</p>
//                                         <div className="d-grid">
//                                         <a href="#" className="btn btn-primary purple-outline-button">Book Now</a>
//                                         </div>
//                                         </div>
//                                 </div>
//                                 </div>

//                                 <div className="col-4">
//                                 <div className="card card-bg" style={{height: "350px"}}>
//                                         <div className="card-header">
//                                         <h5 className="card-title">Your Shopping Cart</h5>
//                                         </div>
//                                         <div className="card-body">
//                                         <p className="card-text" id="cartBody">
//                                         </p>
//                                         <b>Total: AED {cartValue}</b> 
//                                         </div>
//                                         <div className="card-footer">
                                         
//                                         <div className="d-grid">
//                                         <a href="#" className="btn btn-primary bg-purple">Confirm and Order Now</a>
//                                         </div>
//                                         </div>
//                                 </div>
//                                 </div>



//                     </div>



//                     </div>
                
//                 </div>
//             </div>  
//     </Fragment>




//   );
// }


// export default SpaScreen;
