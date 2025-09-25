import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, img, blurb, href }) {
	return (
		<li className="w-full lg:w-[90%] mx-auto">
			<div className=" overflow-hidden">
				<Image
					src={img}
					alt={title}
					width={640}
					height={360}
					className="w-full h-65 rounded-md object-cover lg:h-80"
				/>
			</div>

			<div className="mt-3">
				<h3 className="text-[24px] tracking-[0.1em]">{title}</h3>
				<p className="text-[16px] lg:text-[18px] opacity-80 mt-1">{blurb}</p>

				<Link
					href={href}
					className="inline-block mt-3 mb-5 px-7 py-2 rounded bg-[var(--primary-color)] text-neutral-200 text-[16px] tracking-wide"
				>
					Read More
				</Link>
			</div>
		</li>
	);
}
