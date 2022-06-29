import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-[100vh]">
				<h1 className="text-[5rem] text-slate inline-block">
					Website currently being <span className="text-green">developed</span>
					<h2 className="text-[2rem] text-slate text-right block pt-6">
						- Built with Next.Js and TypeScript ❤️
					</h2>
				</h1>
			</div>
		</>
	);
};

export default Home;
