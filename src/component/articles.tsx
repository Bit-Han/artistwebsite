import Image from "next/image";

export default function Articles() {
	const articles = [
		{
			title: "What's The Story Behind Tattooing",
			image: "/placeholder.svg?height=200&width=300",
			date: "March 15, 2024",
		},
		{
			title: "Top Tattoo Trends & Recommendations",
			image: "/placeholder.svg?height=200&width=300",
			date: "March 10, 2024",
		},
		{
			title: "Aftercare and Healing of Tattoo Advice",
			image: "/placeholder.svg?height=200&width=300",
			date: "March 5, 2024",
		},
	];

	return (
		<section id="articles" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8">
					{articles.map((article, index) => (
						<article key={index} className="group cursor-pointer">
							<div className="relative h-48 mb-4 overflow-hidden rounded-lg">
								<Image
									src={article.image || "/placeholder.svg"}
									alt={article.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
								/>
							</div>
							<p className="text-sm text-gray-500 mb-2">{article.date}</p>
							<h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
								{article.title}
							</h3>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
