import {products} from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

export default function AllProductsPage() {
	return (
		<div className="bg-stone-50">
			<div className="bg-white border-b border-stone-200">
				<div className="container mx-auto px-4 lg:px-8 py-12">
					<h1 className="font-serif text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
						Все товары
					</h1>
					<p className="text-stone-600 text-lg">
						Полный каталог цветочных букетов, композиций и подарков
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product}/>
					))}
				</div>
			</div>
		</div>
	);
}
