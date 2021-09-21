import alta7 from "../assets/alta7.jpg"
import cartera from "../assets/accesorios2.png"
import conjunto from "../assets/otoño2.jpg"
import calza from "../assets/urbano1.jpg"

const categories = [
	{
		name: 'Sale', 
		icon: '🔥', 
		items: [
			{ id:1, title:'Vestido Batik Monocromatico', price:5500, stock:4, pictureUrl:alta7},
	        { id:2, title:'Cartera con Tecnica Multicolor', price:6400, stock:6, pictureUrl:cartera},
	        { id:3, title:'Conjunto con tecnica Sky Blue', price:4800, stock:4, pictureUrl:conjunto},
	        { id:4, title:'Calza Monocromatica', price:2800, stock:9, pictureUrl:calza}
		]
	},
	{
		name: 'Urbano',
        icon: '🧥',
		items: [
			{ id: 5, title:'70 Jeans', description: 'La campera de jean', price: 10000.00, stock:2, pictureUrl:'https://raw.githubusercontent.com/diegoerana/batikdebri/master/img/urbano5.jpg'},
			{ id: 6, title:'Chill Batik', description: 'Pantalon chill', price: 4200, stock:2, pictureUrl:'https://raw.githubusercontent.com/diegoerana/batikdebri/master/img/urbano3.jpg'},
			{ id: 7, title:'Shirt Cyan sky', description: 'Camisa turquesa', price: 3200, stock:2, pictureUrl:'https://raw.githubusercontent.com/diegoerana/batikdebri/master/img/urbano2.jpg'}
		]
	},
	{
		name: 'Accesorio',
		icon: '👜',
		items: [
			{ id: 8, title:'Red Blood', description: 'Cartera Batik Red Blood', price: 5000.00, stock:2, pictureUrl:'https://raw.githubusercontent.com/diegoerana/batikdebri/master/img/accesorios1.jpg'},
		]
	},
	{
		name: 'Alta Costura',
        icon: '👗',
		items: [
			{ id: 9, title:'Blue Paradise', description: 'High couture blue dress', price: 12000.00, stock:1, pictureUrl:'https://raw.githubusercontent.com/diegoerana/batikdebri/master/img/alta2.jpg'},
			{ id: 10, title:'Deep Ocean', description: 'Long Dress Cocktail', price: 2000.00, stock:1, pictureUrl:'https://raw.githubusercontent.com/diegoerana/batikdebri/master/img/alta5.jpg'},
		]
	}
]

const allProducts = () => categories.reduce((acc,cat) => [...acc, ...cat.items], []);

function getDelayed(items) {
	return new Promise((res, rej) => {
		setTimeout(() => res(items), 1000)
	})
}

// Retorna lista de 'products'
export function getAllProducts() {
	return getDelayed(allProducts())
	.then(res => {
		if (res) return res
		throw new Error('No items results')
	})
}

// Retorna objeto 'category'
export function getCategory(name) {
	return getDelayed(categories.find(e => e.name === name))
	.then(res => {
		if (res) return res
		throw new Error(`No '${name}' category.`)
	})
}

// Retorna objeto 'product'
export function getProductById(id) {
	return getDelayed(allProducts().find(e => e.id === id))
	.then(res => {
		if (res) return res
		throw new Error(`No '${id}' item results.`)
	})
}

// Retorna lista de objetos 'categories'
export default function getCategories() {
	return getDelayed(categories)
}