
export default function About() {
	return (
		<section id="about" className="py-20 bg-white relative overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="relative flex items-center justify-center">
						{/* "01" with image as background fill */}
						<div className="relative">
							<div
								className="text-[16rem] md:text-[20rem] lg:text-[28rem] font-black leading-none select-none bg-clip-text text-transparent"
								style={{
									backgroundImage: `url('https://images.unsplash.com/photo-1575014774591-d036b92ae5ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
								}}
							>
								01
							</div>

							{/* Optional: Add a subtle border/outline to make the text more defined */}
							<div
								className="absolute inset-0 text-[16rem] md:text-[20rem] lg:text-[28rem] font-black leading-none select-none text-transparent"
								style={{
									WebkitTextStroke: "2px rgba(0,0,0,0.1)",
								}}
							>
								01
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
							MY
							<br />
							STORY:
						</h2>

						<div className="w-16 h-1 bg-black"></div>

						<div className="space-y-6">
							<p className="text-gray-700 leading-relaxed text-lg">
								With over a decade of experience in the tattoo industry, I`ve
								dedicated my life to perfecting the art of permanent body
								modification. My journey began in underground studios, learning
								from masters of the craft.
							</p>

							<p className="text-gray-600 leading-relaxed">
								Every tattoo is a collaboration between artist and canvas. I
								believe in taking the time to understand your vision and
								bringing it to life with precision, creativity, and respect for
								the permanence of the medium.
							</p>
							<button className="border-black text-black hover:bg-black hover:text-white bg-transparent">
								READ MORE →
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
