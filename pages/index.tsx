import type { NextPage } from 'next';
import useDarkMode from 'use-dark-mode';
import { Loader } from '@/components';
import { useRouter } from 'next/router';
const Index: NextPage = () => {
	const darkMode = useDarkMode(true, {
		classNameDark: 'dark',
		classNameLight: 'light',
	});
	const router = useRouter();
	return (
		<>
			{/* <App /> */}
			<Loader
				finishLoading={() => {
					// Route to /home using next/router
					router.push('/home');
				}}
			/>
		</>
	);
};

export default Index;
