import type { NextPage } from 'next';
import { CustomHead, Loader } from '@/components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDarkMode } from '@/hooks';
const Index: NextPage = () => {
	const [darkMode, setDarkMode] = useDarkMode();
	const router = useRouter();
	return (
		<>
			{/* <App /> */}
			<CustomHead />
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
