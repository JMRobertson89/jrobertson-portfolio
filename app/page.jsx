import Header from '@/components/header';
import Footer from '@/components/footer';
import { LuArrowDownToLine } from 'react-icons/lu';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';
import dynamic from 'next/dynamic';
import ContactSection from '@/components/contact-section';
import RotatingWord from '@/components/RotatingWord';
import Reveal from '@/components/Reveal';
import Stagger from '@/components/stagger';

const metadata = {
	title: 'Josh Robertson\'s Portfolio',
	description: 'Full-stack software developer specializing in modern frontend and backend technologies. Experienced in building responsive, high-performance websites and applications with a focus on clean design, SEO, and user experience. Explore my projects, skills, and professional journey.',
};


const SkillsSwiper = dynamic(() => import('@/components/skills-swiper'), {});

export default function Home() {
	return (
		<>
			<Header />
			<section
				id="hero"
				className="text-neutral-200 tracking-wider text-center"
			>
				<div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
					<Stagger>
						<Reveal
							as="h1"
							className="text-5xl tracking-[0.1em] leading-[1.3] md:text-5xl"
						>
							FULL-STACK <br /> SOFTWARE <br />{' '}
							<RotatingWord className="align-baseline" />
						</Reveal>

						<Reveal
							as="div"
							className="flex items-center flex-col mt-25 md:mt-10 gap-4"
						>
							<span>SCROLL FOR MORE</span>
							<LuArrowDownToLine className="w-7 h-7 animate-bounce" />
						</Reveal>
					</Stagger>
				</div>
			</section>

			<section
				id="about"
				className="max-w-7xl mx-auto text-neutral-200 px-4 mb-30 md:pl-100 lg:pl-120"
			>
				<Stagger className="tracking-wider mt-150 text-[18px] text-left leading-[30px] space-y-4">
					<Reveal as="p" className="indent-15">
						Hi! I'm Josh, a Full-Stack Software Developer with a passion for
						creating meaningful, user-focused applications that bring ideas to
						life. I'm motivated by solving complex problems, designing solutions
						that are both functional and intuitive, and seeing the direct impact
						of my work on people and organizations. My approach blends
						creativity with analytical thinking, allowing me to adapt quickly
						and thrive in fast-moving environments.
					</Reveal>
					<Reveal as="p">
						Before transitioning into software engineering, I built a career in
						technology sales and account management. That background sharpened
						my ability to understand client needs, communicate effectively
						across teams, and deliver solutions that create real business
						impact. Now, I apply that same mindset to engineering challenges by
						bridging technical execution with user and stakeholder priorities.
					</Reveal>
					<Reveal as="p">
						I’m driven to transform ideas into impactful software solutions that
						solve real-world problems and create meaningful experiences for
						users. I thrive in collaborative environments where innovation and
						creativity are encouraged, and I'm always eager to learn,
						experiment, and grow as a developer. Whether it's building scalable
						systems, refining user interfaces, or exploring new technologies,
						I'm passionate about pushing projects forward. Let's connect and
						create something remarkable together!
					</Reveal>
				</Stagger>
			</section>

			<section id="skills" className="bg-neutral-200">
				<div className="max-w-8xl mx-auto pt-20 pb-20">
					<Stagger>
						<Reveal>
							<SkillsSwiper />
						</Reveal>
					</Stagger>
				</div>
			</section>

			<section id="projects" className="bg-neutral-200 pb-30">
				<div className="max-w-7xl mx-auto px-4">
					<Stagger>
						<Reveal as="h2" className="text-[36px] tracking-[0.1em] mb-10">
							Projects
						</Reveal>
						<Reveal
							as="ul"
							className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-8 space-y-20 md:space-y-0"
						>
							{projects.map((p) => (
								<ProjectCard key={p.slug} {...p} />
							))}
						</Reveal>
					</Stagger>
				</div>
			</section>

			<ContactSection />
			<Footer />
		</>
	);
}
