
export default function Stats() {
	const stats = [
		{ percentage: "90%", label: "BEST TATTOO ART" },
		{ percentage: "80%", label: "HAPPY CLIENTS" },
		{ percentage: "75%", label: "CUSTOM DESIGNS" },
		{ percentage: "95%", label: "SATISFACTION RATE" },
	];

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="h-40 w-40 border border-gray-200 rounded-full flex items-center justify-center ml-15">
								<p className="text-5xl md:text-5xl font-bold p-2">
									{stat.percentage}
								</p>
							</div>
							<div className="text-sm text-gray-600 font-medium">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
  