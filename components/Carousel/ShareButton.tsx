import {useCallback} from 'react';

import {Button} from '../common/Button';

import type {ReactElement} from 'react';

/************************************************************************************************
 * Share Button Component
 * Handles social sharing functionality
 * Features:
 * - Twitter share integration
 * - Dynamic URL generation
 * - Responsive positioning
 ************************************************************************************************/
export function ShareButton({profile}: {profile?: string}): ReactElement {
	function buildShareMessage(): string {
		const lines = ["I've been Making. The. Jump 😌", '', 'Check out my Jumper Wrapped 2024 💜'];
		return encodeURIComponent(lines.join('\n'));
	}

	const clickToTweet = useCallback(async () => {
		const text = buildShareMessage();
		const baseTwitterUrl = 'https://x.com/intent/tweet';
		const domain = `https://wrapped.jumper.exchange/${profile}`;

		const shareUrl = `${baseTwitterUrl}?text=${text}&url=${encodeURIComponent(domain)}`;

		window.open(shareUrl, '_blank');
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
