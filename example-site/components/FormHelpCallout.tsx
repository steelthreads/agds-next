import { Prose } from '@ag.ds-next/prose';
import { Callout } from '@ag.ds-next/callout';

export const FormHelpCallout = () => {
	return (
		<Callout title="Need help?">
			<Prose>
				<p>
					Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to Friday)
					<br />
					Email{' '}
					<a href="mailto:emailaccount@awe.gov.au">emailaccount@awe.gov.au</a>
				</p>
			</Prose>
		</Callout>
	);
};
