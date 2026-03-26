'use client';

import {ShoppingBag} from 'lucide-react';
import {useCart} from '@/lib/cart-context';
import {Product} from '@/types';

interface Props {
	product: Product;
}

export default function AddToCartButton({product}: Props) {
	const {addToCart} = useCart();

	const handleAddToCart = () => {
		addToCart(product);
	};

	return (
		<button
			onClick={handleAddToCart}
			className="flex-1 bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all hover:shadow-lg hover:shadow-rose-200 active:scale-95 flex items-center justify-center gap-2 max-w-2xs"
		>
			<ShoppingBag className="w-5 h-5"/>
			Добавить в корзину
		</button>
	);
}
