const Cards=(props) =>{
    const {cards}= props;
    const{image,name,restaurant,cuisine,rating}=cards;
    return(
        <>
        <div className='res-card m-4 p-4 w-52 h-[300px] rounded-lg bg-green-50 hover:bg-green-100 hover:border hover:shadow-xl'>
            <img className='res-image h-[150px] w-[200px] rounded-lg pb-1' src={image}></img>
            <h3>{name}</h3>
            <h4>{restaurant}</h4>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
        </div>
        </>
    );
}
export function PromotedCards(Cards){
    return (props)=>{
     return(
       <>
       <h1 className="absolute m-1 p-1 bg-black text-white rounded-lg">Promoted</h1>
       <Cards {...props}/>
       </>
     );
    }
    }
export default Cards