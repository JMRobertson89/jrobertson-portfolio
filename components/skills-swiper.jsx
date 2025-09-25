'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

function AutoScrollRow({ items, reverse = false, className = '' }) {
	return (
		<Swiper
			modules={[Autoplay, FreeMode]}
			slidesPerView="auto"
			freeMode={{ enabled: true, momentum: false }}
			loop
			speed={3000}
			autoplay={{
				delay: 0,
				disableOnInteraction: false,
				reverseDirection: reverse,
				pauseOnMouseEnter: false,
				stopOnLastSlide: false,
			}}
			className={className}
		>
			{items.map((logo, i) => (
				<SwiperSlide key={i} style={{ width: 'auto' }} className="px-6">
					<div className="flex items-center gap-2">
						<Image
							src={logo.src}
							alt={logo.alt}
							width={logo.w ?? 150}
							height={logo.h ?? 40}
							className="object-contain"
						/>
						{logo.label && <span className="tracking-wider">{logo.label}</span>}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default function SkillsSwiper() {
	const logos = [
		{ src: '/images/tech/docker.png', alt: 'Docker', w: 150 },
		{ src: '/images/tech/express.png', alt: 'Express', w: 150 },
		{ src: '/images/tech/git.png', alt: 'Git', w: 82 },
		{ src: '/images/tech/django.png', alt: 'Django', w: 150 },
		{ src: '/images/tech/github.png', alt: 'GitHub', w: 150 },
		{ src: '/images/tech/javascript.png', alt: 'JavaScript', w: 180 },
		{ src: '/images/tech/nextjs.png', alt: 'Next.js', w: 150 },
		{ src: '/images/tech/nodejs.png', alt: 'Node.js', w: 150 },
		{ src: '/images/tech/nosql.png', alt: 'NoSQL', w: 150 },
		{ src: '/images/tech/postgres.png', alt: 'PostgreSQL', w: 200 },
		{ src: '/images/tech/python.png', alt: 'Python', w: 150 },
		{ src: '/images/tech/react.png', alt: 'React', w: 150 },
		{ src: '/images/tech/tailwindcss.png', alt: 'Tailwind', w: 180 },
	];

	const topRow = [...logos.slice(0, 7), ...logos.slice(0, 7)];

	const bottomRow = [...logos.slice(-6), ...logos.slice(-6)];

	return (
		<div className="space-y-8">
			{/* Top row → left (first 7 logos) */}
			<AutoScrollRow items={topRow} />
			{/* Bottom row → right (last 6 logos) */}
			<AutoScrollRow items={bottomRow} reverse />
		</div>
	);
}
