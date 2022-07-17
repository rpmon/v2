import type { NextPage } from 'next';
import Layout from '../components/layout';
import { ScrollProvider } from '../context/scrollContext';
import { HeaderProvider } from '../context/headerContext';
import useDarkMode from 'use-dark-mode';

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
						<h3>Welcome to my website</h3>
					</Layout>
				</HeaderProvider>
			</ScrollProvider>
		</>
	);
};

export default Home;
