import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Flex } from '@ag.ds-next/box';
import {
	AlertFilledIcon,
	AvatarIcon,
	InfoFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/icon';
import { Combobox } from './Combobox';

export default {
	title: 'forms/Combobox',
	component: Combobox,
} as ComponentMeta<typeof Combobox>;

const COUNTRIES = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	"Côte d'Ivoire",
	'Cabo Verde',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombia',
	'Comoros',
	'Congo (Congo-Brazzaville)',
	'Costa Rica',
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czechia (Czech Republic)',
	'Democratic Republic of the Congo',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Eswatini (fmr. "Swaziland")',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Holy See',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Morocco',
	'Mozambique',
	'Myanmar (formerly Burma)',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'North Korea',
	'North Macedonia',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Palestine State',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent and the Grenadines',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Korea',
	'South Sudan',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Sweden',
	'Switzerland',
	'Syria',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Timor-Leste',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States of America',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe',
];

export const Basic = () => (
	<Combobox
		label="Select a country"
		options={COUNTRIES.map((country) => ({ label: country, value: country }))}
	/>
);

type StarWarsCharacter = {
	name: string;
	birth_year: string;
};

export const Async = () => (
	<Combobox
		label="Select a character"
		loadOptions={async (inputValue) => {
			const response = await fetch(
				`https://swapi.dev/api/people/?search=${inputValue}`
			);
			const data: {
				results: StarWarsCharacter[];
			} = await response.json();
			return data.results.map(({ name, birth_year: birthYear }) => ({
				value: name,
				label: `${name} (${birthYear})`,
				birthYear,
			}));
		}}
		onChange={console.log}
	/>
);

export const CustomRender = () => (
	<Combobox
		label="Select a status"
		options={Object.keys(ICON_MAP).map((key) => ({ value: key, label: key }))}
		renderItem={(option) => {
			const { icon, label } = ICON_MAP[option.value as keyof typeof ICON_MAP];
			return (
				<Flex gap={0.5} alignItems="center">
					{icon}
					{label}
				</Flex>
			);
		}}
	/>
);

const ICON_MAP = {
	error: {
		label: 'I am an error label',
		icon: <AlertFilledIcon color="error" />,
	},
	warning: {
		label: 'I am an warning label',
		icon: <WarningFilledIcon color="warning" />,
	},
	info: {
		label: 'I am an info label',
		icon: <InfoFilledIcon color="info" />,
	},
	success: {
		label: 'I am an success label',
		icon: <SuccessFilledIcon color="success" />,
	},
} as const;

export const CustomOptionTypes = () => {
	const options = [
		{
			id: '1',
			name: 'Alice',
			email: 'alice@example.com',
		},
		{
			id: '2',
			name: 'Bob',
			email: 'bob@example.com',
		},
		{
			id: '3',
			name: 'Charlie',
			email: 'charlie@example.com',
		},
	].map((option) => ({
		...option,
		value: option.id,
		label: option.name,
	}));
	return (
		<Combobox
			label="Select a user"
			options={options}
			renderItem={({ name, email, id }) => `${name} (${email}) (${id})`}
		/>
	);
};
