import '../../style/components.css'

export default function Card({ ware }) {
    return (
        <div className="card">
            <img src={ware.img} />
            <div className="card-info">
                <h2>Ware: {ware.name}</h2>
                <h3>Harvest: {ware.harvest}</h3>
                <h4>Price: {ware.price} UAH/kg</h4>
            </div>
        </div>
    );
}