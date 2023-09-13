import "./card.css"


interface CardProps{
    price: number,
    title: string,
    image: string,
    onDeleteClick: () => void;
}
export function Card({price, image, title, onDeleteClick} : CardProps){

    const handleDeleteClick = () => {
        const confirmDelete = window.confirm(`Deseja realmente excluir o item "${title}"?`);
        if (confirmDelete) {
          onDeleteClick(); // Chame a função de exclusão se o usuário confirmar
        }
      };

    return(
        <div className="card">
        <img src={image}/>
        <div className="card-content">
        <h2>{title}</h2>
        <p><b>Valor: </b>R$ {price}</p>
        <button onClick={handleDeleteClick}>Remover</button>
      </div>
    </div>
    )
}