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
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
			</div>

			<div className="relative z-10 flex-col justify-end items-end text-center text-white max-w-4xl mx-auto px-4">
				<h1 className="text-6xl md:text-8xl font-bold mb-6">I am Void Sir.</h1>
				<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
					Creating unique tattoo art that tells your story. Every piece is
					crafted with precision and passion.
				</p>
				<Link href="/booking">
					<button
						className="bg-white text-gray-800 hover:shadow-xl text-lg px-8 py-3 rounded-xl transition-colors duration-300"
					>
						HIRE ME
					</button>
				</Link>
			</div>
		</section>
	);
}
