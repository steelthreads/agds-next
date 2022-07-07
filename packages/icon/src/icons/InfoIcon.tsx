import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const InfoIcon = createIcon(
	<Fragment>
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="17" x2="12" y2="13" />
		<path d="M12 7H12.01" />
	</Fragment>,
	'InfoIcon'
);
