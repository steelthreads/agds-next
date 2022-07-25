import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Stack } from '@ag.ds-next/box';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/table';
import { TextLink } from '@ag.ds-next/text-link';
import { StatusBadge } from './StatusBadge';

export default {
	title: 'content/Badge/StatusBadge',
	component: StatusBadge,
} as ComponentMeta<typeof StatusBadge>;

const Template: ComponentStory<typeof StatusBadge> = (args) => (
	<StatusBadge {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	tone: 'info',
	label: 'In progress',
};

export const LanguageExamples = () => {
	return (
		<Flex flexWrap="wrap" gap={1}>
			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="success" label="Approved" />
				<StatusBadge tone="success" label="Accepted" />
				<StatusBadge tone="success" label="Online" />
				<StatusBadge tone="success" label="Open" />
				<StatusBadge tone="success" label="Available" />
				<StatusBadge tone="success" label="Success" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="info" label="In progress" />
				<StatusBadge tone="info" label="Pending" />
				<StatusBadge tone="info" label="New" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="warning" label="Due" />
				<StatusBadge tone="warning" label="Alert" />
				<StatusBadge tone="warning" label="Attention" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="error" label="Rejected" />
				<StatusBadge tone="error" label="Outage" />
				<StatusBadge tone="error" label="Overdue" />
				<StatusBadge tone="error" label="Error" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="neutral" label="Draft" />
			</Stack>
		</Flex>
	);
};

export const InTable = () => {
	const data = [
		{
			id: 'RE4321–2201–03',
			businessName: 'Orange Meat Works',
			type: 'Record keeping—Minor',
			status: 'Pending',
		},
		{
			id: 'RE4321–2201–02',
			businessName: 'Orange Meat Works',
			type: 'Hygiene—Major',
			status: 'Open',
		},
		{
			id: 'RE4321–2201–01',
			businessName: 'Molong Meat Works',
			type: 'Record keeping—Minor',
			status: 'Open',
		},
		{
			id: 'RE4321–2201–00',
			businessName: 'Orange Meat Works',
			type: 'Record keeping—Minor',
			status: 'Closed',
		},
	] as const;

	const toneMapper = {
		Closed: 'success',
		Open: 'warning',
		Pending: 'info',
		Draft: 'neutral',
	} as const;

	return (
		<TableWrapper>
			<Table>
				<TableCaption>Corrective action requests (CAR)</TableCaption>
				<TableHead>
					<tr>
						<TableHeader>CAR number</TableHeader>
						<TableHeader>Establishment name</TableHeader>
						<TableHeader>Activity and severity</TableHeader>
						<TableHeader>Status</TableHeader>
						<TableHeader>Actions</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					{data.map(({ id, businessName, status, type }) => (
						<tr key={id}>
							<TableCell>{id}</TableCell>
							<TableCell>{businessName}</TableCell>
							<TableCell>{type}</TableCell>
							<TableCell>
								<StatusBadge tone={toneMapper[status]} label={status} />
							</TableCell>
							<TableCell>
								<TextLink href={`#${id}`}>
									{status == 'Closed' ? 'View' : 'Manage'}
								</TextLink>
							</TableCell>
						</tr>
					))}
				</TableBody>
			</Table>
		</TableWrapper>
	);
};
