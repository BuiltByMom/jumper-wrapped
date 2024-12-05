import {type HTMLAttributes, type ReactElement} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

import {Card} from './Card';

type TTopBridgeChainCardProps = {
	chainName: string;
} & HTMLAttributes<HTMLDivElement>;

const animationConfig = {
	type: 'spring',
	bounce: 0.3,
	duration: 0.6,
	delay: 0.3,
	stiffness: 150,
	damping: 15
};

const titleAnimation = {
	initial: {y: -120, opacity: 0},
	animate: {
		y: 0,
		opacity: 1,
		transition: animationConfig
	}
};

const timeAnimation = {
	initial: {scale: 0.6, opacity: 0},
	animate: {
		scale: 1,
		opacity: 1,
		transition: animationConfig
	}
};

const copyAnimation = {
	initial: {y: 120, opacity: 0},
	animate: {
		y: 0,
		opacity: 1,
		transition: animationConfig
	}
};

export default function TopBridgeChainCard({chainName, ...props}: TTopBridgeChainCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stat/backgroundBelovedChain.jpg)'}
			mobileBackgroundImage={'url(/cards/stat/backgroundBelovedChainMobile.jpg)'}>
			<motion.div
				variants={titleAnimation}
				initial={'initial'}
				animate={'animate'}
				className={'flex flex-col gap-2 pb-6 pt-2 text-center text-white'}>
				<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
					{`Just can’t quit ${chainName}, huh?`}
				</b>
			</motion.div>

			<motion.div
				variants={timeAnimation}
				initial={'initial'}
				animate={'animate'}
				className={'relative mt-auto flex aspect-square w-[208px] items-center justify-center'}>
				<Image
					className={chainName === 'solana' ? 'size-[180px]' : 'size-[208px] rounded-full'}
					src={`/chains/${chainName}.svg`}
					alt={chainName}
					width={208}
					height={208}
					quality={100}
				/>
			</motion.div>

			<motion.div
				variants={copyAnimation}
				initial={'initial'}
				animate={'animate'}
				className={'mt-auto flex items-center justify-center pt-6 text-center'}>
				<p className={'font-space-grotesk text-2xl font-medium text-white'}>
					{'True degen romance right there.'}
				</p>
			</motion.div>
		</Card>
	);
}
