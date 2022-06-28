import React, { createContext, useContext, useMemo } from 'react';
import { useScroll } from '../hooks';

const WAIT = 150;
export const SCROLL_DIRECTION = {
	Down: 'down',
	None: 'none',
	Up: 'up',
};

export const ScrollContext = createContext({
	scrollTop: 0,
	previousScrollTop: 0,
	time: WAIT,
	amountScrolled: 0,
	direction: SCROLL_DIRECTION.None,
	velocity: 0,
});

type ScrollProviderProps = {
	children: React.ReactNode;
};
export const ScrollProvider = ({ children }: ScrollProviderProps) => {
	const { scrollTop, previousScrollTop, time } = useScroll(WAIT);

	const amountScrolled = useMemo(
		() => scrollTop - previousScrollTop,
		[scrollTop, previousScrollTop]
	);

	const direction = useMemo(() => {
		if (amountScrolled > 0) {
			return SCROLL_DIRECTION.Down;
		} else if (amountScrolled < 0) {
			return SCROLL_DIRECTION.Up;
		} else {
			return SCROLL_DIRECTION.None;
		}
	}, [amountScrolled]);

	const velocity = useMemo(
		() => Math.abs(amountScrolled / time),
		[amountScrolled, time]
	);

	const value = useMemo(
		() => ({
			scrollTop,
			previousScrollTop,
			time,
			amountScrolled,
			direction,
			velocity,
		}),
		[scrollTop, previousScrollTop, time, amountScrolled, direction, velocity]
	);

	return (
		<ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
	);
};

const useScrollContext = () => useContext(ScrollContext);
export default useScrollContext;
