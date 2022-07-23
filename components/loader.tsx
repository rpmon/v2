import { useEffect } from 'react';

type loaderProps = {
	finishLoading: () => void;
};
const Loader = ({ finishLoading }: loaderProps) => {
	useEffect(() => {
		const afterTyped = setTimeout(() => {
			//Add class animate-fadeIn to subtitle h2 element.
			document.getElementById('subtitle')?.classList.remove('opacity-0');
		}, 4000);
		const afterLoaded = setTimeout(() => {
			finishLoading();
		}, 7000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="m-0 font-mono min-h-screen grid place-content-center text-center dark:bg-black">
			<h1
				className="text-typography relative w-max sm:w-full before:absolute before:inset-0 after:absolute after:inset-0
			before:bg-white dark:before:bg-black before:animate-loader-before
			after:w-[0.125em] after:bg-slate dark:after:bg-white after:animate-loader-after
			"
			>
				My name is Rohit Prakash.
			</h1>
			<h2
				id="subtitle"
				className="text-typography font-mono text-sky dark:text-aqua font-semibold pt-4 opacity-0 transition-opacity duration-500"
			>
				This is my Developer Portfolio.
			</h2>
		</div>
	);
};

export default Loader;
