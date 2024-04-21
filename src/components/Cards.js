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
export default Cards