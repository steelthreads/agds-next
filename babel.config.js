module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		'@babel/preset-typescript',
		'@emotion/babel-preset-css-prop',
		[
			'next/babel',
			{
				'preset-react': {
					runtime: 'automatic',
					importSource: '@emotion/react',
				},
			},
		],
	],
	plugins: ['@emotion/babel-plugin'],
};
