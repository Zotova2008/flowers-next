'use client';

import Link from 'next/link';
import {categories} from '@/lib/data';

export default function Categories() {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Категории товаров</h2>
					<p className="text-stone-600">Выберите идеальный подарок из нашего ассортимента</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{categories.map((category) => (
						<Link key={category.id} href={`/${category.slug}`} className="group block">
							<div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
								<img src={category.image} alt={category.name}
								     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
								<div className="absolute bottom-0 left-0 p-6">
									<h3 className="text-white font-serif text-2xl font-bold mb-2 group-hover:text-rose-300 transition-colors">
										{category.name}
									</h3>
									<p className="text-white/80 text-sm">{category.description}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
