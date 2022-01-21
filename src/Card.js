import "./App.css";

function Card({ item }) {
  return (
    <div>
      <div className="outer-cards-container">
        <div className="cards-container">
            {item.map((val, id) => <CardContent id={id} title={val.title} img={val.img} price={val.price} desc={val.desc} />)}
        </div>
      </div>
    </div>
  );
}

function CardContent({id, title, img, price, desc}){
    return(
        <div className="card-container" key={id}>
            <div>
                <img className="img-container" src={img} alt={title}></img>
            </div>
            <div className="content-container">
                <div className="title-container">
                    {title} <br></br> Cost per serve : {price}
                </div>
                <div>
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default Card;
