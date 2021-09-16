import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import alta7 from "../assets/alta7.jpg"

const getItems = new Promise((res,rej) => {
		setTimeout(() => res({ id:1, title:'Vestido Batik Monocromatico', price:5500, stock:4, pictureUrl:alta7}), 2000);
})

export default function ItemDetailContainer() {
	const [ item, setItem ] = useState({});

	useEffect(() => {
		getItems.then(res => setItem(res))
		console.log(item);
	},[])

	return <ItemDetail {...item} />
}