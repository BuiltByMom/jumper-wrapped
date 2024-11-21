import {WithFonts} from './WithFonts';

import type {ReactElement} from 'react';

export function Providers({children}: {children: ReactElement}): ReactElement {
	return <WithFonts>{children}</WithFonts>;
}
