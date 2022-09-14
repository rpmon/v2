import { createContext, useMemo, useContext, useEffect } from 'react';
import useScrollContext, { SCROLL_DIRECTION } from './scrollContext';
import { useVisibility } from '../hooks';

const TOP_START = 100;

export const HeaderContext = createContext({
	isVisible: true,
});

type HeaderProviderProps = {
	children: React.ReactNode;
};
export const HeaderProvider = ({ children }: HeaderProviderProps) => {
	const { isVisible, show, hide } = useVisibility(true);
	const { scrollTop, direction } = useScrollContext();

	useEffect(() => {
		const shouldShow =
			scrollTop <= TOP_START || direction !== SCROLL_DIRECTION.Down;
		const shouldHide =
			scrollTop > TOP_START && direction === SCROLL_DIRECTION.Down;
		if (shouldShow) show();
		if (shouldHide) hide();
	}, [scrollTop, direction, hide, show]);

	const value = useMemo(
		() => ({
			isVisible,
		}),
		[isVisible]
	);

	return (
		<HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
	);
};

const useHeaderContext = () => useContext(HeaderContext);

export default useHeaderContext;
