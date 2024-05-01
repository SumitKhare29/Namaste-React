import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';

//const heading = React.createElement("h1",{id:"heading"},"React replaced previous code");
//JSX(transpiled before it reaches the JS)- Parcel - Babel
//JSX=> React.createElement=>ReactElement-JS Object=> HTML Element(render)
const Applayout = () =>{
    return(
        <div className='app'>
            <Header/>
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applayout/>,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ],
        errorElement:<Error/>
    }
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);