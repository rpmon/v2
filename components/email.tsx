import Link from 'next/link';
import { config } from '../config';
import Side from './side';

type EmailProps = {
	isHome: boolean;
};
const Email = ({ isHome }: EmailProps) => {
	return (
		<Side isHome={isHome} orientation="right">
			<div
				className="
				flex flex-col items-center relative
				after:block after:w-[1px] after:h-[90px] after:mx-auto after:my-0 after:bg-black
			"
			>
				<Link href={`mailto:${config.email}`}>
					<a
						className="text-black hover:text-purple my-5 mx-auto p-2.5 font-mono text-sm leading-loose tracking-widest hover:translate-y-[-3px] focus:translate-y-[-3px] transition-all"
						style={{ writingMode: 'vertical-rl' }}
					>
						{config.email}
					</a>
				</Link>
			</div>
		</Side>
	);
};

export default Email;
