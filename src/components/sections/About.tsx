export default function About() {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="bg-stone-900 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
					<h2 className="font-serif text-4xl font-bold mb-6">Доверьте нам свои эмоции</h2>
					<p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
						Более 10 000 довольных клиентов выбрали нас для своих важных моментов
					</p>
					<button
						className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all">
						О нас
					</button>
				</div>
			</div>
		</section>
	);
}
