import Gallery from "@/component/gallery";
import About from "../component/about";
import Hero from "../component/hero";
import Stats from "@/component/Stats";
import Testimonial from "@/component/Testimonial";
import Footer from "@/component/footer";
// import Articles from "@/component/articles";
import Philosophy from "@/component/philosophy";
import Contact from "@/component/contact";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<About />
			<Gallery />
			<Stats />
			<Testimonial />
			<Philosophy	/>
			{/* <Articles /> */}
			<Contact />
			<Footer />
		</main>
	);
}
