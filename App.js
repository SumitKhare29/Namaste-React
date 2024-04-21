import React from 'react';
import ReactDOM from 'react-dom/client';

//const heading = React.createElement("h1",{id:"heading"},"React replaced previous code");
//JSX(transpiled before it reaches the JS)- Parcel - Babel
//JSX=> React.createElement=>ReactElement-JS Object=> HTML Element(render)
const resList=[
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rdwdcobiztpoq8ohp3pb",
        "name": "Spicy Chicken Wings",
        "restaurant": "The Grill House",
        "rating": 4.5,
        "cuisine": "American"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fcc0c1ea-aef9-4c8d-8b43-568a3b2e0808_506982.jpg",
        "name": "Margherita Pizza",
        "restaurant": "Pizza Palace",
        "rating": 4.8,
        "cuisine": "Italian"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fcc0c1ea-aef9-4c8d-8b43-568a3b2e0808_506982.jpg",
        "name": "Sushi Platter",
        "restaurant": "Tokyo Sushi Bar",
        "rating": 4.6,
        "cuisine": "Japanese"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
        "name": "Taco Sampler",
        "restaurant": "Mexican Bistro",
        "rating": 4.4,
        "cuisine": "Mexican"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kkhxj0otcsgziyt7vnl5",
        "name": "Pad Thai",
        "restaurant": "Thai Delight",
        "rating": 4.7,
        "cuisine": "Thai"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mrx9cr6gmscdoz3xeugm",
        "name": "Classic Burger",
        "restaurant": "Burger Joint",
        "rating": 4.3,
        "cuisine": "American"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qzdlujtabkwbgktiacwf",
        "name": "Paneer Tikka Masala",
        "restaurant": "Taste of India",
        "rating": 4.9,
        "cuisine": "Indian"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ukz2vhhwniawkccgddn0",
        "name": "Miso Ramen",
        "restaurant": "Ramen House",
        "rating": 4.7,
        "cuisine": "Japanese"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ul9xzko9eliviajj2wft",
        "name": "Falafel Wrap",
        "restaurant": "Mediterranean Eats",
        "rating": 4.6,
        "cuisine": "Mediterranean"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
        "name": "BBQ Ribs",
        "restaurant": "Smokehouse Grill",
        "rating": 4.5,
        "cuisine": "American"
      }
    ];
  
const Header =() =>{
    return(
        <>
        <div className='header'>
            <div className='logo'>
                <img className='logo-image'src='https://i.pinimg.com/550x/72/7e/f7/727ef7286f28b289fd1188eefdd2b626.jpg'></img>
            </div>
            <div className='nav-items'>
            <ul className='nav-items-list'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
     </>
    );
}
const Cards=(props) =>{
    const {cards}= props;
    const{image,name,restaurant,cuisine,rating}=cards;
    return(
        <>
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='res-image' src={image}></img>
            <h3>{name}</h3>
            <h4>{restaurant}</h4>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
        </div>
        </>
    );
}

const Body =() =>{
    return(
        <>
        <div className='body'>
            <div className='search'>Will Implement Search</div>
            <div className='res-container'>
                {resList.map((resData)=><Cards key={name} cards = {resData}/>)}
            </div>
            
            
        </div>
        </>
    );
}
const Applayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);