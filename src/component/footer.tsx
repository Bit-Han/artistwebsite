import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">ABOUT VOID TATTOO</h3>
						<p className="text-gray-400 text-sm leading-relaxed">
							Professional tattoo studio dedicated to creating unique,
							high-quality artwork that tells your story.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#about" className="text-gray-400 hover:text-white">
									About Me
								</Link>
							</li>
							<li>
								<Link
									href="#gallery"
									className="text-gray-400 hover:text-white"
								>
									Gallery
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-gray-400 hover:text-white"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/booking"
									className="text-gray-400 hover:text-white"
								>
									Book Appointment
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">SERVICES</h3>
						<ul className="space-y-2 text-sm">
							<li className="text-gray-400">Custom Tattoo Design</li>
							<li className="text-gray-400">Cover-up Tattoos</li>
							<li className="text-gray-400">Touch-up Services</li>
							<li className="text-gray-400">Consultation</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
						<div className="space-y-2 text-sm text-gray-400">
							<p>123 Tattoo Street</p>
							<p>Art District, City 12345</p>
							<p>+1 (555) 123-4567</p>
							<p>hello@voidtattoo.com</p>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
					<p>&copy; 2024 The Void Tattoo. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
