import Button from './Button.jsx';
import './Cart.css';

export default function Cart({ item }) {
    console.log(item)
    return (
        <div className="item">
            <img src={item.img} alt=""></img>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Button />
        </div>
    )
}