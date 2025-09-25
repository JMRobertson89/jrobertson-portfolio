'use client';

import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Stagger from './stagger';
import Reveal from './Reveal';

export default function ContactSection() {
	const form = useRef();
	const [message, setMessage] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_kpmkul6', 'template_rujgdwc', form.current, {
				publicKey: '27nOyPvQ941PqqhyF',
			})
			.then(
				() => {
					setMessage({ type: 'success', text: 'Message sent successfully!' });
					form.current.reset();
					console.log('SUCCESS!');
					// e.target.reset();
				},
				(error) => {
					setMessage({
						type: 'error',
						text: `Failed to send message. Please email directly`,
					});
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<section
			id="contact"
			className="max-w-7xl mx-auto bg-[var(--primary-color)] text-neutral-200 mb-30 px-4 md:px-8 py-10"
		>
			<Stagger>
				<Reveal as="div" className="md:grid md:grid-cols-2 md:gap-12">
					<Stagger>
						<Reveal
							as="div"
							id="contact-info"
							className="tracking-wider text-[18px] text-left leading-[30px] space-y-4"
						>
							<h2 className="text-[36px] tracking-[0.2em] mb-10">Contact Me</h2>
							<p>
								If you're interested in collaborating on an exciting project or
								simply have a question you would like to ask, please don't
								hesitate to reach out! I am always open to new connections,
								creative ventures, and meaningful conversations. I look forward
								to connecting and exploring potential opportunities together.
							</p>{' '}
							<p>
								Fill out the form or email me directly at{' '}
								<a
									href="mailto:josh@jrobertson.io"
									className="underline underline-offset-2"
								>
									josh@jrobertson.io
								</a>
								.
							</p>
							<Reveal as="div" className="flex items-center gap-4">
								<span>Find Me On:</span>
								<Link
									href="https://www.linkedin.com/in/jrobertson-io/"
									target="_blank"
									className="inline-flex items-center justify-center w-10 h-10 rounded bg-neutral-200 text-2xl text-[var(--primary-color)] hover:bg-white/70"
								>
									<FaLinkedinIn />
								</Link>
								<Link
									href="https://github.com/JMRobertson89"
									target="_blank"
									className="inline-flex items-center justify-center w-10 h-10 rounded bg-neutral-200 text-2xl text-[var(--primary-color)] hover:bg-white/70"
								>
									<FaGithub />
								</Link>
								<Link
									href="https://discord.com/users/892579663724036147"
									target="_blank"
									className="inline-flex items-center justify-center w-10 h-10 rounded bg-neutral-200 text-3xl text-[var(--primary-color)] hover:bg-white/70"
								>
									<FaDiscord />
								</Link>
							</Reveal>
						</Reveal>
					</Stagger>
					<Stagger>
						<Reveal as="div" id="contact-form" className="md:mt-0 mt-8">
							<form
								ref={form}
								onSubmit={sendEmail}
								className="space-y-4 text-neutral-200"
							>
								<input
									type="text"
									name="user_name"
									placeholder="Name"
									required
									className="w-full rounded border border-white/30 bg-white/5 px-3 py-2 text-[18px] placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/40"
								/>
								<input
									type="email"
									name="user_email"
									placeholder="Email"
									required
									className="w-full rounded border border-white/30 bg-white/5 px-3 py-2 text-[18px] placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/40"
								/>
								<textarea
									name="message"
									rows={10}
									placeholder="Message"
									required
									className="w-full rounded border border-white/20 bg-white/5 px-3 py-2 text-[18px] placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/40"
								/>
								{message && (
									<p className={`message ${message.type}`}>{message.text}</p>
								)}
								<input
									value="Send"
									type="submit"
									className="w-full rounded cursor-pointer bg-neutral-200 text-[var(--primary-color)] py-2 text-[18px] font-semibold tracking-wide hover:bg-white/80"
								/>
							</form>
						</Reveal>
					</Stagger>
				</Reveal>
			</Stagger>
		</section>
	);
}
