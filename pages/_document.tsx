import {Head, Html, Main, NextScript} from 'next/document';

import type {ReactElement} from 'react';

export default function Document(): ReactElement {
	return (
		<Html lang={'en'}>
			<Head />
			<body className={'antialiased'}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
