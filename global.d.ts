type ContentAttributes = {
	date: string;
	title: string;
	company: string;
	location: string;
	range: string;
	url: string;
};

declare module '*.mdx' {
	const meta: ContentAttributes;
}
