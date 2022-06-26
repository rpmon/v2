import Head from "next/head";
import { useRouter } from "next/router";
import { config } from "../config";

const CustomHead = () => {
	const { pathname } = useRouter();
	const {
		defaultTitle,
		defaultDescription,
		defaultUrl,
		defaultImage,
		twitterUsername,
	} = config;
	const seo = {
		title: defaultTitle,
		description: defaultDescription,
		image: `${defaultUrl}${defaultImage}`,
		url: `${defaultUrl}${pathname}`,
	};

	return (
		<>
			<Head>
				<meta name="description" content={seo.description} />
				<meta name="image" content={seo.image} />
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta property="og:image" content={seo.image} />
				<meta property="og:url" content={seo.url} />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={twitterUsername} />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.description} />
				<meta name="twitter:image" content={seo.image} />
			</Head>
		</>
	);
};

export default Head;
