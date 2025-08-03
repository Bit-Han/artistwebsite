import Image from "next/image";

export default function Philosophy() {
	return (
		<section className="py-20 bg-black text-white">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Consider What You Desire. Your Tattoo Artist Will Never Tell You
							What Tattoo To Have.
						</h2>
					</div>
					<div className="relative h-96">
						<Image
							src="/placeholder.svg?height=400&width=400"
							alt="Tattoo artist philosophy"
							fill
							className="object-cover rounded-lg filter grayscale"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
