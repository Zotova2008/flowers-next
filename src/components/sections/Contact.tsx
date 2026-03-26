import {MapPin, Phone} from 'lucide-react';

export default function Contact() {
	return (
		<section className="py-24 bg-stone-50">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">Свяжитесь с нами</h2>
						<p className="text-stone-600 mb-8 text-lg">
							Есть вопросы? Мы всегда на связи и готовы помочь с выбором.
						</p>
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
									<Phone className="w-6 h-6 text-rose-600"/>
								</div>
								<div>
									<p className="font-semibold text-stone-900">Телефон</p>
									<p className="text-stone-600">+7 (800) 123-45-67</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
									<MapPin className="w-6 h-6 text-rose-600"/>
								</div>
								<div>
									<p className="font-semibold text-stone-900">Адрес</p>
									<p className="text-stone-600">ул. Цветочная, 15, Москва</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
