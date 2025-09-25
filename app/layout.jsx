import { SpeedInsights } from '@vercel/speed-insights/next';
import { Electrolize } from 'next/font/google';
import './globals.css';

const electrolize = Electrolize({
	variable: '--font-electrolize',
	subsets: ['latin'],
	weight: '400',
});

export const metadata = {
	title: "Josh Robertson's Portfolio",
	description:
		'Full-stack software developer specializing in modern frontend and backend technologies. Experienced in building responsive, high-performance websites and applications with a focus on clean design, SEO, and user experience. Explore my projects, skills, and professional journey.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth bg-[var(--primary-color)]">
			<body className={`${electrolize.variable} antialiased `}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
