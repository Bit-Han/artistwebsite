"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Clock, DollarSign, User } from "lucide-react";

export default function BookingPage() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		new Date()
	);
	const [selectedTime, setSelectedTime] = useState("");
	const [selectedService, setSelectedService] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		description: "",
		size: "",
		placement: "",
	});

	const services = [
		{
			name: "Small Tattoo (2-4 inches)",
			price: "$150-300",
			duration: "1-2 hours",
		},
		{
			name: "Medium Tattoo (4-6 inches)",
			price: "$300-600",
			duration: "2-4 hours",
		},
		{ name: "Large Tattoo (6+ inches)", price: "$600+", duration: "4+ hours" },
		{ name: "Cover-up Tattoo", price: "$400+", duration: "3+ hours" },
		{ name: "Touch-up Service", price: "$100-200", duration: "1 hour" },
		{ name: "Consultation Only", price: "$50", duration: "30 minutes" },
	];

	const timeSlots = [
		"10:00 AM",
		"11:00 AM",
		"12:00 PM",
		"1:00 PM",
		"2:00 PM",
		"3:00 PM",
		"4:00 PM",
		"5:00 PM",
		"6:00 PM",
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle booking submission
		console.log("Booking submitted:", {
			date: selectedDate,
			time: selectedTime,
			service: selectedService,
			...formData,
		});
		alert(
			"Booking request submitted! We'll contact you within 24 hours to confirm."
		);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Book Your Appointment
					</h1>
					<p className="text-xl text-gray-600">
						Let us create something amazing together
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Services */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<DollarSign className="w-5 h-5" />
								Services & Pricing
							</CardTitle>
							<CardDescription>
								Choose the service that best fits your needs
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{services.map((service, index) => (
									<div
										key={index}
										className={`p-4 border rounded-lg cursor-pointer transition-colors ${
											selectedService === service.name
												? "border-black bg-gray-50"
												: "border-gray-200 hover:border-gray-300"
										}`}
										onClick={() => setSelectedService(service.name)}
									>
										<h3 className="font-semibold">{service.name}</h3>
										<div className="flex justify-between text-sm text-gray-600 mt-1">
											<span>{service.price}</span>
											<span>{service.duration}</span>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Booking Form */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<User className="w-5 h-5" />
								Your Information
							</CardTitle>
							<CardDescription>
								Tell us about yourself and your tattoo idea
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<Input
									placeholder="Full Name"
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									required
								/>
								<Input
									type="email"
									placeholder="Email Address"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									required
								/>
								<Input
									type="tel"
									placeholder="Phone Number"
									value={formData.phone}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
									required
								/>
								<Input
									placeholder="Desired Size (e.g., 4x6 inches)"
									value={formData.size}
									onChange={(e) =>
										setFormData({ ...formData, size: e.target.value })
									}
								/>
								<Input
									placeholder="Placement on Body"
									value={formData.placement}
									onChange={(e) =>
										setFormData({ ...formData, placement: e.target.value })
									}
								/>
								<Textarea
									placeholder="Describe your tattoo idea in detail..."
									rows={4}
									value={formData.description}
									onChange={(e) =>
										setFormData({ ...formData, description: e.target.value })
									}
									required
								/>
							</form>
						</CardContent>
					</Card>
				</div>

				{/* Date and Time Selection */}
				<div className="grid md:grid-cols-2 gap-8 mt-8">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<CalendarDays className="w-5 h-5" />
								Select Date
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Calendar
								mode="single"
								selected={selectedDate}
								onSelect={setSelectedDate}
								disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
								className="rounded-md border"
							/>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Clock className="w-5 h-5" />
								Select Time
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-3 gap-2">
								{timeSlots.map((time) => (
									<Button
										key={time}
										variant={selectedTime === time ? "default" : "outline"}
										className="text-sm"
										onClick={() => setSelectedTime(time)}
									>
										{time}
									</Button>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Submit Button */}
				<div className="mt-8 text-center">
					<Button
						onClick={handleSubmit}
						size="lg"
						className="bg-black text-white hover:bg-gray-800 px-12 py-3"
						disabled={
							!selectedDate ||
							!selectedTime ||
							!selectedService ||
							!formData.name ||
							!formData.email
						}
					>
						REQUEST APPOINTMENT
					</Button>
					<p className="text-sm text-gray-600 mt-4">
						We will contact you within 24 hours to confirm your appointment
					</p>
				</div>
			</div>
		</div>
	);
}
