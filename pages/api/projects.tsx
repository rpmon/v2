import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

const projectsDir = join(process.cwd(), 'content', 'projects');
const getAllProjects = (): Project[] => {
	const projects = fs.readdirSync(projectsDir);

	return projects.map((project) => {
		// Get fileName without extension
		const fileName = project.replace(/\.md$/, '');
		const fullPath = join(projectsDir, `${fileName}.md`);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { content, data } = matter(fileContents);
		return {
			frontmatter: data as ProjectData,
			content,
		};
	});
};
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
	const projects = getAllProjects();
	res.status(200).json(projects);
}
