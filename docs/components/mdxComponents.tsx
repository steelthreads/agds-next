import { AnchorHTMLAttributes, HTMLAttributes, Fragment } from 'react';
import Link from 'next/link';
import { slugify } from '../lib/slugify';
import generatedComponentPropsData from '../__generated__/componentProps.json';
import { Code } from './Code';
import { ComponentPropsTable } from './ComponentPropsTable';

// Note: We are using `any` here because of a typescript bug with react v18 and next-mdx-remote v3
// Upgrading to v4 causes issues with our pre and code inline components. Be careful when upgrading

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, any> = {
	// avoid wrapping live examples in pre tag
	pre: Fragment,
	code: Code,
	Fragment,
	a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
		if (!href) return <a {...props} />;
		return <Link href={href} {...props} />;
	},
	// Automatically assign an ID to h2 and h3 elements so they can be linked to
	h2: ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
		const slug = children ? slugify(children.toString()) : undefined;
		return (
			<h2 id={slug}>
				<a href={`#${slug}`}>{children} </a>
			</h2>
		);
	},
	h3: ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
		const slug = children ? slugify(children.toString()) : undefined;
		return (
			<h3 id={slug}>
				<a href={`#${slug}`}>{children}</a>
			</h3>
		);
	},
	ComponentPropsTable: ({ name }: { name: string }) => {
		if (!(name in generatedComponentPropsData)) {
			return (
				<Fragment>
					<h3>{name} Props</h3>
					<p>{name} does not have any props.</p>
				</Fragment>
			);
		}
		return (
			<ComponentPropsTable
				data={
					generatedComponentPropsData[
						name as keyof typeof generatedComponentPropsData
					]
				}
			/>
		);
	},
};
