'use client';

import Link from 'next/link';
import {Product} from '@/types';
import {ShoppingBag, Star} from 'lucide-react';
import {useCart} from '@/lib/cart-context';
import React from "react";

interface Props {
	product: Product;
}

export default function ProductCard({product}: Props) {
	const {addToCart} = useCart();

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		addToCart(product);
	};

	return (
		<div
			className="grid grid-cols-1 grid-rows-[auto_1fr] group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
			<Link href={`/products/${product.id}`}>
				<div className="relative aspect-square overflow-hidden bg-stone-100">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					{product.oldPrice && (
						<div
							className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
							Скидка
						</div>
					)}
					<button
						onClick={handleAddToCart}
						className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-stone-600 hover:text-rose-600 hover:bg-rose-50 transition-all transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
					>
						<ShoppingBag className="w-5 h-5"/>
					</button>
				</div>
			</Link>

			<div className="p-5 flex flex-col">
				<div className="flex items-center gap-1 mb-2">
					<Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
					<span className="text-sm text-stone-600">{product.rating}</span>
					<span className="text-stone-300">•</span>
					<span className="text-sm text-stone-500">{product.reviews} отзывов</span>
				</div>

				<Link href={`/products/${product.id}`}>
					<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2 group-hover:text-rose-600 transition-colors">
						{product.name}
					</h3>
				</Link>

				<p className="text-stone-500 text-sm line-clamp-2 mb-4">
					{product.description}
				</p>

				<div className="flex items-center justify-between mt-auto">
					<div className="flex items-center gap-3">
            <span className="text-xl font-bold text-stone-900">
              {product.price.toLocaleString('ru-RU')} ₽
            </span>
						{product.oldPrice && (
							<span className="text-stone-400 line-through">
                {product.oldPrice.toLocaleString('ru-RU')} ₽
              </span>
						)}
					</div>

					<button
						onClick={handleAddToCart}
						className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all"
						title="Добавить в корзину"
					>
						<ShoppingBag className="w-5 h-5"/>
					</button>
				</div>
			</div>
		</div>
	);
}
