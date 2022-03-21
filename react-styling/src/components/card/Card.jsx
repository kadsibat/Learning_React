import "./Card.scss"


function Card({veri}) {

  return (
    <div className="container">
        {veri.map((item) => {
            //destructing
            const { id, countries,capital,img,population}=item
            return(
                <div className="card" key={id}>
                <h1>{countries}</h1>
                <img src={img} alt="" />
                <h2>{capital}</h2>
                <h4>{population}</h4>
                <button className="card--small">SMALL</button>
                <button className="card--large">LARGE</button>
                </div>
            )
        })}

    </div>
  )
}

export default Card
