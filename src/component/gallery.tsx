import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gallery1 from "../../public/images/gallery1.png";
import gallery2 from "../../public/images/gallary2.png";
import gallery3 from "../../public/images/gallery3.png";
import gallery4 from "../../public/images/gallery4.png";
import gallery5 from "../../public/images/gallery5.png";
import gallery6 from "../../public/images/gallery6.png";
import gallery7 from "../../public/images/gallery7.png";

export default function Gallery() {
	const galleryImages = [
		{
			src: gallery1,
			alt: "Traditional Dragon Tattoo",
			title: "Traditional Dragon",
			category: "Traditional",
		},
		{
			src: gallery2,
			alt: "Geometric Mandala Tattoo",
			title: "Sacred Geometry",
			category: "Geometric",
		},
		{
			src: gallery3,
			alt: "Realistic Portrait Tattoo",
			title: "Portrait Realism",
			category: "Realistic",
		},
		{
			src: gallery4,
			alt: "Watercolor Flower Tattoo",
			title: "Watercolor Blooms",
			category: "Watercolor",
		},
		{
			src: gallery5,
			alt: "Blackwork Sleeve Tattoo",
			title: "Blackwork Sleeve",
			category: "Blackwork",
		},
		{
			src: gallery6,
			alt: "Minimalist Line Tattoo",
			title: "Minimalist Lines",
			category: "Minimalist",
		},
		{
			src: gallery7,
			alt: "Neo Traditional Tattoo",
			title: "Neo Traditional Rose",
			category: "Traditional",
		},
		{
			src: gallery7,
			alt: "Japanese Koi Tattoo",
			title: "Japanese Koi",
			category: "Traditional",
		},
	];

	return (
		<section id="gallery" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold mb-12">
					CHECK MY
					<br />
					GALLERY:
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
					{galleryImages.map((image, index) => (
						<div
							key={index}
							className="aspect-square overflow-hidden rounded-lg group"
						>
							<Image
								src={image.src || "/placeholder.svg"}
								alt={image.alt}
								width={300}
								height={300}
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 filter grayscale hover:grayscale-0"
							/>
						</div>
					))}
				</div>

				<div className="text-center">
					<Link href="/gallery">
						<Button className="bg-black text-white hover:bg-gray-800">
							VIEW ALL
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
