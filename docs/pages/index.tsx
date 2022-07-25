import { Columns, Column } from '@ag.ds-next/columns';
import { SectionContent } from '@ag.ds-next/content';
import { Stack } from '@ag.ds-next/box';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { Prose } from '@ag.ds-next/prose';
import { TextLink } from '@ag.ds-next/text-link';
import {
	HeroBanner,
	HeroBannerTitleContainer,
	HeroBannerTitle,
	HeroBannerSubtitle,
} from '@ag.ds-next/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { PictogramCard } from '../components/PictogramCard';
import { DocumentTitle } from '../components/DocumentTitle';

export default function Homepage() {
	return (
		<>
			<DocumentTitle />
			<AppLayout>
				<HeroBanner>
					<HeroBannerTitleContainer>
						<HeroBannerTitle>
							Welcome to the Agriculture Design System (AgDS)
						</HeroBannerTitle>
						<HeroBannerSubtitle>
							AgDS provides a framework and a set of tools to help designers and
							developers build the steel threads of the Export Service quickly,
							efficiently and consistently.
						</HeroBannerSubtitle>
					</HeroBannerTitleContainer>
					<CallToActionLink href="/guides/getting-started">
						Get started
					</CallToActionLink>
				</HeroBanner>
				<SectionContent>
					<Stack gap={3}>
						<Prose>
							<p>
								AgDS is based on the{' '}
								<TextLink href="https://gold.designsystemau.org/">
									GOLD Design System
								</TextLink>{' '}
								which incorporates the highest usability and accessibility
								standards, helping us to deliver a consistent experience for all
								users, in line with the{' '}
								<TextLink href="https://www.dta.gov.au/help-and-advice/about-digital-service-standard">
									Digital Service Standard
								</TextLink>
								.
							</p>
							<p>
								The system is in early development right now. Feel free to look
								around and leave feedback or suggestions if you like but please
								do not depend on these components just yet. We&apos;re working
								hard to get a stable release out as soon as we can.
							</p>
						</Prose>
						<Columns gap={1} as="ul">
							<Column
								as="li"
								columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Packages"
									pictogram="packages"
									href="/packages"
								/>
							</Column>
							<Column
								as="li"
								columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Guides"
									pictogram="guides"
									href="/guides"
								/>
							</Column>
							<Column
								as="li"
								columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Starter kit"
									pictogram="starter"
									href="https://github.com/steelthreads/agds-next-starter-kit"
								/>
							</Column>
						</Columns>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
