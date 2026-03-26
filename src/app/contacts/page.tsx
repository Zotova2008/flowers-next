'use client';

import {MapPin, Phone} from 'lucide-react';
import React, {useState} from 'react';

export default function ContactsPage() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		message: ''
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Сообщение отправлено!');
	};

	return (
		<div className="bg-stone-50">
			<div className="bg-white border-b border-stone-200">
				<div className="container mx-auto px-4 lg:px-8 py-12">
					<h1 className="font-serif text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
						Контакты
					</h1>
				</div>
			</div>

			<div className="container mx-auto px-4 lg:px-8 py-12">
				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
							<h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">Наши координаты</h2>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div
										className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
										<MapPin className="w-6 h-6 text-rose-600"/>
									</div>
									<div>
										<h3 className="font-semibold text-stone-900 mb-1">Адрес</h3>
										<p className="text-stone-600">ул. Цветочная, 15<br/>г. Москва, 123456</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div
										className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
										<Phone className="w-6 h-6 text-rose-600"/>
									</div>
									<div>
										<h3 className="font-semibold text-stone-900 mb-1">Телефон</h3>
										<p className="text-stone-600">+7 (800) 123-45-67</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
						<h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Напишите нам</h2>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-stone-700 mb-2">Ваше имя</label>
								<input
									type="text"
									required
									className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:border-rose-500"
									placeholder="Иван Иванов"
									onChange={(e) => setFormData({...formData, name: e.target.value})}
								/>
							</div>

							<button type="submit"
							        className="w-full bg-rose-600 text-white py-4 rounded-xl font-semibold hover:bg-rose-700 transition-all">
								Отправить сообщение
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
