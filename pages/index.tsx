import type { NextPage } from 'next';
import useDarkMode from 'use-dark-mode';
import { App } from '@/components';

const Home: NextPage = () => {
	const darkMode = useDarkMode(true, {
		classNameDark: 'dark',
		classNameLight: 'light',
	});
	return (
		<>
			<App />
		</>
	);
};

export default Home;
