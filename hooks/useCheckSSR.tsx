import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

//Checks if the user is on the server or not
const useCheckSSR = () => {
	const [isSSR, setIsSSR] = useState(false);
	useEffect(() => {
		//check window object to see if it is undefined
		typeof window === 'undefined' ? setIsSSR(true) : setIsSSR(false);
	}, []);
	return isSSR;
};

export default useCheckSSR;
