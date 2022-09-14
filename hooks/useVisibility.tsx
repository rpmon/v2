import { useCallback, useState } from 'react';

const useVisibility = (defaultValue = false) => {
	const [isVisible, setIsVisible] = useState(defaultValue);
	const show = useCallback(() => {
		setIsVisible(true);
	}, []);
	const hide = useCallback(() => {
		setIsVisible(false);
	}, []);
	const toggle = useCallback(() => {
		setIsVisible((currentState) => !currentState);
	}, []);

	return { isVisible, setIsVisible, show, hide, toggle };
};

export default useVisibility;
