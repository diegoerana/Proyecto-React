import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import alta7 from "../assets/alta7.jpg"
import cartera from "../assets/accesorios2.png"
import conjunto from "../assets/otoño2.jpg"
import calza from "../assets/urbano1.jpg"


const items = [
	{ id:1, title:'Vestido Batik Monocromatico', price:5500, stock:4, pictureUrl:alta7},
	{ id:2, title:'Cartera con Tecnica Multicolor', price:6400, stock:6, pictureUrl:cartera},
	{ id:3, title:'Conjunto con tecnica Sky Blue', price:4800, stock:4, pictureUrl:conjunto},
	{ id:4, title:'Calza Monocromatica', price:2800, stock:9, pictureUrl:calza}
]

const task = new Promise((res, rej) => {
	setTimeout(() => res(items), 2000)
});

export default function ItemListContainer({greeting}) {
	const [ itemlist, setItemlist ] = useState([]);

	useEffect(()=>{
		task.then(res => setItemlist(res), err => setItemlist(err));
		console.log(itemlist);
	}, [itemlist])

	return <div className="item-list-container">
		<ItemList items={itemlist} />
	</div>
}

