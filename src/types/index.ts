export interface Product {
	id: string;
	name: string;
	category: 'bouquets' | 'compositions' | 'congratulations' | 'potted';
	price: number;
	oldPrice?: number;
	image: string;
	description: string;
	composition: string[];
	inStock: boolean;
	rating: number;
	reviews: number;
}

export interface Category {
	id: string;
	name: string;
	slug: string;
	description: string;
	image: string;
}
