'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({
	children,
	className = '',
	delay = 0,
	as = 'div',
}) {
	const shouldReduce = useReducedMotion();
	const Tag = motion[as] || motion.div;

	const variants = shouldReduce
		? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
		: { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

	return (
		<Tag
			className={className}
			variants={variants}
			initial="hidden"
			whileInView="show"
			transition={{ duration: 0.5, ease: 'easeOut', delay }}
			viewport={{ once: true, amount: 0.25 }}
		>
			{children}
		</Tag>
	);
}
