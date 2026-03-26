'use client';

import Link from 'next/link';
import {ArrowRight, Award, Clock, Truck} from 'lucide-react';
import {basePath} from "@/lib/data";

export default function Hero() {
	return (
		<section
			className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-stone-50">
			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-6">
              Премиум флористика в Москве
            </span>
						<h1 className="font-serif text-5xl lg:text-7xl font-bold text-stone-900 leading-tight mb-6">
							Дарите эмоции<br/>
							<span className="text-rose-600">через цветы</span>
						</h1>
						<p className="text-lg text-stone-600 mb-8 max-w-lg">
							Создаем уникальные букеты и композиции из свежайших цветов.
							Доставка за 2 часа по Москве.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link href="/products"
							      className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-700 transition-all">
								Смотреть каталог
								<ArrowRight className="w-5 h-5"/>
							</Link>
							<Link href="/contacts"
							      className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 border-2 border-stone-200 px-8 py-4 rounded-full font-medium hover:border-rose-200">
								Заказать звонок
							</Link>
						</div>

						<div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-stone-200">
							<div className="flex items-center gap-3">
								<Truck className="w-8 h-8 text-rose-500"/>
								<div>
									<p className="font-semibold text-stone-900">Быстрая доставка</p>
									<p className="text-sm text-stone-500">от 2 часов</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Clock className="w-8 h-8 text-rose-500"/>
								<div>
									<p className="font-semibold text-stone-900">Работаем 24/7</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Award className="w-8 h-8 text-rose-500"/>
								<div>
									<p className="font-semibold text-stone-900">Гарантия</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative hidden lg:block">
						<div className="relative rounded-3xl overflow-hidden shadow-2xl">
							<img
								src={`${basePath}/images/first-screen.jpg`}
								alt="Букет цветов"
								className="w-full h-[600px] object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
