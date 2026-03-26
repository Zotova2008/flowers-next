import {products} from '@/lib/data';
import {notFound} from 'next/navigation';
import {Check, Clock, Shield, Star, Truck} from 'lucide-react';
import Link from 'next/link';
import AddToCartButton from '@/components/ui/AddToCartButton';

interface Props {
	params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
	return products.map((p) => ({
		productId: p.id,
	}));
}

export default async function ProductPage({params}: Props) {
	const {productId} = await params;
	const product = products.find(p => p.id === productId);

	if (!product) {
		notFound();
	}

	return (
		<article className="bg-stone-50 py-12">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Хлебные крошки */}
				<nav className="text-sm text-stone-500 mb-8">
					<Link href="/" className="hover:text-rose-600">Главная</Link>
					<span className="mx-2">/</span>
					<Link href={`/${product.category}`} className="hover:text-rose-600">
						{product.category === 'bouquets' ? 'Букеты' :
							product.category === 'compositions' ? 'Композиции' :
								product.category === 'congratulations' ? 'Поздравления' : 'Цветы в горшках'}
					</Link>
					<span className="mx-2">/</span>
					<span className="text-stone-900">{product.name}</span>
				</nav>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="bg-white rounded-3xl overflow-hidden shadow-sm h-[500px]">
						<img
							src={product.image}
							alt={product.name}
							className="block w-full h-full object-cover"
						/>
					</div>

					<div className="lg:py-8">
						<div className="flex items-center gap-2 mb-4">
							<div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
								<Star className="w-4 h-4 text-yellow-500 fill-yellow-500"/>
								<span className="font-semibold text-stone-900">{product.rating}</span>
								<span className="text-stone-500 text-sm">({product.reviews} отзывов)</span>
							</div>
							{product.inStock && (
								<span
									className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                  <Check className="w-4 h-4"/> В наличии
                </span>
							)}
						</div>

						<h1 className="font-serif text-4xl font-bold text-stone-900 mb-4">
							{product.name}
						</h1>

						<p className="text-stone-600 text-lg mb-6">
							{product.description}
						</p>

						<div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-stone-900">
                {product.price.toLocaleString('ru-RU')} ₽
              </span>
							{product.oldPrice && (
								<span className="text-2xl text-stone-400 line-through">
                  {product.oldPrice.toLocaleString('ru-RU')} ₽
                </span>
							)}
						</div>

						<div className="space-y-4 mb-8">
							<h3 className="font-semibold text-stone-900">Состав:</h3>
							<ul className="space-y-2">
								{product.composition.map((item, idx) => (
									<li key={idx} className="flex items-center gap-2 text-stone-600">
										<span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							{/* Клиентский компонент */}
							<AddToCartButton product={product}/>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-stone-200">
							<div className="flex items-center gap-3">
								<Truck className="w-6 h-6 text-rose-500"/>
								<div>
									<p className="font-medium text-stone-900">Доставка</p>
									<p className="text-sm text-stone-500">от 2 часов</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Shield className="w-6 h-6 text-rose-500"/>
								<div>
									<p className="font-medium text-stone-900">Гарантия</p>
									<p className="text-sm text-stone-500">свежесть 7 дней</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Clock className="w-6 h-6 text-rose-500"/>
								<div>
									<p className="font-medium text-stone-900">Приём заказов</p>
									<p className="text-sm text-stone-500">круглосуточно</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
