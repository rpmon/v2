type ContentAttributes = {
	date: string;
	title: string;
	company: string;
	location: string;
	range: string;
	url: string;
};
type FeaturedProject = {
	title: string;
	github: string;
	cover: string;
	external: string;
	tech: string[];
	cta: string;
};

declare module '*.mdx' {
	const meta: ContentAttributes;
	const featured: FeaturedProject;
}
