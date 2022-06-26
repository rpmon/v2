import { useEffect } from 'react';

type loaderProps = {
	finishLoading: () => void;
};
const Loader = ({ finishLoading }: loaderProps) => {
	useEffect(() => {
		const afterTyped = setTimeout(() => {
			//Add class animate-fadeIn to subtitle h2 element.
			document.getElementById('subtitle')?.classList.remove('opacity-0');
		}, 3000);
	}, []);
	return (
		<div className="m-0 font-mono min-h-screen grid place-content-center text-center">
			<h1
				className="text-typography relative w-max before:absolute before:inset-0 after:absolute after:inset-0
			before:bg-white before:dark:bg-black before:animate-loader-before
			after:w-[0.125em] after:bg-black after:dark:bg-white after:animate-loader-after
			"
			>
				My name is Rohit Prakash.
			</h1>
			<h2
				id="subtitle"
				className="text-heading font-mono text-sky dark:text-aqua font-semibold pt-4 opacity-0 transition-opacity duration-500"
			>
				This is my Developer Portfolio.
			</h2>
		</div>
	);
};

export default Loader;
