"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

interface GalleryImage {
	id: string;
	title: string;
	description: string | null;
	image_url: string;
	category: string;
	is_featured: boolean;
}

export default function Gallery() {
	const [images, setImages] = useState<GalleryImage[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchGalleryImages();
	}, []);

	const fetchGalleryImages = async () => {
		try {
			const { data, error } = await supabase
				.from("gallery")
				.select("*")
				.order("created_at", { ascending: false })
				.limit(8);

			if (error) throw error;

			setImages(data || []);
		} catch (error) {
			console.error("Error fetching gallery images:", error);
			// Fallback to placeholder images
			setImages([
				{
					id: "1",
					title: "Tattoo 1",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
				{
					id: "2",
					title: "Tattoo 2",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
				{
					id: "3",
					title: "Tattoo 3",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
				{
					id: "4",
					title: "Tattoo 4",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
				{
					id: "5",
					title: "Tattoo 5",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
				{
					id: "6",
					title: "Tattoo 6",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
				{
					id: "7",
					title: "Tattoo 7",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
				{
					id: "8",
					title: "Tattoo 8",
					description: null,
					image_url: "/placeholder.svg?height=300&width=300",
					category: "general",
					is_featured: false,
				},
			]);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<section id="gallery" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl md:text-5xl font-bold mb-12">
						CHECK MY
						<br />
						GALLERY:
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
						{[...Array(8)].map((_, index) => (
							<div
								key={index}
								className="aspect-square bg-gray-200 rounded-lg animate-pulse"
							/>
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section id="gallery" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold mb-12">
					CHECK MY
					<br />
					GALLERY:
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
					{images.map((image) => (
						<div
							key={image.id}
							className="aspect-square overflow-hidden rounded-lg group"
						>
							<Image
								src={image.image_url || "/placeholder.svg"}
								alt={image.title}
								width={300}
								height={300}
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 filter grayscale hover:grayscale-0"
							/>
						</div>
					))}
				</div>

				<div className="text-center">
					<button className="bg-black text-white hover:bg-gray-800">
						VIEW ALL
					</button>
				</div>
			</div>
		</section>
	);
}
