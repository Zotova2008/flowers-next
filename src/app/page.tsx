import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/Categories';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import {products} from '@/lib/data';

export default function Home() {
	const featuredProducts = products.slice(0, 4);

	return (
		<div className="animate-in fade-in duration-700">
			<Hero/>
			<Categories/>
			<FeaturedProducts products={featuredProducts}/>
			<About/>
			<Contact/>
		</div>
	);
}
