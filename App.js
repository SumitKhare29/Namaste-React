import React from 'react';
import ReactDOM from 'react-dom/client';

//const heading = React.createElement("h1",{id:"heading"},"React replaced previous code");
//JSX(transpiled before it reaches the JS)- Parcel - Babel
//JSX=> React.createElement=>ReactElement-JS Object=> HTML Element(render)
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
const Cards=() =>{
    return(
        <>
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='res-image' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bfyfysiv4ekylrdkryel'></img>
            <h3>Meghana Foods</h3>
            <h4>Indian, Biryani</h4>
            <h4>40 mins</h4>
            <h4>4.4 Stars</h4>
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
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                
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