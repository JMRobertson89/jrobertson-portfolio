import Link from 'next/link';
import Image from 'next/image';
import InteriorHeader from '@/components/interiorHeader';

export default function NotFound() {
	return (
		<>
			<InteriorHeader />
			<div className="min-h-screen bg-neutral-200 flex items-center justify-center">
				<div className="text-center max-w-4xl mx-auto px-4">
					<div className="mb-4">
						<Image
							src="/images/misc/hamster.gif"
							alt="Confused gerbil"
							width={150}
							height={150}
							className="mx-auto"
						/>
					</div>

					<h1 className="text-4xl md:text-4xl font-bold text-[var(--primary-color)] mb-4 tracking-[0.1em]">
						404
					</h1>

					<h2 className="text-xl md:text-2xl text-neutral-800 mb-6 tracking-wider">
						OOPS! This page got lost
					</h2>

					<p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
						The navigation hamster is still spinning. Direction optional.
						Results unpredictable. Page unavailable.
					</p>

					<Link
						href="/"
						className="inline-block bg-[var(--primary-color)] text-white px-8 py-3 rounded hover:bg-[var(--primary-color)]/90 transition-colors tracking-wider font-medium"
					>
						RETURN HOME
					</Link>
				</div>
			</div>
		</>
	);
}
