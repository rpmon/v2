import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { config } from '../config';
import { useHeaderContext } from '../hooks';
import IconLogo from './logo';
import Menu from './menu';
import useDarkMode from 'use-dark-mode';
import IconMoon from './icons/moon';
import IconSun from './icons/sun';

type NavProps = {
	isHome: boolean;
};

const Nav = ({ isHome }: NavProps) => {
	const [isMounted, setIsMounted] = useState(!isHome);

	const { isVisible } = useHeaderContext();

	const darkMode = useDarkMode(true, {
		classNameDark: 'dark',
		classNameLight: 'light',
	});

	const darkModeBallRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mountTimeout = setTimeout(() => {
			setIsMounted(true);
		}, 500);

		return () => {
			clearTimeout(mountTimeout);
		};
	}, []);

	const Logo = (
		<div className="logo flex justify-center items-center" tabIndex={-1}>
			{isHome ? (
				<Link href="/" aria-label="home">
					<a>
						<IconLogo />
					</a>
				</Link>
			) : (
				<Link href="/" aria-label="home">
					<a>
						<IconLogo />
					</a>
				</Link>
			)}
		</div>
	);

	const ResumeLink = (
		<Link
			className=""
			href="/resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
		>
			<a className="text-purple bg-[transparent] border-[1px] border-solid border-purple rounded-[4px] py-[0.75rem] px-[1rem] text-sm font-mono leading-[1] cursor-pointer transition hover:bg-purple/10 focus:bg-purple/10 active:bg-purple/10 hover:outline-none focus:outline-none active:outline-none after:hidden">
				Resume
			</a>
		</Link>
	);
	return (
		<>
			<header
				className="flex justify-between items-center fixed top-0 z-[11] py-0 px-[50px] w-full h-[100px] bg-white dark:bg-black filter-none pointer-events-auto select-auto transition-[var(--transition)] lg:py-[40px] md:py-[25px]"
				style={{
					height: '70px',
					transform: isVisible ? 'translateY(0)' : 'translateY(-90px)',
				}}
			>
				<nav
					className="flex justify-between items-center relative w-full text-slate font-mono z-[12]"
					style={{
						counterReset: 'item 0',
					}}
				>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: 'easeIn', duration: 1, delay: 0.1 }}
					>
						{isMounted && <>{Logo}</>}
					</motion.div>
					<div className="flex items-center max-w-md:hidden">
						<ol>
							<div className="flex justify-between items-center p-0 m-0 list-none md:hidden">
								{isMounted &&
									config.navLinks &&
									config.navLinks.map(({ url, name }, index) => (
										<motion.li
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												ease: 'easeIn',
												duration: 1,
												delay: index * 0.2,
											}}
											key={index}
											style={{
												counterIncrement: 'item 1',
											}}
										>
											<Link href={url}>
												<a className="navlinks text-darkblue dark:text-purple dark:hover:text-green w-[42px] transition-all h-[42px] p-[10px]">
													{name}
												</a>
											</Link>
										</motion.li>
									))}
							</div>
						</ol>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: 'easeIn', duration: 1, delay: 0.1 }}
							className="flex"
						>
							{isMounted && (
								<>
									<div
										className="md:hidden mr-5"
										style={{
											transitionDelay: `${
												isHome ? config.navLinks.length * 100 : 0
											}ms`,
										}}
									>
										{ResumeLink}
									</div>
									<div className="md:hidden">
										<input
											onClick={() => {
												darkMode.toggle();
												!darkMode.value
													? darkModeBallRef.current?.style.setProperty(
															'transform',
															'translateX(20px)'
													  )
													: darkModeBallRef.current?.style.removeProperty(
															'transform'
													  );
											}}
											type="checkbox"
											className="checkbox opacity-0 absolute"
											id="checkbox"
										/>
										<label
											htmlFor="checkbox"
											className="label w-[40px] h-[20px] bg-gray-600 flex rounded-[50px] items-center justify-between  relative scale-150"
										>
											<i className="text-purple">
												<IconMoon />
											</i>
											<i className="text-yellow">
												<IconSun />
											</i>
											<div
												id="darkmode-ball"
												ref={darkModeBallRef}
												className="ball w-[18px] h-[18px] bg-white absolute top-[1px] left-[1px] rounded-[50%] transition-all"
												style={
													darkMode.value
														? { transform: 'translateX(20px)' }
														: {}
												}
											></div>
										</label>
									</div>
								</>
							)}
						</motion.div>
						{isMounted && <Menu />}
					</div>
				</nav>
			</header>
		</>
	);
};

export default Nav;
