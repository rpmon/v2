import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { config } from '../config';
import { useHeaderContext } from '../hooks';
import IconLogo from './logo';
import Menu from './menu';

type NavProps = {
	isHome: boolean;
};

const Nav = ({ isHome }: NavProps) => {
	const [isMounted, setIsMounted] = useState(!isHome);

	const { isVisible } = useHeaderContext();

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
				className="flex justify-between items-center fixed top-0 z-[11] py-0 px-[50px] w-full h-[100px] bg-white filter-none pointer-events-auto select-auto backdrop-blur-[10px] transition-[var(--transition)] lg:py-[40px] md:py-[25px]"
				style={{
					height: '70px',
					transform: isVisible ? 'translateY(0)' : 'translateY(-70px)',
					boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
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
												<a className="navlinks text-darkblue w-[42px] h-[42px] p-[10px]">
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
						>
							{isMounted && (
								<div
									className="md:hidden"
									style={{
										transitionDelay: `${
											isHome ? config.navLinks.length * 100 : 0
										}ms`,
									}}
								>
									{ResumeLink}
								</div>
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
