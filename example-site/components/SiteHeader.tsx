import { useRouter } from 'next/router';
import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { AvatarIcon } from '@ag.ds-next/icon';
import { MainNav, MainNavBottomBar, MainNavLink } from '@ag.ds-next/main-nav';
import { SiteHeaderSearch } from './SiteHeaderSearch';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Category 1', href: '/category' },
];

export const SiteHeader = ({ focusMode }: { focusMode: boolean }) => {
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

			{!focusMode ? (
				<MainNav
					id="main-nav"
					variant="agriculture"
					links={NAV_LINKS}
					activePath={router.asPath}
					rightContent={
						<MainNavLink
							label="Sign in"
							href="/sign-in-form"
							icon={AvatarIcon}
						/>
					}
				/>
			) : (
				<MainNavBottomBar variant="agriculture" />
			)}
		</Stack>
	);
};
