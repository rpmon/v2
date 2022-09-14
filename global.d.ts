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
type ProjectData = {
	title: string;
	date: string;
	github: string;
	external: string;
	tech: string[];
	showInProjects: boolean;
};

type FeaturedProjects = {
	content: string;
	frontmatter: FeaturedProject;
}[];

type Project = {
	content: string;
	frontmatter: ProjectData;
};

declare module '*.mdx' {
	const meta: ContentAttributes;
	const featured: FeaturedProject;
}
