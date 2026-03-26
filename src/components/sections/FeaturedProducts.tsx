import {Product} from '@/types';
import ProductCard from '@/components/ui/ProductCard';
import Link from "next/link";

interface Props {
	products: Product[];
}

export default function FeaturedProducts({products}: Props) {
	return (
		<section className="py-24 bg-stone-50">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex justify-between items-end mb-12">
					<div>
						<h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Популярные товары</h2>
						<p className="text-stone-600">Лучшие предложения этого месяца</p>
					</div>
					<Link href="/products" className="text-rose-600 font-medium hover:text-rose-700">
						Смотреть все →
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product}/>
					))}
				</div>
			</div>
		</section>
	);
}
