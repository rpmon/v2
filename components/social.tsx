import { Side } from './';
import { config } from '../config';
import Link from 'next/link';
import Icon from './icons/icon';
import styles from './styles/social.module.scss';

type SocialProps = {
	isHome: boolean;
};

const Social = ({ isHome }: SocialProps) => {
	console.log(config.socialMedia);
	return (
		<Side isHome={isHome} orientation="left">
			<ul
				className={`
				flex flex-col items-center m-0 p-0 list-none ${styles['social']} dark:after:bg-purple`}
			>
				{config.socialMedia &&
					config.socialMedia.map(({ url, name }, index) => (
						<li key={index} className="text-black dark:text-purple">
							<Link href={url} target="_blank" rel="noreferrer">
								<a>
									<Icon name={name} />
								</a>
							</Link>
						</li>
					))}
			</ul>
		</Side>
	);
};

export default Social;
