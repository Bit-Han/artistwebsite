"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold mb-12">
					GET IN TOUCH
					<br />
					WITH ME:
				</h2>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-semibold mb-4">LOCATION</h3>
								<div className="flex items-start space-x-3">
									<MapPin className="w-5 h-5 mt-1" />
									<div>
										<p>123 Tattoo Street</p>
										<p>Art District, City 12345</p>
										<p>United States</p>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-4">BUSINESS HOURS</h3>
								<div className="flex items-start space-x-3">
									<Clock className="w-5 h-5 mt-1" />
									<div>
										<p>Monday - Friday: 10:00 AM - 8:00 PM</p>
										<p>Saturday: 10:00 AM - 6:00 PM</p>
										<p>Sunday: Closed</p>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-4">CONTACT INFO</h3>
								<div className="space-y-2">
									<div className="flex items-center space-x-3">
										<Phone className="w-5 h-5" />
										<p>+1 (555) 123-4567</p>
									</div>
									<div className="flex items-center space-x-3">
										<Mail className="w-5 h-5" />
										<p>hello@voidtattoo.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<Input
								placeholder="Your name"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								required
							/>
							<Input
								type="email"
								placeholder="Your email address"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								required
							/>
							<Textarea
								placeholder="Tell me about your tattoo idea..."
								rows={6}
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								required
							/>
							<Button
								type="submit"
								className="bg-black text-white hover:bg-gray-800 w-full"
							>
								SEND MESSAGE
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
