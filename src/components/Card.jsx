import style from "./Card.module.css"

function Card({nome , email , body}) {
    return ( 
    <div className={style.div}>
        <ul className={style.ul}>
            <li>nome: {nome}</li>
            <li>email:{email}</li>
            <li>body: {body}</li>
        </ul>
    </div>
     );
}

export default Card;