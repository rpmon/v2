import { useEffect, useMemo, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

//This function is used to fetch the current scroll position
const getScrollPosition = () => {
	if (typeof window === 'undefined') {
		return 0;
	}

	return (
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop ||
		0
	);
};

//This function is used to store the scroll position
const useScroll = (wait = 250) => {
	const defaultScrollTop = useMemo(() => getScrollPosition(), []);
	const previousScrollTop = useRef(defaultScrollTop);
	const [currentScrollTop, setCurrentScrollTop] = useState(defaultScrollTop);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = getScrollPosition();
			setCurrentScrollTop(scrollTop);
			setTimeout(() => {
				previousScrollTop.current = scrollTop;
			}, wait);
		};

		const handleDocumentScrollThrottled = throttle(handleScroll, wait);
		window.addEventListener('scroll', handleDocumentScrollThrottled);

		return () => {
			window.removeEventListener('scroll', handleDocumentScrollThrottled);
		};
	}, [wait]);

	return {
		scrollTop: currentScrollTop,
		previousScrollTop: previousScrollTop.current,
		time: wait,
	};
};

export default useScroll;
