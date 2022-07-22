import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useCheckSSR } from '../../hooks';
import profilePic from '../../public/profile.jpg';
import { config } from '../../config';
import Link from 'next/link';
const About = () => {
	const revealContainer = useRef<HTMLElement>(null);
	const isSSR = useCheckSSR();
	useEffect(() => {
		const animate = async () => {
			if (!isSSR && revealContainer.current) {
				const sr = (await import('scrollreveal')).default;
				sr().reveal(revealContainer.current, config.srConfig());
			}
		};
		animate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const skills = [
		'JavaScript',
		'TypeScript',
		'React',
		'Angular',
		'Docker',
		'Kubernetes',
		'Python',
		'MongoDB',
	];
	return (
		<section className="max-w-[900px]" ref={revealContainer}>
			<h2 className="numbered-heading text-blue-500 dark:text-green">
				About Me
			</h2>
			<div className="inner grid grid-cols-[3fr_2fr] gap-[50px] md:block">
				<div className="styled-text text-blue-400 dark:text-teal-600">
					<p>
						Hello! My name is Rohit and I enjoy creating things. I tinkered
						around with programming around 6th grade with C++. Nowadays my
						interest is in web development and building rich user-experiences.
					</p>
					<p>
						Fast-forward to today, and I’ve had the privilege of working at{' '}
						<Link href="https://hiringtek.com/">
							<a
								target="_blank"
								rel="noreferrer"
								className="text-purple dark:text-purple inline-block relative transition 
						hover:after:w-full hover:after:text-purple focus:after:w-full focus:after:text-purple active:after:w-full active:after:text-purple
						after:block after:w-0 after:h-[2px] after:relative after:bottom-[0.25em] after:transition-all after:opacity-50 after:bg-purple"
							>
								a start-up
							</a>
						</Link>{' '}
						where I focus on designing and developing scalable state-of-the-art
						solutions for our AI proctored Interview Platform on both the
						frontend and backend.
					</p>
					<p>
						I also post on my{' '}
						<Link href="/blog">
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple dark:text-purple inline-block relative transition 
						hover:after:w-full hover:after:text-purple focus:after:w-full focus:after:text-purple active:after:w-full active:after:text-purple
						after:block after:w-0 after:h-[2px] after:relative after:bottom-[0.25em] after:transition-all after:opacity-50 after:bg-purple"
							>
								blog
							</a>
						</Link>{' '}
						that covers things from Tensorflow Object Detection to Live
						Speech-To-Text using Google Speech API.
					</p>
					<br />
					<p className="text-blue-500 dark:text-teal-300">
						Here are a few technologies I’ve been working with recently:
					</p>
					<ul className="skills-list grid grid-cols-[repeat(2,_minmax(140px,_200px))] gap-[0_10px] p-0 m-[20px_0_0_0] overflow-hidden list-none">
						{skills &&
							skills.map((skill, i) => (
								<li
									key={i}
									className="relative mb-2.5 pl-5 font-mono text-sm text-blue-500 dark:text-teal-300
										before:content-['▹'] before:text-purple before:absolute before:left-0 before:text-md  before:dark:text-purple before:leading-2"
								>
									{skill}
								</li>
							))}
					</ul>
				</div>
				<div className="styled-image relative max-w-[300px] md:m-[50px_auto_0] md:w-[70%]">
					<div
						className="wrapper block relative w-full rounded-md bg-purple
						hover:outline-0 hover:after:top-[15px] hover:after:left-[15px] 
						focus:outline-0 focus:after:top-[15px] focus:after:left-[15px] 
						before:block before:absolute before:w-full before:h-full before:rounded-md before:transition-all before:top-0 before:left-0 before:dark:bg-purple before:bg-purple before:mix-blend-screen
						after:block after:absolute after:w-full after:h-full after:rounded-md after:transition-all after:border-2 after:border-solid after:dark:border-purple after:border-purple after:top-5 after:left-5 after:z-[-1]
						
						"
					>
						<Image
							className="img
								relative rounded-sm transition
							"
							src={profilePic}
							alt="Profile Photo"
							width={450}
							height={450}
							quality={95}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
