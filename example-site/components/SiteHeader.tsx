import { useRouter } from 'next/router';
import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { AvatarIcon } from '@ag.ds-next/icon';
import { MainNav, MainNavLink } from '@ag.ds-next/main-nav';
import { SiteHeaderSearch } from './SiteHeaderSearch';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Content', href: '/content' },
	{ label: 'Single page form', href: '/form-single-page' },
	{ label: 'Multi step form', href: '/form-multi-step' },
];

export const SiteHeader = () => {
	const router = useRouter();
	return (
		<Stack>
			<Header
				variant="dark"
				logo={<Logo />}
				heading="Export Service"
				subline="Supporting Australian agricultural exports"
				rightContent={<SiteHeaderSearch />}
			/>
			<MainNav
				variant="agriculture"
				links={NAV_LINKS}
				activePath={router.asPath}
				rightContent={
					<MainNavLink
						label="Sign in"
						href="/form-sign-in"
						icon={<AvatarIcon size={1.5} />}
					/>
				}
			/>
		</Stack>
	);
};