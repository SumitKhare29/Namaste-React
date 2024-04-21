import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

//const heading = React.createElement("h1",{id:"heading"},"React replaced previous code");
//JSX(transpiled before it reaches the JS)- Parcel - Babel
//JSX=> React.createElement=>ReactElement-JS Object=> HTML Element(render)
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