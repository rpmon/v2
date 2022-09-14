import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type SideProps = {
	children: React.ReactNode;
	isHome: boolean;
	orientation: string;
};

const Side = ({ children, isHome, orientation }: SideProps) => {
	const [isMounted, setIsMounted] = useState(!isHome);
	useEffect(() => {
		if (!isHome) {
			return;
		}
		const timeout = setTimeout(() => setIsMounted(true), 500);
		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`w-[40px] fixed bottom-0 ${
				orientation === 'left'
					? 'left-10 right-auto lg:left-5 lg:right-auto'
					: 'left-auto right-10 lg:left-auto lg:right-5'
			} md:hidden`}
		>
			{isMounted && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeIn', duration: 1, delay: 0.1 }}
				>
					{children}
				</motion.div>
			)}
		</div>
	);
};

export default Side;
