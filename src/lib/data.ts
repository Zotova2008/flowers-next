import {Category, Product} from "@/types";

export const basePath = process.env.BASE_PATH || '';

export const categories: Category[] = [
	{
		id: '1',
		name: 'Букеты',
		slug: 'bouquets',
		description: 'Классические и авторские букеты из свежих цветов',
		image: `${basePath}/images/first-screen.jpg`,
	},
	{
		id: '2',
		name: 'Композиции',
		slug: 'compositions',
		description: 'Цветочные композиции в коробках и корзинах',
		image: `${basePath}/images/catalog-2.jpg`
	},
	{
		id: '3',
		name: 'Поздравления',
		slug: 'congratulations',
		description: 'Праздничные цветочные наборы с открытками',
		image: `${basePath}/images/catalog-3.jpg`
	},
	{
		id: '4',
		name: 'Цветы в горшках',
		slug: 'potted',
		description: 'Комнатные растения и цветы в декоративных горшках',
		image: `${basePath}/images/catalog-4.jpg`
	}
];

export const products: Product[] = [
	{
		id: 'b1',
		name: 'Розовое Облако',
		category: 'bouquets',
		price: 3500,
		image: `${basePath}/images/product-1.jpg`,
		description: 'Нежный букет из розовых пионов и эустомы.',
		composition: ['Пионы - 5 шт', 'Эустома - 3 шт'],
		inStock: true,
		rating: 4.9,
		reviews: 128
	},
	{
		id: 'b2',
		name: 'Солнечный Свет',
		category: 'bouquets',
		price: 2800,
		image: `${basePath}/images/product-2.jpg`,
		description: 'Яркий букет из подсолнухов.',
		composition: ['Подсолнухи - 7 шт'],
		inStock: true,
		rating: 4.8,
		reviews: 96
	},
	{
		id: 'c1',
		name: 'Королевская Ночь',
		category: 'compositions',
		price: 5500,
		image: `${basePath}/images/product-3.jpg`,
		description: 'Роскошная композиция из красных роз.',
		composition: ['Розы - 25 шт'],
		inStock: true,
		rating: 5.0,
		reviews: 45
	},
	{
		id: 'c2',
		name: 'Весенний Микс',
		category: 'compositions',
		price: 3200,
		image: `${basePath}/images/product-4.jpg`,
		description: 'Разноцветная композиция.',
		composition: ['Тюльпаны', 'Нарциссы'],
		inStock: true,
		rating: 4.7,
		reviews: 67
	},
	{
		id: 'p1',
		name: 'Монстера',
		category: 'potted',
		price: 2500,
		image: `${basePath}/images/product-5.jpg`,
		description: 'Модное растение для интерьера.',
		composition: ['Монстера 80см', 'Горшок керамика'],
		inStock: true,
		rating: 4.6,
		reviews: 78
	},
	{
		id: 'p2',
		name: 'Орхидея',
		category: 'potted',
		price: 4200,
		image: `${basePath}/images/product-6.jpg`,
		description: 'Элегантная белая орхидея.',
		composition: ['Орхидея', 'Кашпо стекло'],
		inStock: true,
		rating: 4.9,
		reviews: 156
	}
];

export const getProductsByCategory = (category: string) =>
	products.filter(p => p.category === category);
