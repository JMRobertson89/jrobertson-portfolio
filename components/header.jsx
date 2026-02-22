'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header({ className = '' }) {
	const [open, setOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleOpen = () => {
		setOpen(true);
		setIsAnimating(true);
	};

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => setOpen(false), 300); // Match transition duration
	};

	return (
		<header
			className={`p-2 max-w-8xl mx-auto ${className || 'text-neutral-200'}`}
		>
			<div className="mx-auto flex items-center justify-between px-4 py-3 md:py-4">
				<Link href="/home" className="text-[20px] tracking-[0.1em]">
					JOSH.ROBERTSON
				</Link>

				{/* Desktop nav */}
				<nav className="hidden gap-6 md:flex">
					<a
						href="/home#projects"
						className="hover:rounded px-3 py-1 hover:bg-white/10"
					>
						Projects
					</a>
					<a
						href="/home#contact"
						className="hover:rounded px-3 py-1 hover:bg-white/10"
					>
						Contact
					</a>
					<Link
						href="/assets/files/joshua-robertson-resume.pdf"
						target="_blank"
						className="hover:rounded px-3 py-1 hover:bg-white/10"
					>
						Resume
					</Link>
				</nav>

				{/* Mobile hamburger */}
				<button
					aria-label="Toggle menu"
					className="md:hidden inline-flex w-9 items-center justify-center rounded"
					onClick={open ? handleClose : handleOpen}
				>
					<svg
						className="w-7 h-7"
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M3 6h18M3 12h18M3 18h18"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile sheet */}
			{open && (
				<div
					className={`md:hidden fixed inset-0 w-full h-full bg-[var(--primary-color)] z-50 transition-all duration-300 ease-in-out ${
						isAnimating ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div className="flex justify-end p-3">
						<button
							aria-label="Close menu"
							className="inline-flex mt-2 mr-3 rounded"
							onClick={handleClose}
						>
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
								<path
									d="M18 6L6 18M6 6l12 12"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</button>
					</div>
					<nav
						className={`flex flex-col items-center pt-40 text-3xl space-y-8 transition-all duration-300 ease-in-out ${
							isAnimating
								? 'translate-y-0 opacity-100'
								: 'translate-y-8 opacity-0'
						}`}
					>
						<a
							href="/home#projects"
							className="hover:rounded px-3 py-1 hover:bg-white/10"
							onClick={handleClose}
						>
							Projects
						</a>
						<a
							href="/home#contact"
							className="hover:rounded px-3 py-1 hover:bg-white/10"
							onClick={handleClose}
						>
							Contact
						</a>
						<Link
							href="/assets/files/joshua-robertson-resume.pdf"
							target="_blank"
							className="hover:rounded px-3 py-1 hover:bg-white/10"
							onClick={handleClose}
						>
							Resume
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}
