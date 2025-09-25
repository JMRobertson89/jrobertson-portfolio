import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact-section';
import Stagger from '@/components/stagger';
import Reveal from '@/components/Reveal';

export default function SocialNetworkAPI() {
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
							{
								projects.find(
									(project) => project.slug === 'social-network-api'
								).title
							}
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="project-description"
							className="text-[18px] lg:text-[20px]"
						>
							<p className="mb-10 md:w-3/5">
							{
								projects.find(
									(project) => project.slug === 'social-network-api'
								).description
							}
							</p>

							<p className="mt-5">
								<span className="mr-3">Stack:</span> MongoDB, Express.js,
								Node.js
							</p>

							<div className="mt-5 mb-10">
								<Link
									href="https://github.com/JMRobertson89/Social-Network-API"
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
										(project) => project.slug === 'social-network-api'
									).img
								}
								alt={
									projects.find(
										(project) => project.slug === 'social-network-api'
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
								The goal of this project was to create a backend API capable of
								handling the core functionality of a social media network. Users
								can create accounts, share thoughts, react to posts, and build a
								list of friends. By developing this project, I aimed to deepen
								my understanding of backend architecture and learn how to
								efficiently manage large sets of interconnected, unstructured
								data.
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
										This project was built with Node.js and Express.js on the
										backend, with MongoDB as the database. I used Mongoose to
										structure and manage the data, which made working with a
										NoSQL database much easier.
									</p>
									<p>
										Together, these technologies gave me the flexibility to
										model relationships like users, thoughts, reactions, and
										friends in a way that felt natural for a social networking
										platform.
									</p>
								</div>
								<div
									id="stack-logos"
									className="flex justify-center space-x-4 mb-20"
								>
									<Image
										src={'/images/tech/nodejs.png'}
										alt={'Node.js'}
										width={150}
										height={150}
										className="object-contain w-[120px]"
									/>
									<Image
										src={'/images/tech/express.png'}
										alt={'Express'}
										width={150}
										height={150}
										className="object-contain w-[120px]"
									/>
									<Image
										src={'/images/tech/mongodb.png'}
										alt={'MongoDB'}
										width={150}
										height={150}
										className="object-contain w-[120px]"
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
								Working on this project gave me a deeper appreciation for how
								data flows through an application. I learned how to design and
								build a RESTful API from scratch, and I got hands-on experience
								with how NoSQL databases differ from traditional relational
								databases. Using MongoDB with Mongoose helped me understand how
								to manage complex relationships while keeping things efficient
								and scalable. I also gained confidence in testing API routes in
								Insomnia, troubleshooting issues as they came up, and thinking
								about how to structure data so it can handle real-world user
								interactions like adding friends or reacting to posts.
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
								{/* Real Estate Site Card */}
								<div className="bg-neutral-100 rounded-md">
									<div className="overflow-hidden">
										<Image
											src={'/images/projects/btre.png'}
											alt={'Real Estate Site'}
											width={640}
											height={360}
											className="w-full h-80 object-cover object-top rounded-md"
										/>
									</div>
									<div className="p-4">
										<h3 className="text-[20px] tracking-[0.1em] mb-2">
											Real Estate Site
										</h3>
										<p className="text-[16px] opacity-80 mb-4">
											A full-stack real estate website built with Django,
											Python, JavaScript, and PostgreSQL.
										</p>
										<Link
											href={'/projects/real-estate-site'}
											className="inline-block px-5 py-2 rounded bg-[var(--primary-color)] text-neutral-200 text-[16px] tracking-wide"
										>
											Read More
										</Link>
									</div>
								</div>

								{/* CLI Employee Tracker Card */}
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

								{/* Curated Crates Card */}
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
