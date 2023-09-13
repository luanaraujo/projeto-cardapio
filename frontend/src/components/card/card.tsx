import "./card.css"


interface CardProps{
    price: number,
    title: string,
    image: string,
    onDeleteClick: () => void;
}
export function Card({ price, image, title, onDeleteClick   } : CardProps){
    return(
        <div className="card">
        <img src={image}/>
        <div className="card-content">
        <h2>{title}</h2>
        <p><b>Valor:</b> {price}</p>
        <button onClick={onDeleteClick}>Remover</button>
      </div>
    </div>
    )
}