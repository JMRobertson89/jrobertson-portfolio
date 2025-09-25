import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact-section';
import Stagger from '@/components/stagger';
import Reveal from '@/components/Reveal';

export default function RealEstateSite() {
	return (
		<>
			<Header className="bg-neutral-200 text-[var(--primary-color)]" />
			<div className="bg-neutral-200 w-full px-4 pb-20 leading-[30px]">
				<div className="max-w-7xl mx-auto">
					<Stagger>
						<Reveal
							as="h1"
							id="project-title"
							className="text-[36px] text-[var(--primary-color)] tracking-[0.1em] py-20"
						>
							Real Estate Site
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="project-description"
							className="text-[18px] lg:text-[20px]"
						>
							<p className="mb-10 md:w-3/5">
								The Real Estate Site is a full-stack web application built with
								Python and Django that simulates a property listings platform.
								It allows users to browse homes, register for an account, and
								submit inquiries, while giving admins the ability to manage
								listings, employees, and incoming requests. This project
								showcases my ability to work across the entire stack, from
								backend logic and database design to frontend functionality and
								user interaction.
							</p>

							<p className="mt-5">
								<span className="mr-3">Stack:</span> Python, Django, PostgreSQL
							</p>

							<div className="mt-5 mb-10">
								<Link
									href="https://github.com/JMRobertson89/Real-Estate-Site"
									target="_blank"
								>
									<span className="mr-5">Code:</span>
									<span className="text-[var(--primary-color)] underline">
										View on GitHub
									</span>
								</Link>
							</div>
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="project-screenshot"
							className="flex justify-center mb-20"
						>
							<Image
								src={
									projects.find(
										(project) => project.slug === 'real-estate-site'
									).img
								}
								alt={
									projects.find(
										(project) => project.slug === 'real-estate-site'
									).title
								}
								width={640}
								height={360}
								className="w-full h-auto rounded-md object-contain md:w-7/8 lg:w-4/5"
							/>
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="project-goal"
							className="text-[18px] lg:text-[20px]"
						>
							<h2
								id="project-title"
								className="text-[28px] text-[var(--primary-color)] tracking-[0.1em] mb-10"
							>
								Project Goal
							</h2>
							<p className="mb-20 md:w-7/8 lg:w-3/5">
								The goal of this project was to create a fully functioning real
								estate platform where buyers and sellers could interact through
								a seamless online experience. I wanted to practice building a
								system that felt practical, with clear roles for users and
								admins, while reinforcing my understanding of authentication,
								form handling, and database management.
							</p>
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="tech-stack"
							className="text-[18px] lg:text-[20px] flex justify-end"
						>
							<div className="md:w-3/5">
								<h2
									id="project-title"
									className="text-[28px] text-[var(--primary-color)] tracking-[0.1em] mb-10"
								>
									Tech Stack
								</h2>
								<div id="stack-description" className="space-y-4 mb-10">
									<p>
										Django and Python was used for the core framework because of
										their power in handling backend logic and authentication out
										of the box. For the database, I worked with PostgreSQL,
										which gave me the chance to design relational data models
										for listings, users, and inquiries.
									</p>
									<p>
										On the frontend, I used JavaScript to add interactivity and
										enhance the user experience. Together, this stack allowed me
										to build a feature-rich site that handled everything from
										account creation to property management in one cohesive
										system.
									</p>
								</div>
								<div
									id="stack-logos"
									className="flex justify-center space-x-4 mb-20"
								>
									<Image
										src={'/images/tech/python.png'}
										alt={'Python'}
										width={150}
										height={150}
										className="object-contain w-[120px]"
									/>
									<Image
										src={'/images/tech/django.png'}
										alt={'Django'}
										width={150}
										height={150}
										className="object-contain w-[120px]"
									/>
									<Image
										src={'/images/tech/postgres.png'}
										alt={'PostgreSQL'}
										width={150}
										height={150}
										className="object-contain w-[150px]"
									/>
								</div>
							</div>
						</Reveal>
					</Stagger>
					<Stagger>
						<Reveal
							as="section"
							id="project-goal"
							className="text-[18px] lg:text-[20px]"
						>
							<h2
								id="project-title"
								className="text-[28px] text-[var(--primary-color)] tracking-[0.1em] mb-10"
							>
								Learning Outcomes
							</h2>
							<p className="mb-20 md:w-3/5">
								This project taught me a lot about building and deploying
								full-stack applications. I gained hands-on experience with
								Django's Model-View-Template (MVT) structure and saw how
								powerful it can be for keeping projects organized. I learned how
								to manage user authentication, set up an admin dashboard, and
								connect a relational database to support more complex queries.
								On the frontend side, I got comfortable using JavaScript to
								bring the interface to life and make it more user-friendly.
								Overall, this project gave me confidence in balancing both
								backend and frontend responsibilities to deliver a polished,
								production-ready web app.
							</p>
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="other-projects"
							className="text-[18px] space-y-5 lg:text-[20px]"
						>
							<h2
								id="project-title"
								className="text-[28px] text-[var(--primary-color)] tracking-[0.1em] mb-10"
							>
								Other Projects
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="bg-neutral-100 rounded-md">
									<div className="overflow-hidden">
										<Image
											src={'/images/projects/social-network-api.png'}
											alt={'Social Network API'}
											width={640}
											height={360}
											className="w-full h-80 object-cover object-top rounded-md"
										/>
									</div>
									<div className="p-4">
										<h3 className="text-[20px] tracking-[0.1em] mb-2">
											Social Network API
										</h3>
										<p className="text-[16px] opacity-80 mb-4">
											A Social network API created using Node.js, Express.js and
											MongoDB.
										</p>
										<Link
											href={'/projects/social-network-api'}
											className="inline-block px-5 py-2 rounded bg-[var(--primary-color)] text-neutral-200 text-[16px] tracking-wide"
										>
											Read More
										</Link>
									</div>
								</div>

								<div className="bg-neutral-100 rounded-md">
									<div className="overflow-hidden">
										<Image
											src={'/images/projects/command-line-employee-tracker.png'}
											alt={'CLI Employee Tracker'}
											width={640}
											height={360}
											className="w-full h-80 object-cover object-top rounded-md"
										/>
									</div>
									<div className="p-4">
										<h3 className="text-[20px] tracking-[0.1em] mb-2">
											CLI Employee Tracker
										</h3>
										<p className="text-[16px] opacity-80 mb-4">
											A Command-line application to manage an employee database,
											using Node.js, Inquirer, and PostgreSQL.
										</p>
										<Link
											href={'/projects/command-line-employee-tracker'}
											className="inline-block px-5 py-2 rounded bg-[var(--primary-color)] text-neutral-200 text-[16px] tracking-wide"
										>
											Read More
										</Link>
									</div>
								</div>

								<div className="bg-neutral-100 rounded-md">
									<div className="overflow-hidden">
										<Image
											src={'/images/projects/curated-crates.png'}
											alt={'Curated Crates'}
											width={640}
											height={360}
											className="w-full h-80 object-cover object-top rounded-md"
										/>
									</div>
									<div className="p-4">
										<h3 className="text-[20px] tracking-[0.1em] mb-2">
											Curated Crates
										</h3>
										<p className="text-[16px] opacity-80 mb-4">
											A subscription-based e-commerce website built
											collaboratively with React, Material-UI and MongoDB.
										</p>
										<Link
											href={'/projects/curated-crates'}
											className="inline-block px-5 py-2 rounded bg-[var(--primary-color)] text-neutral-200 text-[16px] tracking-wide"
										>
											Read More
										</Link>
									</div>
								</div>
							</div>
						</Reveal>
					</Stagger>
				</div>
			</div>
			<ContactSection />
			<Footer />
		</>
	);
}
