import {useCallback} from 'react';

import {Button} from '../common/Button';

import type {ReactElement} from 'react';

const domain = 'https://jumper-wrap.builtby.dad';

/************************************************************************************************
 * Share Button Component
 * Handles social sharing functionality
 * Features:
 * - Twitter share integration
 * - Dynamic URL generation
 * - Responsive positioning
 ************************************************************************************************/
export function ShareButton({profile}: {profile?: string}): ReactElement {
	const clickToTweet = useCallback(async () => {
		window.open(
			`https://twitter.com/intent/tweet?url=${domain}/${profile}?text=Check out my wrapped Jumper!`,
			'_blank'
		);
	}, [profile]);

	return (
		<div className={'absolute left-1/2 z-50 -translate-x-1/2 max-md:-bottom-6 md:-bottom-6'}>
			<Button
				onClick={clickToTweet}
				title={'Share on X'}
			/>
		</div>
	);
}
