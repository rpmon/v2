import { config } from '@/config';
import styled from '@emotion/styled';
import useCheckSSR from 'hooks/useCheckSSR';
import { useEffect, useRef } from 'react';

const StyledContactSection = styled.section`
	margin: 0 auto 100px;
	@media (max-width: 768px) {
		margin: 0 auto 50px;
	}
	.afterline {
		display: block;
		:after {
			display: none;
		}
	}
	.title {
		font-size: clamp(40px, 5vw, 60px);
	}
`;

const Contact = () => {
	const revealContainer = useRef<HTMLDivElement>(null);
	const isSSR = useCheckSSR();
	useEffect(() => {
		const animate = async () => {
			if (!isSSR && revealContainer.current) {
				const sr = (await import('scrollreveal')).default;
				sr().reveal(revealContainer.current, config.srConfig());
			}
		};
		animate();
	}, [isSSR]);
	return (
		<>
			<StyledContactSection
				id="contact"
				ref={revealContainer}
				className="max-w-[600px] text-center flex flex-col items-center"
			>
				<h2
					className="numbered-heading mb-[20px] text-blue-500 dark:text-green font-mono text-md font-normal
					before:bottom-0 before:text-sm afterline
				"
				>
					What&apos;s Next
				</h2>
				<h2 className="title text-blue-500 dark:text-green">Get In Touch</h2>
				<p className="text-blue-400 dark:text-teal-600 text-lg">
					Although I&apos;m not currently looking for any new opportunities, my
					inbox is always open. Whether you have a question or just want to say
					hi, I&apos;ll try my best to get back to you!
				</p>

				<a
					className="more-button mt-20 w-[50%] bg-transparent rounded-lg text-sm font-mono leading-[1] cursor-pointer transition-all py-[1.25rem] px-[1.75rem]
					border-[1px] border-blue-300 dark:border-teal-300 text-blue-400 dark:text-teal-400 hover:bg-blue-200 dark:hover:bg-teal-800 hover:text-blue-400 dark:hover:text-teal-600"
					href={`mailto:${config.email}`}
				>
					Send Email
				</a>
			</StyledContactSection>
		</>
	);
};

export default Contact;
