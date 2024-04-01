import Card from '../../components/Card/Card.jsx';
import '../../style/pages.css';

import tomatoImg from '../../image/tomato.jpeg';
import onionImg from '../../image/onion.jpg';
import carrotImg from '../../image/carrot.jpg';
import potatoImg from '../../image/potato.jpg';
import cabbageImg from '../../image/cabbage.jpg';
import broccoliImg from '../../image/broccoli.jpg';
import beetrootImg from '../../image/beetroot.jpeg';
import garlicImg from '../../image/garlic.jpg';
import capsicumImg from '../../image/capsicum.jpg';
import mushroomImg from '../../image/mushroom.jpg';

export const goods = [
    { id: 1, name: "Tomato", img: tomatoImg, harvest: "27-03-2024", price: 53 },
    { id: 2, name: "Onion", img: onionImg, harvest: "10-03-2024", price: 20 },
    { id: 3, name: "Carrot", img: carrotImg, harvest: "15-03-2024", price: 30 },
    { id: 4, name: "Potato", img: potatoImg, harvest: "21-03-2024", price: 20 },
    { id: 5, name: "Cabbage", img: cabbageImg, harvest: "11-03-2024", price: 25 },
    { id: 6, name: "Broccoli", img: broccoliImg, harvest: "17-03-2024", price: 55 },
    { id: 7, name: "Beetroot", img: beetrootImg, harvest: "20-03-2024", price: 34 },
    { id: 8, name: "Garlic", img: garlicImg, harvest: "08-03-2024", price: 15 },
    { id: 9, name: "Capsicum", img: capsicumImg, harvest: "25-03-2024", price: 35 },
    { id: 10, name: "Mushroom", img: mushroomImg, harvest: "29-03-2024", price: 40 }
];

export default function Goods() {

    const wares = goods.map(item => <Card key={item.id} ware={item} />)

    return (
        <div className='card-wrap'>
            {wares}
        </div>
    );
}