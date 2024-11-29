import {WithFonts} from './WithFonts';

import type {ReactElement, ReactNode} from 'react';

export function Providers({children}: {children: ReactNode}): ReactElement {
	return <WithFonts>{children}</WithFonts>;
}
