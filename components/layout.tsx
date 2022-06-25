import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

type Props = {
	children: ReactNode;
};
const Layout = ({ children }: Props) => {
	const router = useRouter();
	const isHome = router.pathname === '/';
	const [isLoading, setIsLoading] = useState(isHome);
	const [hash, setHash] = useState('');

	// open all links in a new tab and add noopener and noreferrer
	const handleExternalLinks = () => {
		const allLinks = Array.from(document.querySelectorAll('a'));
		if (allLinks.length) {
			allLinks.forEach((link) => {
				if (link.host !== window.location.host) {
					link.setAttribute('target', '_blank');
					link.setAttribute('rel', 'noopener noreferrer');
				}
			});
		}
	};

	useEffect(() => {
		setHash(router.asPath.split('#')[1]);
	}, [router.asPath]);

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (hash) {
			setTimeout(() => {
				const el = document.getElementById(hash);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}

		handleExternalLinks();
	}, [hash, isLoading]);

	return <>{/* <Head /> */}</>;
};

export default Layout;
