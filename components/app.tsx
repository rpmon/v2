import { HeaderProvider } from 'context/headerContext';
import { ScrollProvider } from 'context/scrollContext';
import Layout from '@/components/layout';
import { Hero, About } from '@/components';
import Jobs from './sections/jobs';
import Featured from './sections/featured';

const App = () => {
	return (
		<>
			<ScrollProvider>
				<HeaderProvider>
					<Layout>
						<main
							className="my-0 mx-auto w-full max-w-[1600px] min-h-screen py-0 px-[150px] 
							lg:py-0 lg:px-[100px] md:py-0 md:px-[50px] sm:py-0 sm:px-[25px]
						"
							style={{
								counterReset: 'section',
							}}
						>
							<Hero />
							<About />
							<Jobs />
							<Featured />
						</main>
					</Layout>
				</HeaderProvider>
			</ScrollProvider>
		</>
	);
};

export default App;
