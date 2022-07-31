import { config, KEY_CODES } from '@/config';
import { motion } from 'framer-motion';
import { useCheckSSR } from '@/hooks';
import Kansastek, {
	meta as KansastekAttributes,
} from 'content/jobs/kansastek.mdx';
import Hiringtek, {
	meta as HiringtekAttributes,
} from 'content/jobs/hiringtek.mdx';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const StyledTabList = styled.div`
	position: relative;
	z-index: 3;
	width: max-content;
	padding: 0;
	margin: 0;
	list-style: none;
	@media (max-width: 600px) {
		display: flex;
		overflow-x: auto;
		width: 100%;
		margin-bottom: 30px;
	}
	@media (max-width: 480px) {
		width: 100%;
	}
	li {
		&:first-of-type {
			@media (max-width: 600px) {
				margin-left: 50px;
			}
			@media (max-width: 480px) {
				margin-left: 25px;
			}
		}
		&:last-of-type {
			@media (max-width: 600px) {
				padding-right: 50px;
			}
			@media (max-width: 480px) {
				padding-right: 25px;
			}
		}
	}
`;

const StyledHighlight = styled.div<{ activeTabId: number }>`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: 2px;
	height: var(--tab-height);
	border-radius: var(--border-radius);
	background: var(--green);
	transform: translateY(
		calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
	);
	transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	transition-delay: 0.1s;
	@media (max-width: 600px) {
		top: auto;
		bottom: 0;
		width: 100%;
		max-width: var(--tab-width);
		height: 2px;
		transform: translateX(
			calc(${({ activeTabId }) => activeTabId} * var(--tab-width))
		);
	}
	@media (max-width: 480px) {
		max-width: 120px;
		transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
	}
`;

const StyledTabPanel = styled.div`
	width: 100%;
	height: auto;
	padding: 10px 5px;
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		font-size: var(--fz-lg);
		li {
			position: relative;
			padding-left: 30px;
			margin-bottom: 10px;
			font-size: var(--fz-md);
			&:before {
				content: '▹';
				position: absolute;
				left: 0;
				color: var(--purple);
			}
		}
	}
	h3 {
		margin-bottom: 2px;
		font-size: var(--fz-xxl);
		font-weight: 500;
		line-height: 1.3;
	}
	.range {
		margin-bottom: 25px;
		font-family: theme('fontFamily.mono');
		font-size: var(--fz-xs);
	}
`;

const Jobs = () => {
	const jobsData = [
		{ frontmatter: HiringtekAttributes, Content: Hiringtek },
		{ frontmatter: KansastekAttributes, Content: Kansastek },
	];
	const [activeTabId, setActiveTabId] = useState(0);
	const [tabFocus, setTabFocus] = useState<number | null>(null);
	const tabs = useRef<(HTMLElement | null)[]>([]);
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
	}, [isSSR]);

	const focusTab = () => {
		if (tabFocus != null) {
			if (tabs.current[tabFocus]) {
				tabs.current[tabFocus]?.focus();
				return;
			}
		}
	};

	//Only re-run the effect if tabFocus changes;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => focusTab(), [tabFocus]);

	// Focus on tabs when using up & down arrow keys
	const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case KEY_CODES.ARROW_UP: {
				e.preventDefault();
				if (tabFocus === null) {
					setTabFocus(0);
				} else {
					tabFocus > 0 && setTabFocus(tabFocus - 1);
					tabFocus <= 0 && setTabFocus(tabs.current.length - 1);
				}
				break;
			}

			case KEY_CODES.ARROW_DOWN: {
				e.preventDefault();
				if (tabFocus === null) {
					setTabFocus(0);
				} else {
					tabFocus < tabs.current.length - 1 && setTabFocus(tabFocus + 1);
					tabFocus >= tabs.current.length - 1 && setTabFocus(0);
				}
				break;
			}

			default: {
				break;
			}
		}
	};
	return (
		<>
			<section id="jobs" ref={revealContainer} className="max-w-[700px]">
				<h2 className="numbered-heading text-blue-500 dark:text-green">
					Where I&apos;ve worked
				</h2>
				<div className="inner flex sm:block sm-min:min-h-[340px]">
					<StyledTabList role="tablist" onKeyDown={(e) => onKeyDown(e)}>
						{jobsData &&
							jobsData.map((job, i) => {
								const { company } = job.frontmatter;
								return (
									<button
										className={`tab-button link text-blue-500 dark:text-green
											 flex items-center w-full h-[var(--tab-height)] p-[0_20px_2px] border-l-2 border-solid border-l-purple dark:border-l-purple
											bg-transparent ${
												activeTabId === i ?? 'text-purple dark:text-purple'
											} font-mono text-sm text-left whitespace-nowrap
											md:p-[0_15px_2px] sm:flex-center sm:min-w-[240px] sm:max-w-[240px] xs:min-w-[120px] xs:max-w-[120px] sm:p-[0_15px] sm:border-l-0 sm:border-b-2 sm:border-b-purple sm:text-center
											hover:bg-gray-200 hover:dark:bg-slate-light
											focus:bg-gray-200 focus:dark:bg-slate-light
										`}
										key={i}
										onClick={() => setActiveTabId(i)}
										ref={(el) => (tabs.current[i] = el)}
										id={`tab-${i}`}
										role="tab"
										tabIndex={activeTabId === i ? 0 : -1}
									>
										<span className="text-blue-500 dark:text-green">
											{company}
										</span>
									</button>
								);
							})}
						<StyledHighlight activeTabId={activeTabId} />
					</StyledTabList>
					<div
						className="tab-panels
						relative w-full ml-5 sm:ml-0
					"
					>
						{jobsData &&
							jobsData.map((job, i) => {
								const { frontmatter, Content } = job;
								const { company, title, range, url } = frontmatter;
								return (
									<motion.div
										key={i}
										initial={{ opacity: activeTabId !== i ? 0 : 1 }}
										animate={{ opacity: activeTabId !== i ? 0 : 1 }}
										transition={{ ease: 'easeIn', duration: 0.5 }}
									>
										<StyledTabPanel
											className="tab-panel
												w-full h-auto p-[10px_5px] 
											"
											id={`panel-${i}`}
											role="tabpanel"
											tabIndex={activeTabId === i ? 0 : -1}
											hidden={activeTabId !== i}
										>
											<h3 className="text-blue-500 dark:text-green">
												<span>{title}</span>
												<span className="company text-blue-400 dark:text-teal-600">
													&nbsp;@&nbsp;
													<Link href={url}>
														<a
															className="text-purple dark:text-purple inline-block relative transition 
						hover:after:w-full hover:after:text-purple focus:after:w-full focus:after:text-purple active:after:w-full active:after:text-purple
						after:block after:w-0 after:h-[2px] after:relative after:bottom-[0.25em] after:transition-all after:opacity-50 after:bg-purple"
														>
															{company}
														</a>
													</Link>
												</span>
											</h3>
											<p className="range text-blue-400 dark:text-teal-600">
												{range}
											</p>
											<div className="text-blue-400 dark:text-teal-600">
												<Content />
											</div>
										</StyledTabPanel>
									</motion.div>
								);
							})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Jobs;
