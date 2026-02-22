'use client';

import Image from 'next/image';

function MarqueeRow({ items, reverse = false }) {
	return (
		<div className="overflow-hidden">
			<div
				className="flex w-max"
				style={{
					animation: `${reverse ? 'scroll-right' : 'scroll-left'} 20s linear infinite`,
				}}
			>
				{[...items, ...items].map((logo, i) => (
					<div key={i} className="flex items-center gap-2 px-6">
						<Image
							src={logo.src}
							alt={logo.alt}
							width={logo.w}
							height={logo.h ?? 40}
							className="object-contain"
						/>
						<span className="text-lg tracking-wider">{logo.alt}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default function SkillsSwiper() {
	const logos = [
		{ src: '/images/tech/php.png', alt: 'PHP', w: 50 },
		{ src: '/images/tech/wordpress.png', alt: 'Wordpress', w: 50 },
		{ src: '/images/tech/javascript.png', alt: 'JavaScript', w: 50 },
		{ src: '/images/tech/nextjs.png', alt: 'Next.js', w: 50 },
		{ src: '/images/tech/react.png', alt: 'React', w: 50 },
		{ src: '/images/tech/express.png', alt: 'Express', w: 50 },
		{ src: '/images/tech/python.png', alt: 'Python', w: 50 },
		{ src: '/images/tech/django.png', alt: 'Django', w: 50 },
		{ src: '/images/tech/docker.png', alt: 'Docker', w: 50 },
		{ src: '/images/tech/git.png', alt: 'Git', w: 50 },
		{ src: '/images/tech/github.png', alt: 'GitHub', w: 50 },
		{ src: '/images/tech/nodejs.png', alt: 'Node.js', w: 50 },
		{ src: '/images/tech/nosql.png', alt: 'NoSQL', w: 50 },
		{ src: '/images/tech/postgres.png', alt: 'PostgreSQL', w: 50 },
		{ src: '/images/tech/tailwindcss.png', alt: 'Tailwind', w: 50 },
		{ src: '/images/tech/claude.png', alt: 'Claude', w: 50 },
	];

	const topRow = logos.slice(0, 8);
	const bottomRow = logos.slice(8);

	return (
		<div className="space-y-8">
			<MarqueeRow items={topRow} />
			<MarqueeRow items={bottomRow} reverse />
		</div>
	);
}
