import agBranding from './ag-branding.svg';
import body from './body.svg';
import box from './box.svg';
import breadcrumb from './breadcrumb.svg';
import button from './button.svg';
import card from './card.svg';
import columns from './columns.svg';
import content from './content.svg';
import core from './core.svg';
import footer from './footer.svg';
import guides from './guides.svg';
import header from './header.svg';
import heading from './heading.svg';
import icon from './icon.svg';
import linkList from './link-list.svg';
import mainNav from './main-nav.svg';
import packages from './packages.svg';
import sideNav from './side-nav.svg';
import starter from './starter.svg';
import text from './text.svg';

export const pictograms = {
	'ag-branding': agBranding,
	body,
	box,
	breadcrumb,
	breadcrumbs: breadcrumb,
	button,
	card,
	columns,
	content,
	core,
	footer,
	guides,
	header,
	heading,
	icon,
	linkList,
	'link-list': linkList,
	mainNav,
	'main-nav': mainNav,
	packages,
	sideNav,
	'side-nav': sideNav,
	starter,
	text,
};

export function getPictogram(slug: string) {
	if (slug in pictograms) {
		return pictograms[slug as keyof typeof pictograms];
	}
	return pictograms.box;
}
