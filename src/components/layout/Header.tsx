'use client';

import Link from 'next/link';
import {useState} from 'react';
import {Menu, Phone, ShoppingBag, X} from 'lucide-react';
import {categories} from '@/lib/data';
import {useCart} from '@/lib/cart-context';
import {usePathname} from "next/navigation";
import Image from 'next/image';

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const {totalItems} = useCart();
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	const LogoContent = () => (
		<div className="flex items-center gap-2">
			<div className="w-10 h-10 relative">
				<Image src="/images/favicons/favicon.svg" alt="Blooming Heart" fill className="object-contain"/>
			</div>
			<span className="font-serif text-2xl font-bold text-stone-900">
                Blooming Heart
			</span>
		</div>
	);

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
			<nav className="container mx-auto px-4 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					{isHomePage ? (
						<LogoContent/>
					) : (
						<Link href="/">
							<LogoContent/>
						</Link>
					)}

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-8">
						<Link href="/" className="text-stone-600 hover:text-rose-600 transition-colors">
							Главная
						</Link>
						<div className="relative group">
							<button className="text-stone-600 hover:text-rose-600 transition-colors py-2">
								Каталог
							</button>
							<div
								className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
								<div className="bg-white rounded-xl shadow-xl border border-stone-100 p-4">
									{categories.map((cat) => (
										<Link
											key={cat.id}
											href={`/${cat.slug}`}
											className="block py-2 px-3 rounded-lg hover:bg-rose-50 text-stone-700 hover:text-rose-600 transition-colors"
										>
											{cat.name}
										</Link>
									))}
								</div>
							</div>
						</div>
						<Link href="/about" className="text-stone-600 hover:text-rose-600 transition-colors">
							О фирме
						</Link>
						<Link href="/contacts" className="text-stone-600 hover:text-rose-600 transition-colors">
							Контакты
						</Link>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-4">
						<a href="tel:+78001234567"
						   className="hidden md:flex items-center gap-2 text-stone-600 hover:text-rose-600">
							<Phone className="w-4 h-4"/>
							<span className="font-medium">+7 (800) 123-45-67</span>
						</a>

						{/* Корзина - теперь ссылка на страницу корзины */}
						<Link
							href="/cart"
							className="relative p-2 text-stone-600 hover:text-rose-600 transition-colors"
						>
							<ShoppingBag className="w-6 h-6"/>
							{totalItems > 0 && (
								<span
									className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
							)}
						</Link>

						<button
							className="lg:hidden p-2 text-stone-600"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="lg:hidden py-4 border-t border-stone-100">
						<div className="flex flex-col gap-4">
							<Link href="/" className="text-stone-700 font-medium py-2"
							      onClick={() => setMobileMenuOpen(false)}>
								Главная
							</Link>
							{categories.map((cat) => (
								<Link
									key={cat.id}
									href={`/${cat.slug}`}
									className="text-stone-600 py-2 pl-4 border-l-2 border-rose-200"
									onClick={() => setMobileMenuOpen(false)}
								>
									{cat.name}
								</Link>
							))}
							<Link href="/about" className="text-stone-700 font-medium py-2"
							      onClick={() => setMobileMenuOpen(false)}>
								О фирме
							</Link>
							<Link href="/contacts" className="text-stone-700 font-medium py-2"
							      onClick={() => setMobileMenuOpen(false)}>
								Контакты
							</Link>
							<Link href="/cart" className="text-stone-700 font-medium py-2 flex items-center gap-2"
							      onClick={() => setMobileMenuOpen(false)}>
								<ShoppingBag className="w-5 h-5"/>
								Корзина ({totalItems})
							</Link>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
