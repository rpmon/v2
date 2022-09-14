import React from 'react';
import {
	IconAppStore,
	IconBookmark,
	IconCodepen,
	IconExternal,
	IconFolder,
	IconFork,
	IconGitHub,
	IconInstagram,
	IconLinkedin,
	IconLoader,
	IconLogo,
	IconPlayStore,
	IconStar,
	IconTwitter,
} from './';

type IconProps = {
	name: string;
	width?: string;
	height?: string;
};

export type IconType = {
	width?: string;
	height?: string;
};

const Icon = ({ name, width, height }: IconProps) => {
	switch (name) {
		case 'AppStore':
			return <IconAppStore />;
		case 'Bookmark':
			return <IconBookmark />;
		case 'Codepen':
			return <IconCodepen />;
		case 'External':
			return <IconExternal width={width} height={height} />;
		case 'Folder':
			return <IconFolder />;
		case 'Fork':
			return <IconFork />;
		case 'GitHub':
			return <IconGitHub width={width} height={height} />;
		case 'Instagram':
			return <IconInstagram />;
		case 'Linkedin':
			return <IconLinkedin />;
		case 'Loader':
			return <IconLoader />;
		case 'Logo':
			return <IconLogo />;
		case 'PlayStore':
			return <IconPlayStore />;
		case 'Star':
			return <IconStar />;
		case 'Twitter':
			return <IconTwitter />;
		default:
			return <IconExternal />;
	}
};

export default Icon;
