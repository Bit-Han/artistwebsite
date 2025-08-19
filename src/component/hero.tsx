import Image from "next/image";
import Link from "next/link";
import heroimage from "../../public/images/hero-image.png";
// import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative h-screen flex items-center justify-center"
		>
			<div className="absolute inset-0 z-0">
				<Image
					src={heroimage}
					alt="Tattoo artist at work"
					fill
					className="object-fill md:object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
			</div>

			<div className="relative z-10 left-75 flex-col justify-end items-end text-start text-white max-w-xl mx-auto px-2">
				<h1 className="text-5xl md:text-8xl sm:text-4xl font-bold mb-6">I`m Void Sir.</h1>
				<p className="text-sm font-light md:text-sm mb-8 mx-auto">
					Creating unique tattoo art that tells your story. Every piece is
					crafted with precision and passion.
				</p>
				<Link href="/booking">
					<button className="border border-gray-100 text-white hover:shadow-xl text-lg px-8 py-3 rounded-xl transition-colors duration-300">
						HIRE ME
					</button>
				</Link>
			</div>
		</section>
	);
}
