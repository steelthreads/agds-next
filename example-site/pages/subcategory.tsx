import type { NextPage } from 'next';
import { Stack } from '@ag.ds-next/box';
import { SectionContent } from '@ag.ds-next/content';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Card, CardInner, CardLink, CardList } from '@ag.ds-next/card';

const Home: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Subcategory" />
			<AppLayout template={{ name: 'Subcategory', slug: 'subcategory' }}>
				<HeroSubcategoryBanner variant="lightAlt">
					<Breadcrumbs
						links={[
							{ href: '/', label: 'Home' },
							{ href: '/category', label: 'Category page' },
							{ label: 'Subcategory page' },
						]}
					/>
					<HeroSubcategoryBannerTitle>
						Subcategory banner title - xxl/display (H1)
					</HeroSubcategoryBannerTitle>
				</HeroSubcategoryBanner>
				<SectionContent>
					<Stack gap={2}>
						<H2>Subcategory content pages (H2)</H2>
						<CardList templateColumns={{ xs: 1, sm: 2, md: 3 }}>
							{Array.from(Array(6).keys()).map((idx) => (
								<Card key={idx} shadow clickable>
									<CardInner>
										<Stack gap={1}>
											<H3>
												<CardLink href="/content">
													Card title - lg / display / underline (H3)
												</CardLink>
											</H3>
											<Text as="p">
												Short descriptive paragraph designed to fit in this
												space - sm/default (P).
											</Text>
										</Stack>
									</CardInner>
								</Card>
							))}
						</CardList>
						<CallToActionLink href="/content">
							See more content pages
						</CallToActionLink>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
};

export default Home;
