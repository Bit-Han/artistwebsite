"use client";

import { useState} from "react";
import Link from "next/link";
import { Menu, X ,	Instagram,
	Facebook,
	Twitter,
	MessageCircle,} from "lucide-react";
import Logo from "../../public/images/void-tattoo-logo.png";
import Image from "next/image";

// import { Button } from "@/components/ui/button";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: "HOME", href: "/" },
		{ name: "ABOUT", href: "/#about" },
		{ name: "GALLERY", href: "/#gallery" },
		{ name: "SERVICES", href: "/#services" },
		{ name: "ARTICLES", href: "/#articles" },
		{ name: "CONTACT", href: "/#contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="">
						<Image src={Logo} alt="logo " className="h-10 w-20" />
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm font-medium hover:text-gray-800 transition-colors hover:underline hover:underline-offset-4 hover:decoration-2"
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Book Appointment Button */}
					{/* <Link href="/booking" className="hidden md:block">
						<button className="bg-black text-white p-3 rounded-lg cursor-pointer hover:bg-gray-800">
							BOOK NOW
						</button>
					</Link> */}
					<div className="hidden md:flex items-center space-x-4">
						<a
							href="https://instagram.com/voidtattoo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-black transition-colors"
						>
							<Instagram className="w-5 h-5" />
						</a>
						<a
							href="https://facebook.com/voidtattoo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-black transition-colors"
						>
							<Facebook className="w-5 h-5" />
						</a>
						<a
							href="https://twitter.com/voidtattoo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-black transition-colors"
						>
							<Twitter className="w-5 h-5" />
						</a>
						<a
							href="https://wa.me/15551234567"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-black transition-colors"
						>
							<MessageCircle className="w-5 h-5" />
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t">
						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-sm font-medium hover:text-gray-600 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<Link href="/booking" onClick={() => setIsMenuOpen(false)}>
								<button className="bg-black text-white hover:bg-gray-800 w-full">
									BOOK NOW
								</button>
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
