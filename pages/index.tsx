import type { NextPage } from 'next';
import Layout from '../components/layout';
import { ScrollProvider } from '../context/scrollContext';
import { HeaderProvider } from '../context/headerContext';
import useDarkMode from 'use-dark-mode';
import { Hero } from '../components';
import About from '../components/sections/about';

const Home: NextPage = () => {
	const darkMode = useDarkMode(true, {
		classNameDark: 'dark',
		classNameLight: 'light',
	});
	return (
		<>
			<ScrollProvider>
				<HeaderProvider>
					<Layout>
						<main
							className="my-0 mx-auto w-full max-w-[1600px] min-h-screen py-0 px-[150px] 
							lg:py-0 lg:px-[100px] md:py-0 md:px-[50px] sm:py-0 sm:px-[25px]
						"
						>
							<Hero />
							<About />
						</main>
					</Layout>
				</HeaderProvider>
			</ScrollProvider>
		</>
	);
};

export default Home;
