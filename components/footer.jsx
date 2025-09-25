import Link from 'next/link';

export default function Footer({ className = '' }) {
	return (
		<footer className={`w-full py-6 ${className || 'text-neutral-200'}`}>
			<div className="max-w-7xl mx-auto px-4">
				<Link
					href="/"
					className="block text-center text-[20px] tracking-[0.1em] text-var(--secondary-color)"
				>
					JOSH.ROBERTSON
				</Link>
			</div>
		</footer>
	);
}
