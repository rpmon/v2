import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, 500);

		return () => clearTimeout(timeout);
	}, []);

	const one = (
		<h1 className="m-[0_0_30px_4px] text-purple dark:text-purple font-mono font-normal xs:m-[0_0_20px_2px]">
			Hi, my name is
		</h1>
	);
	const two = <h2 className="big-heading text-blue-500">Rohit Prakash.</h2>;
	const three = (
		<h3 className="big-heading mt-2.5 leading-[0.9] text-blue-300 dark:text-teal-600">
			I love building things.
		</h3>
	);
	const four = (
		<>
			<p className="m-[20px_0_0] max-w-[540px] text-blue-300 dark:text-teal-600">
				I’m a software developer who designs and develops user-centric products
				on the Web. Currently, I’m focused on building reliable, scalable
				products at{' '}
				<Link href="https://hiringtek.com/">
					<a
						target="_blank"
						rel="noreferrer"
						className="text-purple dark:text-purple inline-block relative transition 
						hover:after:w-full hover:after:text-purple focus:after:w-full focus:after:text-purple active:after:w-full active:after:text-purple
						after:block after:w-0 after:h-[2px] after:relative after:bottom-[0.25em] after:transition-all after:opacity-50 after:bg-purple
					"
					>
						Hiringtek Inc.
					</a>
				</Link>
			</p>
		</>
	);
	const sections = [one, two, three, four];

	return (
		<section className="flex justify-center flex-col items-start min-h-screen p-0 xs-md:pb-[10vh]">
			{isMounted &&
				sections.map((section, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							ease: 'easeIn',
							duration: 1,
							delay: index * 0.2,
						}}
					>
						{section}
					</motion.div>
				))}
		</section>
	);
};

export default Hero;
