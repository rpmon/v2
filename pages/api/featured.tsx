import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import { remark } from "remark";
import remarkHtml from "remark-html";

const featuredDir = join(process.cwd(), "content", "featured");
const getFeaturedProjects = () => {
  const featuredProjects = fs.readdirSync(featuredDir);

  return featuredProjects.map((project) => {
    // Get fileName without extension
    const fileName = project.replace(/\.md$/, "");
    const fullPath = join(featuredDir, `${fileName}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    const processedData = remark()
      .use(remarkHtml)
      .processSync(content)
      .toString();
    return {
      frontmatter: data as FeaturedProject,
      content: processedData,
    };
  });
};
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const featuredProjects = getFeaturedProjects();
  res.status(200).json(featuredProjects);
}
