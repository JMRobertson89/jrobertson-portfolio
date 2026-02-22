'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { LuLogIn } from 'react-icons/lu';

export default function SplashPage() {
	const router = useRouter();

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#262C2F]">
			<div className="text-center text-neutral-200 tracking-wider">
				<h1 className="text-4xl md:text-5xl tracking-[0.2em] mb-10">
					JOSH.ROBERTSON
				</h1>
				<button
					onClick={() => router.push('/home')}
					className="flex items-center gap-2 mx-auto text-base tracking-[0.15em] hover:opacity-70 transition-opacity cursor-pointer"
				>
					<motion.span
						animate={{ x: [0, 6, 0] }}
						transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
						className="flex items-center"
					>
						<LuLogIn className="w-5 h-5" />
					</motion.span>
					Enter
				</button>
			</div>
		</div>
	);
}
