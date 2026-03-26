import {Award, Heart, Leaf, Users} from 'lucide-react';

export default function AboutPage() {
	const values = [
		{
			icon: Heart,
			title: 'С любовью',
			description: 'Каждый букет собирается с душой и вниманием к деталям'
		},
		{
			icon: Leaf,
			title: 'Экологичность',
			description: 'Используем только натуральные материалы и упаковку'
		},
		{
			icon: Users,
			title: 'Профессионалы',
			description: 'Команда опытных флористов с международным образованием'
		},
		{
			icon: Award,
			title: 'Качество',
			description: 'Прямые поставки от лучших мировых плантаций'
		}
	];

	return (
		<>
			<section className="bg-stone-900 text-white py-24">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="max-w-3xl">
						<h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
							Создаем красоту<br/>
							<span className="text-rose-400">с 2015 года</span>
						</h1>
						<p className="text-xl text-stone-300 leading-relaxed">
							Blooming Heart — это не просто цветочный магазин. Это место, где рождаются эмоции.
						</p>
					</div>
				</div>
			</section>

			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="relative">
							<div className="aspect-[4/5] rounded-3xl overflow-hidden">
								<img
									src="/images/about.jpg"
									alt="Наша мастерская"
									className="w-full h-full object-cover"
								/>
							</div>
							<div
								className="absolute -bottom-8 -right-8 bg-rose-600 text-white p-8 rounded-2xl hidden lg:block">
								<p className="text-4xl font-bold font-serif mb-1">11</p>
								<p className="text-rose-100">лет опыта</p>
							</div>
						</div>

						<div>
							<h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">
								Наша история
							</h2>
							<div className="space-y-4 text-stone-600 text-lg leading-relaxed">
								<p>
									Всё началось с маленького павильона на углу и большой мечты. Сегодня
									Blooming Heart — это сеть премиальных флористических салонов.
								</p>
								<p>
									Мы верим, что цветы способны изменить день любого человека. Именно поэтому
									мы подходим к каждому заказу с особым вниманием.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 bg-stone-50">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">
							Наши ценности
						</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, idx) => (
							<div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
								<div
									className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
									<value.icon className="w-7 h-7 text-rose-600"/>
								</div>
								<h3 className="font-serif text-xl font-bold text-stone-900 mb-3">{value.title}</h3>
								<p className="text-stone-600">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
