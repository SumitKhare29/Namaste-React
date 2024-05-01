import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError(); //this will give us error details.
    console.log(err); 
  return (
    <div>
        <h1>Error aa gya h !!!</h1>
        
    </div>
  )
}

export default Error