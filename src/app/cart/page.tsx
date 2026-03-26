'use client';

import Link from 'next/link';
import {useCart} from '@/lib/cart-context';
import {ArrowRight, Minus, Plus, ShoppingBag, Trash2} from 'lucide-react';

export default function CartPage() {
	const {items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart} = useCart();

	if (items.length === 0) {
		return (
			<div className="bg-stone-50 py-24">
				<div className="container mx-auto px-4 lg:px-8 text-center">
					<div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
						<ShoppingBag className="w-12 h-12 text-stone-400"/>
					</div>
					<h1 className="font-serif text-3xl font-bold text-stone-900 mb-4">Корзина пуста</h1>
					<p className="text-stone-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
					<Link
						href="/products"
						className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all"
					>
						Смотреть каталог
						<ArrowRight className="w-5 h-5"/>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-stone-50 py-12">
			<div className="container mx-auto px-4 lg:px-8">
				<h1 className="font-serif text-4xl font-bold text-stone-900 mb-8">Корзина ({totalItems})</h1>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Список товаров */}
					<div className="lg:col-span-2 space-y-4">
						{items.map((item) => (
							<div key={item.product.id}
							     className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex gap-4">
								<img
									src={item.product.image}
									alt={item.product.name}
									className="w-24 h-24 object-cover rounded-xl"
								/>

								<div className="flex-1">
									<div className="flex justify-between items-start mb-2">
										<Link
											href={`/products/${item.product.id}`}
											className="font-serif text-lg font-semibold text-stone-900 hover:text-rose-600 transition-colors"
										>
											{item.product.name}
										</Link>
										<button
											onClick={() => removeFromCart(item.product.id)}
											className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
										>
											<Trash2 className="w-5 h-5"/>
										</button>
									</div>

									<p className="text-stone-500 text-sm mb-4">{item.product.description}</p>

									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<button
												onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
												className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-rose-300 hover:text-rose-600 transition-all"
											>
												<Minus className="w-4 h-4"/>
											</button>
											<span className="font-semibold w-8 text-center">{item.quantity}</span>
											<button
												onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
												className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-rose-300 hover:text-rose-600 transition-all"
											>
												<Plus className="w-4 h-4"/>
											</button>
										</div>

										<div className="text-right">
											<p className="text-xl font-bold text-stone-900">
												{(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
											</p>
											<p className="text-sm text-stone-500">
												{item.product.price.toLocaleString('ru-RU')} ₽ / шт
											</p>
										</div>
									</div>
								</div>
							</div>
						))}

						<button
							onClick={clearCart}
							className="text-stone-500 hover:text-red-500 text-sm flex items-center gap-2 transition-colors"
						>
							<Trash2 className="w-4 h-4"/>
							Очистить корзину
						</button>
					</div>

					{/* Итого */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 sticky top-24">
							<h2 className="font-serif text-xl font-bold text-stone-900 mb-6">Итого</h2>

							<div className="space-y-3 mb-6">
								<div className="flex justify-between text-stone-600">
									<span>Товары ({totalItems})</span>
									<span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
								</div>
								<div className="flex justify-between text-stone-600">
									<span>Доставка</span>
									<span className="text-green-600">Бесплатно</span>
								</div>
								<div
									className="border-t border-stone-200 pt-3 flex justify-between text-lg font-bold text-stone-900">
									<span>К оплате</span>
									<span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
								</div>
							</div>

							<button
								className="w-full bg-rose-600 text-white py-4 rounded-full font-semibold hover:bg-rose-700 transition-all mb-4"
							>
								Оформить заказ
							</button>

							<Link
								href="/products"
								className="block text-center text-stone-600 hover:text-rose-600 transition-colors"
							>
								Продолжить покупки
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
