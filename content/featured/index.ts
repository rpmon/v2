import MakeBabel, { featured as cbaMeta } from './make-babel/cba.mdx';
import CloudSpeech, { featured as sttMeta } from './live-transcription/stt.mdx';
import Youtube, { featured as ytMeta } from './yt-player/yt.mdx';

const featuredProjects = [
	{
		frontmatter: cbaMeta,
		Content: MakeBabel,
	},
	{
		frontmatter: sttMeta,
		Content: CloudSpeech,
	},
	{
		frontmatter: ytMeta,
		Content: Youtube,
	},
];
export default featuredProjects;
