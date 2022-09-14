import { config } from '@/config';
import styled from '@emotion/styled';
import useCheckSSR from 'hooks/useCheckSSR';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import Icon from '../icons/icon';
const StyledProjectsSection = styled.section`
	h2 {
		font-size: clamp(24px, 5vw, var(--fz-heading));
	}
	.archive-link {
		&:after {
			bottom: 0.1em;
		}
	}
	.projects-grid {
		list-style: none;
		padding: 0;
		margin: 0;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		@media (max-width: 1080px) {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
	.more-button {
		text-decoration: none;
		&:hover,
		&:focus,
		&:active {
			outline: none;
		}
		&:after {
			display: none !important;
		}
		margin: 80px auto 0;
	}
`;

const StyledProject = styled.li`
	cursor: default;
	@media (prefers-reduced-motion: no-preference) {
		&:hover,
		&:focus-within {
			.project-inner {
				transform: translateY(-7px);
			}
		}
	}
	a {
		position: relative;
		z-index: 1;
	}
	.project-inner {
		transition: var(--transition);
		&:hover,
		&:focus {
			box-shadow: 0 20px 30px -15px var(--slate);
		}
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		height: 100%;
		padding: 2rem 1.75rem;
		border-radius: var(--border-radius);
		transition: var(--transition);
		overflow: auto;
	}
	.project-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 35px;
		.folder {
			svg {
				width: 40px;
				height: 40px;
			}
		}
		.project-links {
			display: flex;
			align-items: center;
			margin-right: -10px;
			a {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 5px 7px;
				&.external {
					svg {
						width: 22px;
						height: 22px;
						margin-top: -4px;
					}
				}
				svg {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
	.project-title {
		a {
			position: static;
			&:before {
				content: '';
				display: block;
				position: absolute;
				z-index: 0;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
			}
		}
	}
	.project-tech-list {
		li {
			&:not(:last-of-type) {
				margin-right: 15px;
			}
		}
	}
`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Projects = () => {
	const { data, error } = useSWR<Project[]>('/api/projects', fetcher);
	const [showMore, setShowMore] = useState(false);
	const revealTitle = useRef<HTMLHeadingElement>(null);
	const revealArchiveLink = useRef<HTMLAnchorElement>(null);
	const revealProjects = useRef<[HTMLLIElement | null]>([null]);
	const isSSR = useCheckSSR();
	useEffect(() => {
		const animate = async () => {
			if (!isSSR && revealTitle.current && revealArchiveLink.current) {
				const sr = (await import('scrollreveal')).default;
				sr().reveal(revealTitle.current, config.srConfig());
				sr().reveal(revealArchiveLink.current, config.srConfig());
				revealProjects.current.forEach(
					(ref, i) => ref && sr().reveal(ref, config.srConfig(i * 100))
				);
			}
		};
		animate();
	}, [isSSR]);

	const [projects, setProjects] = useState<Project[]>([]);
	const GRID_LIMIT = 6;
	useEffect(() => {
		if (data) {
			setProjects(data);
		}
	}, [data]);

	const firstSix = projects.slice(0, GRID_LIMIT);
	const projectsToShow = showMore ? projects : firstSix;

	const projectInner = (project: Project) => {
		const { content, frontmatter } = project;
		const { title, github, external, tech } = frontmatter;
		return (
			<>
				<div className="project-inner bg-gray-200 dark:bg-zinc-800 ">
					<header>
						<div className="project-top">
							<div className="folder text-blue-700 dark:text-teal-700">
								<Icon name="Folder" />
							</div>
							<div className="project-links flex items-center text-blue-500 dark:text-green transition-all">
								{github && (
									<a
										href={github}
										aria-label="GitHub Link"
										target="_blank"
										rel="noreferrer"
									>
										<Icon name="GitHub" />
									</a>
								)}
								{external && (
									<a
										href={external}
										aria-label="External Link"
										className="external"
										target="_blank"
										rel="noreferrer"
									>
										<Icon name="External" />
									</a>
								)}
							</div>
						</div>
						<h3 className="project-title text-blue-500 dark:text-teal-500 text-xxl m-[0_0_10px]">
							<Link href={external} target="_blank" rel="noreferrer">
								<a>{title}</a>
							</Link>
						</h3>
						<div className="project-description text-blue-500 dark:text-teal-600 text-sm">
							{content}
						</div>
					</header>
					<footer>
						{tech && (
							<ul className="project-tech-list flex items-end flex-grow flex-wrap list-none p-0 m-[20px_0_0_0] text-blue-400 dark:text-teal-600">
								{tech.map((tech, index) => (
									<li key={index} className="font-mono text-xxs leading-[1.75]">
										{tech}
									</li>
								))}
							</ul>
						)}
					</footer>
				</div>
			</>
		);
	};

	if (error) return <div>Failed to load other projects</div>;
	if (!data) return <div>Loading other projects...</div>;
	return (
		<>
			<StyledProjectsSection className="flex flex-col items-center">
				<h2 ref={revealTitle} className="text-blue-500 dark:text-green m-0">
					Other Noteworthy Projects
				</h2>
				<Link href="/archive">
					<a
						className="font-mono text-sm text-blue-400 dark:text-teal-600 pt-1 pb-4
						inline-block relative transition 
						hover:after:w-full hover:after:text-purple focus:after:w-full focus:after:text-purple active:after:w-full active:after:text-purple
						after:block after:w-0 after:h-[2px] after:relative after:bottom-[0.25em] after:transition-all after:opacity-50 after:bg-purple"
						ref={revealArchiveLink}
					>
						view the archive
					</a>
				</Link>

				<ul className="projects-grid grid gap-[15px] mt-[50px] relative w-full">
					{projectsToShow &&
						projectsToShow.map((project, index) => {
							return (
								// <motion.div key={index} className="m-4">
								<StyledProject
									className="transition-all relative "
									key={index}
									ref={(el) => (revealProjects.current[index] = el)}
								>
									{projectInner(project)}
								</StyledProject>
								// </motion.div>
							);
						})}
				</ul>
				<button
					className="more-button bg-transparent rounded-lg text-sm font-mono leading-[1] cursor-pointer transition-all py-[1.25rem] px-[1.75rem]
					border-[1px] border-blue-300 dark:border-teal-300 text-blue-400 dark:text-teal-400 hover:bg-blue-200 dark:hover:bg-teal-800"
					onClick={() => setShowMore(!showMore)}
				>
					Show {showMore ? 'Less' : 'More'}
				</button>
			</StyledProjectsSection>
		</>
	);
};

export default Projects;
