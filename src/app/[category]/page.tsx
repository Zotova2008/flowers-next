import {categories, getProductsByCategory} from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import {notFound} from 'next/navigation';

interface Props {
	params: Promise<{ category: string }>;  // Next.js 15+ требует Promise
}

// Генерация статических путей (обязательно для статической генерации)
export async function generateStaticParams() {
	return categories.map((cat) => ({
		category: cat.slug,
	}));
}

// Метаданные
export async function generateMetadata({params}: Props) {
	const {category} = await params;
	const cat = categories.find(c => c.slug === category);

	return {
		title: cat ? `${cat.name} | Blooming Heart` : 'Not Found',
	};
}

export default async function CategoryPage({params}: Props) {
	const {category} = await params;
	const cat = categories.find(c => c.slug === category);
	const products = getProductsByCategory(category);

	if (!cat) {
		notFound();
	}

	return (
		<div className="bg-stone-50">
			<div className="bg-white border-b border-stone-200">
				<div className="container mx-auto px-4 lg:px-8 py-12">
					<h1 className="font-serif text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
						{cat.name}
					</h1>
					<p className="text-stone-600 text-lg">{cat.description}</p>
				</div>
			</div>

			<div className="container mx-auto px-4 lg:px-8 py-12">
				{products.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{products.map((product) => (
							<ProductCard key={product.id} product={product}/>
						))}
					</div>
				) : (
					<p className="text-center text-stone-500 py-12">
						Товары в этой категории временно отсутствуют
					</p>
				)}
			</div>
		</div>
	);
}
