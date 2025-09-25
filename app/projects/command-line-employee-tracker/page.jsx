import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact-section';
import InteriorHeader from '@/components/interiorHeader';
import Stagger from '@/components/stagger';
import Reveal from '@/components/Reveal';

export default function CommandLineEmployeeTracker() {
	return (
		<>
			<InteriorHeader />
			<div className="bg-neutral-200 w-full px-4 pb-20 leading-[30px]">
				<div className="max-w-7xl mx-auto">
					<Stagger>
						<Reveal
							as="h1"
							id="project-title"
							className="text-[36px] text-[var(--primary-color)] tracking-[0.1em] py-20"
						>
							<span className="block leading-tight">
								Command Line
								<br />
								Employee Tracker
							</span>
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="project-description"
							className="text-[18px] lg:text-[20px]"
						>
							<p className="mb-10 md:w-3/5">
								The Employee Tracker is a command-line application built to
								simplify managing a company's employee database. It allows users
								to view, add, and update departments, roles, and employees
								through a set of interactive prompts, making it a lightweight
								but powerful tool for organizing workforce data.
							</p>

							<p className="mt-5">
								<span className="mr-3">Stack:</span> JavaScript, Node.js,
								PostgreSQL
							</p>

							<div className="mt-5 mb-10">
								<Link
									href="https://github.com/JMRobertson89/Employee-Tracker"
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
										(project) =>
											project.slug === 'command-line-employee-tracker'
									).img
								}
								alt={
									projects.find(
										(project) =>
											project.slug === 'command-line-employee-tracker'
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
								The goal of this project was to create a tool that makes
								managing employee information easier without relying on a web
								interface. By building this application, I wanted to practice
								working with databases, sharpen my skills in handling user input
								from the command line, and learn how to structure data for
								real-world business use cases.
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
										I built the application with Node.js to handle the runtime
										environment and used Inquirer to create interactive prompts
										for the user. The data is stored and managed with
										PostgreSQL, which gave me experience working with a
										relational database and understanding how different entities
										like employees, roles, and departments connect to one
										another.
									</p>
									<p>
										Together, these tools made it possible to create a smooth,
										console-based experience that feels both functional and
										efficient.
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
								This project helped me get much more comfortable working
								directly with relational databases. I learned how to design
								tables and relationships in PostgreSQL to reflect a company's
								structure, and how to write queries that return the data in
								clear, formatted tables. I also gained confidence in using
								Node.js with Inquirer to collect and validate user input, and I
								saw firsthand how the backend and database need to work in sync
								to keep everything running smoothly. Most importantly, this
								project showed me how to translate real-world business
								requirements into a technical solution that feels both practical
								and user-friendly.
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
								<div className="bg-white rounded-md">
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
								<div className="bg-white rounded-md">
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
								<div className="bg-white rounded-md">
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
