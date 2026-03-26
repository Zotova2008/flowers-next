import Link from 'next/link';
import {Mail, MapPin, Phone} from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-stone-900 text-stone-300 py-16">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div>
						<h3 className="font-serif text-2xl text-white mb-6">Blooming Heart</h3>
						<p className="mb-6 text-stone-400">Создаем эмоции через цветы с 2015 года.</p>
						<div className="flex gap-4">
							<a href="mailto:test@test.ru"
							   className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-600">
								<Mail className="w-5 h-5"/>
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-6">Каталог</h4>
						<ul className="space-y-3">
							<li><Link href="/bouquets" className="hover:text-rose-400">Букеты</Link></li>
							<li><Link href="/compositions" className="hover:text-rose-400">Композиции</Link></li>
							<li><Link href="/congratulations" className="hover:text-rose-400">Поздравления</Link></li>
							<li><Link href="/potted" className="hover:text-rose-400">Цветы в горшках</Link></li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-6">Контакты</h4>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<MapPin className="w-5 h-5 text-rose-500"/>
								<span>ул. Цветочная, 15, Москва</span>
							</div>
							<a className="flex items-center gap-3 transition hover:text-rose-400 w-fit"
							   href="tel:+78001234567">
								<Phone className="w-5 h-5 text-rose-500"/>
								<span>+7 (800) 123-45-67</span>
							</a>
							<a className="flex items-center gap-3 transition hover:text-rose-400 w-fit"
							   href="mailto:test@test.u">
								<Mail className="w-5 h-5 text-rose-500"/>
								<span>hello@bloomingheart.ru</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
