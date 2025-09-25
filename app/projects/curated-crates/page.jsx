import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact-section';
import Stagger from '@/components/stagger';
import Reveal from '@/components/Reveal';

export default function CuratedCrates() {
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
							Curated Crates
						</Reveal>
					</Stagger>

					<Stagger>
						<Reveal
							as="section"
							id="project-description"
							className="text-[18px] lg:text-[20px]"
						>
							<p className="mb-10 md:w-3/5">
								Curated Crates is a subscription-based e-commerce platform
								designed to deliver handpicked lifestyle products directly to
								users' doors. Customers can choose from multiple box categories
								and tiers, creating a tailored experience that goes beyond
								simple delivery. This was a collaborative project that
								highlights my ability to design and build full-stack
								applications in a team environment.
							</p>

							<p className="mt-5">
								<span className="mr-3">Stack:</span> React, Express.js, MongoDB
							</p>

							<div className="mt-5 mb-10">
								<Link
									href="https://github.com/JMRobertson89/Curated-Crates"
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
									projects.find((project) => project.slug === 'curated-crates')
										.img
								}
								alt={
									projects.find((project) => project.slug === 'curated-crates')
										.title
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
								The main goal of Curated Crates was to create a subscription
								service that feels both polished and flexible. We wanted to
								simulate a real-world product by building features like user
								sign-up, tiered product offerings, and a scalable backend that
								could handle recurring deliveries. It gave me the chance to
								practice integrating front-end design with backend services in a
								way that felt seamless for the end user.
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
										On the front end, we used React along with Material UI (MUI)
										to create a clean and modern interface, while JavaScript and
										HTML handled the application logic and structure. For the
										backend, we worked with Node.js and Express.js, which
										allowed us to build a fast, reliable API to support
										subscriptions and product data.
									</p>
									<p>
										Finally, the database was powered by MongoDB with Mongoose,
										giving us the flexibility to model complex data like users,
										subscription tiers, and curated product boxes. This stack
										gave me the chance to see how different layers of an
										application come together to support a real-world business
										model.
									</p>
								</div>
								<div
									id="stack-logos"
									className="flex justify-center space-x-4 mb-20"
								>
									<Image
										src={'/images/tech/react.png'}
										alt={'React'}
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
								This project taught me how to bring together multiple moving
								parts into a fully functional web application all while working
								in a team. I learned how to structure a React app with reusable
								components, while also working with MUI to quickly create
								professional-looking layouts. On the backend, I deepened my
								understanding of building RESTful APIs with Express and learned
								how to design schemas in MongoDB that could handle tiered
								subscriptions and user data. One of the most valuable lessons
								was working with version control and using GitHub to collaborate
								with my team.
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
											src={'/images/projects/social-network-api.png'}
											alt={'Curated Crates'}
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
