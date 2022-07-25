const snippets = [
	{
		group: 'Boilerplate',
		name: 'One',
		code: `<Header logo={<Logo />} heading="Export Service" />
    <MainNav links={[{ label: "Hello", href: "#" }]} variant='agriculture' />

    <PageContent as="main">
      <Prose>
        <h1>Page heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus lacinia libero.</p>
        <p>Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi congue lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor ullamcorper.</p>
      </Prose>
    </PageContent>
    `,
	},
	{
		group: 'Body',
		name: 'Basic',
		code: `<Prose>
    <h1>Page heading</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus lacinia libero.</p>
    <p>Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi congue lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor ullamcorper.</p>
  </Prose>
    `,
	},
	{
		group: 'LinkList',
		name: 'Basic',
		code: `<LinkList links={[
      { href: '#', label: 'Home' },
      { href: '#', label: 'Establishments' },
      { href: '#', label: 'Applications' },
    ]} />`,
	},
	{
		group: 'Breadcrumbs',
		name: 'Basic',
		code: `<Breadcrumbs links={[
      { href: '#', label: 'Home' },
      { href: '#', label: 'Establishments' },
      { label: 'Applications' },
    ]} />`,
	},
	{
		group: 'Footer',
		name: 'Basic',
		code: `<Footer>
    <nav aria-label="footer">
      <LinkList
        horizontal
        links={[
          { href: '#', label: 'Home' },
          { href: '#', label: 'Terms and conditions' },
          { href: '#', label: 'Privacy policy' },
          { href: '#', label: 'A really long link title' },
        ]}
      />
    </nav>
    <FooterDivider />
    <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
      We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture.
      We pay our respects to their Elders past, present and emerging.
    </Text>
    <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
      &copy; 2022 Department of Agriculture, Fisheries and Forestry
    </Text>
  </Footer>`,
	},
	{
		group: 'Footer',
		name: 'Complex',
		code: `<Footer variant="agriculture">
    <nav aria-label="footer">
      <Columns>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3  }}>
          <Stack gap={0.5}>
            <H3>Section</H3>
            <LinkList
              links={[
                { href: "#", label: "Link 1" },
                { href: "#", label: "Link 2" },
                { href: "#", label: "Link 3" },
              ]}
            />
          </Stack>
        </Column>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
          <Stack gap={0.5}>
            <H3>Section</H3>
            <LinkList
              links={[
                { href: "#", label: "Link 1" },
                { href: "#", label: "Link 2" },
                { href: "#", label: "Link 3" },
              ]}
            />
          </Stack>
        </Column>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
          <Stack gap={0.5}>
            <H3>Section</H3>
            <LinkList
              links={[
                { href: "#", label: "Link 1" },
                { href: "#", label: "Link 2" },
                { href: "#", label: "Link 3" },
              ]}
            />
          </Stack>
        </Column>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
          <Stack gap={0.5}>
            <H3>Section</H3>
            <LinkList
              links={[
                { href: "#", label: "Link 1" },
                { href: "#", label: "Link 2" },
                { href: "#", label: "Link 3" },
              ]}
            />
          </Stack>
        </Column>
      </Columns>
    </nav>
    <FooterDivider />
    <Text as="p">Footer text</Text>
    <Box maxWidth="240px">
      <Logo />
    </Box>
    <FooterDivider />
    <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
      We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture.
      We pay our respects to their Elders past, present and emerging.
    </Text>
    <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
      &copy; 2022 Department of Agriculture, Fisheries and Forestry
    </Text>
  </Footer>
  `,
	},
	{
		group: 'SideNav',
		name: 'Basic',
		code: `<SideNav
activePath="#welcome"
title="SideNav"
collapseTitle="In this section"
titleLink="#"
items={[
  {
    href: "#welcome",
    label: "Welcome",
  },
  {
    href: "#one",
    label: "Item",
    items: [
      {
        href: "#two",
        label: "Sub-item",
      },
    ],
  },
  { href: "#three", label: "Item" },
  {
    href: "#four",
    label: "Item",
    items: [
      {
        href: "#five",
        label: "Sub-item",
        items: [
          {
            href: "#six",
            label: "Sub-sub-item",
          },
          {
            href: "#seven",
            label: "Sub-sub-item",
          },
        ],
      },
      {
        href: "#eight",
        label: "Sub-item",
      },
    ],
  },
]}
/>
`,
	},
	{
		group: 'Button',
		name: 'Primary',
		code: `<Button>Submit</Button>`,
	},
	{
		group: 'Button',
		name: 'Secondary',
		code: `<Button variant='secondary'>Save</Button>`,
	},
	{
		group: 'Button',
		name: 'Tertiary',
		code: `<Button variant='tertiary'>Cancel</Button>`,
	},
	{
		group: 'Columns',
		name: 'Basic',
		code: `<Columns gap={2}>
      <Column columnSpan={[12, 6]} background="shade" padding={1}>
        <Text>Left</Text>
      </Column>
      <Column columnSpan={[12, 6]} background="shade" padding={1}>
        <Text>Right</Text>
      </Column>
    </Columns>`,
	},
	{
		group: 'Callout',
		name: 'Basic',
		code: `<Callout>
    <CalloutTitle as="h3">Callout heading</CalloutTitle>
      <Text>Description of the callout.</Text>
    </Callout>`,
	},
	{
		group: 'TextInput',
		name: 'Basic',
		code: `<TextInput label="Name" />`,
	},
	{
		group: 'TextArea',
		name: 'Basic',
		code: `<Textarea label="Message" />`,
	},
	{
		group: 'Select',
		name: 'Basic',
		code: `<Select 	label="What option?"
    placeholder="Please select"
    options={[
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C' },
    ]} />`,
	},
	{
		group: 'Fieldset',
		name: 'Basic',
		code: `	<Fieldset legend="What is your address?">
    <FormStack>
			<TextInput label="Street and number" required maxWidth="xl" />
			<TextInput label="Suburb" required maxWidth="xl" />
			<TextInput label="Country" required maxWidth="xl" />
			<TextInput label="Postcode" required maxWidth="sm" />
		</FormStack>
	</Fieldset>`,
	},
	{
		group: 'Accordion',
		name: 'Basic',
		code: `<Accordion><AccordionItem title="Accordion">
    <AccordionItemContent><Text as="p">This is some text inside an Accordion</Text></AccordionItemContent>
  </AccordionItem></Accordion>`,
	},
	{
		group: 'ProgressIndicator',
		name: 'Basic',
		code: `<ProgressIndicator
    items={[
      { href: '#', label: 'Introduction', status: 'doing' },
      { href: '#', label: 'Business Contacts', status: 'todo' },
      { href: '#', label: 'Case Studies', status: 'done' },
    ]}
  />`,
	},
	{
		group: 'Checkbox',
		name: 'Basic',
		code: `<Checkbox checked={false}>Label</Checkbox>`,
	},
	{
		group: 'Radio',
		name: 'Basic',
		code: `<ControlGroup>
    <Radio checked={false}>Phone</Radio>
    <Radio checked={false}>Tablet</Radio>
    <Radio checked={true}>Laptop</Radio>
  </ControlGroup>`,
	},
	{
		group: 'Switch',
		name: 'Basic',
		code: `<Switch checked={false} label="Show establishments" />`,
	},
	{
		group: 'Searchbox',
		name: 'Basic',
		code: `<SearchBox onSubmit={console.log}>
    <SearchBoxInput label="Search this website" />
    <SearchBoxButton>Search</SearchBoxButton>
  </SearchBox>`,
	},
	{
		group: 'KeywordList',
		name: 'Basic',
		code: `<KeywordList
    items={[
      { subTitle: 'Department of', title: 'Agriculture, Fisheries and Forestry' },
      { subTitle: 'Department of', title: 'Communications and the Arts' },
    ]}
  />`,
	},
	{
		group: 'SkipLinks',
		name: 'Basic',
		code: `<SkipLinks
    links={[
      { href: '#main-content', label: 'Skip to main content' },
      { href: '#main-nav', label: 'Skip to main navigation' },
    ]}
  />`,
	},
	{
		group: 'InpageNav',
		name: 'Basic',
		code: `<InpageNav
		title="On this page"
		links={[
			{ href: '#section-1', label: 'Section 1' },
			{ href: '#section-2', label: 'Section 2' },
		]}
	/>`,
	},
	{
		group: 'DirectionLink',
		name: 'Basic',
		code: `<DirectionLink href="#" direction="left">Back</DirectionLink>`,
	},
	{
		group: 'CallToAction',
		name: 'Link',
		code: `<CallToActionLink href="#">Sign up</CallToActionLink>`,
	},
	{
		group: 'CallToAction',
		name: 'Button',
		code: `<CallToActionButton onClick={console.log}>Sign up</CallToActionButton>`,
	},
	{
		group: 'Tags',
		name: 'Basic',
		code: `<Tags
    heading={<Text as="h2" fontWeight="bold">Tags:</Text>}
    items={[
      { href: '#', label: 'Foo' },
      { href: '#', label: 'Bar' },
      { href: '#', label: 'Baz' },
    ]}
    />`,
	},
	{
		group: 'Form',
		name: 'Sign in',
		code: `<form>
    <FormStack>
      <TextInput label="Email" type="email" maxWidth="xl" />
      <TextInput label="Password" type="password" maxWidth="xl" />
      <ButtonGroup>
        <Button type="submit">Submit</Button>
        <Button type="button" variant="secondary">
          Cancel
        </Button>
      </ButtonGroup>
    </FormStack>
  </form>`,
	},
	{
		group: 'FileUpload',
		name: 'Basic',
		code: '<FileUpload label="Drivers license" />',
	},
	{
		group: 'TaskList',
		name: 'Basic',
		code: `<TaskList
    items={[
      {
        href: '#',
        label: 'Check eligibility',
        status: 'done',
      },
      {
        href: '#',
        label: 'Lorem ipsum dolor sit amet',
        status: 'done',
      },
      {
        href: '#',
        label: 'Case Studies',
        status: 'todo',
      },
      {
        href: '#',
        label: 'Review and submit',
        message: 'Not available until previous tasks are done',
        status: 'todo',
      },
    ]}
  />`,
	},
	{
		group: 'PageAlert',
		name: 'Info',
		code: `<PageAlert tone="info" title="Notice">
      <Prose><p>All vacancies close on the advertised closing date unless otherwise specified.</p></Prose>
    </PageAlert>`,
	},
	{
		group: 'PageAlert',
		name: 'Success',
		code: `<PageAlert tone="success" title="Submission successful">
      <Prose><p>Your application has been successfully submitted.</p></Prose>
    </PageAlert>`,
	},
	{
		group: 'PageAlert',
		name: 'Error',
		code: `<PageAlert tone="error" title="There is a problem">
      <Prose>
        <ul>
          <li><a href="#">Full name must not be empty</a></li>
          <li><a href="#">Email must not be empty</a></li>
          <li><a href="#">Description must not be empty</a></li>
        </ul>
      </Prose>
    </PageAlert>`,
	},
	{
		group: 'PageAlert',
		name: 'Warning',
		code: `<PageAlert tone="warning" title="Browser out of date">
      <Prose><p>Your web browser is out of date.</p></Prose>
    </PageAlert>`,
	},
	{
		group: 'Table',
		name: 'Basic',
		code: `<TableWrapper>
    <Table>
      <TableCaption>
        Population of Australian states and territories, December 2015
      </TableCaption>
      <TableHead>
        <tr>
          <TableHeader width="50%" scope="col">
            Location
          </TableHeader>
          <TableHeader textAlign="right" scope="col">
            Population
          </TableHeader>
          <TableHeader textAlign="right" scope="col">
            Change over previous year %
          </TableHeader>
          <TableHeader textAlign="right" scope="col">
            Change over previous decade %
          </TableHeader>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <TableCell>New South Wales</TableCell>
          <TableCell textAlign="right">7,670,700</TableCell>
          <TableCell textAlign="right">3.1%</TableCell>
          <TableCell textAlign="right">12.9%</TableCell>
        </tr>
        <tr>
          <TableCell>Victoria</TableCell>
          <TableCell textAlign="right">5,996,400</TableCell>
          <TableCell textAlign="right">2.5%</TableCell>
          <TableCell textAlign="right">9.3%</TableCell>
        </tr>
        <tr>
          <TableCell>Queensland</TableCell>
          <TableCell textAlign="right">4,808,800</TableCell>
          <TableCell textAlign="right">1.7%</TableCell>
          <TableCell textAlign="right">13.3%</TableCell>
        </tr>
        <tr>
          <TableCell>Western Australia</TableCell>
          <TableCell textAlign="right">2,603,900</TableCell>
          <TableCell textAlign="right">2.3%</TableCell>
          <TableCell textAlign="right">11.6%</TableCell>
        </tr>
        <tr>
          <TableCell>South Australia</TableCell>
          <TableCell textAlign="right">1,702,800</TableCell>
          <TableCell textAlign="right">2.0%</TableCell>
          <TableCell textAlign="right">6.8%</TableCell>
        </tr>
        <tr>
          <TableCell>Tasmania</TableCell>
          <TableCell textAlign="right">517,400</TableCell>
          <TableCell textAlign="right">4%</TableCell>
          <TableCell textAlign="right">5.3%</TableCell>
        </tr>
        <tr>
          <TableCell>Nothern Territory</TableCell>
          <TableCell textAlign="right">244,400</TableCell>
          <TableCell textAlign="right">1.2%</TableCell>
          <TableCell textAlign="right">4.5%</TableCell>
        </tr>
        <tr>
          <TableCell>Australian Capital Territory</TableCell>
          <TableCell textAlign="right">393,000</TableCell>
          <TableCell textAlign="right">2.4%</TableCell>
          <TableCell textAlign="right">9.6%</TableCell>
        </tr>
      </TableBody>
    </Table>
  </TableWrapper>
  `,
	},
	{
		group: 'DatePicker',
		name: 'Basic',
		code: `<DatePicker label="Select date" value={new Date()} onChange={() => {}} />`,
	},
	{
		group: 'DateRangePicker',
		name: 'Basic',
		code: `<DateRangePicker value={{ from: new Date('2000-01-03'), to: new Date('2000-01-07') }} onChange={() => {}} />`,
	},
	{
		group: 'LoadingDots',
		name: 'Basic',
		code: `<LoadingDots />`,
	},
	{
		group: 'LoadingBlanket',
		name: 'Basic',
		code: `<Box background="body" height="300px" width="100%" padding={1} border rounded style={{ position: 'relative' }}>
      <LoadingBlanket label="Component loading state" />
    </Box>`,
	},
	{
		group: 'HeroBanner',
		name: 'Basic',
		code: `<HeroBanner
    image={
        <img
            alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
            src="/agds-next/img/placeholder/hero-banner.jpeg"
        />
    }
>
    <HeroBannerTitleContainer>
        <HeroBannerTitle>Website hero banner title - xxxl/display (H1)</HeroBannerTitle>
        <HeroBannerSubtitle>Hero banner paragraph text (P)</HeroBannerSubtitle>
    </HeroBannerTitleContainer>
    <SearchBox onSubmit={() => {}}>
        <SearchBoxInput label="Search this website" />
        <SearchBoxButton iconOnly={{ xs: true, md: false }}>Search</SearchBoxButton>
    </SearchBox>
  </HeroBanner>`,
	},
	{
		group: 'HeroCategoryBanner',
		name: 'Basic',
		code: `<HeroCategoryBanner
    image={
      <img
        alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
        src="/agds-next/img/placeholder/hero-banner.jpeg"
      />
    }
  >
    <HeroCategoryBannerTitle>
      Website hero banner title - xxl/display (H1)
    </HeroCategoryBannerTitle>
    <HeroCategoryBannerSubtitle>
      Hero banner sub title (P).
    </HeroCategoryBannerSubtitle>
  </HeroCategoryBanner>`,
	},
	{
		group: 'HeroSubcategoryBanner',
		name: 'Basic',
		code: `<HeroSubcategoryBanner>
    <Breadcrumbs
      links={[
        { href: '#', label: 'Section 1' },
        { href: '#', label: 'Category page' },
        { label: 'Subcategory page' },
      ]}
    />
    <HeroSubcategoryBannerTitle>
      Subcategory banner title - xxl/display (H1)
    </HeroSubcategoryBannerTitle>
  </HeroSubcategoryBanner>`,
	},
	{
		group: 'SubNav',
		name: 'Basic',
		code: `<SubNav
    activePath="#code"
    links={[
      { href: '#usage', label: 'Usage' },
      { href: '#code', label: 'Code' },
      { href: '#content', label: 'Content' },
      { href: '#accessibility', label: 'Accessibility' },
    ]}
  />`,
	},
	{
		group: 'TextLink',
		name: 'Basic',
		code: `<TextLink href="#">Internal link</TextLink>`,
	},
	{
		group: 'TextLinkExternal',
		name: 'Basic',
		code: `<TextLinkExternal href="https://steelthreads.github.io/agds-next">External link</TextLinkExternal>`,
	},

	{
		group: 'Pagination',
		name: 'Basic',
		code: `<Pagination currentPage={5} totalPages={10} generateHref={() => '#'} />`,
	},
	{
		group: 'StatusBadge',
		name: 'Success',
		code: '<StatusBadge tone="success" label="Accepted" />',
	},
	{
		group: 'StatusBadge',
		name: 'Info',
		code: '<StatusBadge tone="info" label="Pending" />',
	},
	{
		group: 'StatusBadge',
		name: 'Warning',
		code: '<StatusBadge tone="warning" label="Alert" />',
	},
	{
		group: 'StatusBadge',
		name: 'Error',
		code: '<StatusBadge tone="error" label="Rejected" />',
	},
	{
		group: 'StatusBadge',
		name: 'Neutral',
		code: '<StatusBadge tone="neutral" label="Draft" />',
	},
	{
		group: 'NotificationBadge',
		name: 'Action',
		code: '	<NotificationBadge tone="action" value={16} max={99} />',
	},

	{
		group: 'NotificationBadge',
		name: 'Neutral',
		code: '	<NotificationBadge tone="neutral" value={16} max={99} />',
	},
	{
		group: 'IndicatorDot',
		name: 'Action',
		code: '	<IndicatorDot tone="action" />',
	},
	{
		group: 'IndicatorDot',
		name: 'Neutral',
		code: '	<IndicatorDot tone="neutral" />',
	},
	{
		group: 'Skeleton',
		name: 'SkeletonText',
		code: '<SkeletonText fontSize="sm" lineHeight="default" />',
	},
	{
		group: 'Skeleton',
		name: 'SkeletonHeading',
		code: '<SkeletonHeading type="h2" />',
	},
	{
		group: 'Skeleton',
		name: 'SkeletonBox',
		code: '<SkeletonBox width="100px" height="100px" />',
	},
];

export default snippets;
