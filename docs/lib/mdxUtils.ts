import { plugin } from '@untitled-docs/live-code/rehype';
import { serialize } from 'next-mdx-remote/serialize';
import { readdirSync, readFileSync } from 'fs';
import remarkHint from 'remark-hint';
import { normalize } from 'path';
import matter from 'gray-matter';

import { slugify } from './slugify';

const PKG_PATH = normalize(`${process.cwd()}/../packages/`);
const RELEASE_PATH = normalize(`${process.cwd()}/../releases/`);

function stripExtension(filename: string) {
	return filename.replace(/\.mdx?$/gi, '');
}

export async function getMarkdown(filePath: string) {
	const fileContents = readFileSync(filePath, 'utf8');

	const { data, content } = matter(fileContents);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkHint],
			rehypePlugins: [plugin],
		},
		scope: data,
	});

	return {
		source: mdxSource,
		data,
	};
}

// Packages

export async function getPkg(slug: string) {
	const filePath = normalize(`${PKG_PATH}/${slug}/README.md`);
	const pkgContents = JSON.parse(
		readFileSync(normalize(`${PKG_PATH}/${slug}/package.json`), 'utf8')
	) as { name: string; version: string };

	const { source, data } = await getMarkdown(filePath);

	return {
		source,
		data,
		slug: slug,
		name: pkgContents.name,
		title: data.title ?? pkgContents.name,
		version: pkgContents.version,
	};
}

export async function getAllPkgSlugs() {
	const slugs = readdirSync(PKG_PATH, { withFileTypes: true });
	return slugs
		.filter(
			(file) =>
				!file.name.startsWith('_') &&
				!file.name.startsWith('.') &&
				file.isDirectory()
		)
		.map((file) => slugify(stripExtension(file.name)))
		.sort((slug) => (slug === 'core' ? -1 : 1));
}

export async function getAllPkgs(limit = 0) {
	const slugs = await getAllPkgSlugs();
	return Promise.all(
		(limit ? slugs.slice(0, limit) : slugs).map((slug) => getPkg(slug))
	);
}

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
export type Pkg = Awaited<ReturnType<typeof getPkg>>;
export type PkgList = Pkg[];

// Releases

export async function getRelease(slug: string) {
	const filePath = normalize(`${RELEASE_PATH}/${slug}.mdx`);
	const { source, data } = await getMarkdown(filePath);

	return {
		slug,
		source,
		data,
		title: data.title ?? slug,
	};
}

export async function getAllReleaseSlugs() {
	const entries = readdirSync(RELEASE_PATH, { withFileTypes: true });
	return entries
		.filter(
			(entry) =>
				!entry.name.startsWith('_') &&
				!entry.name.startsWith('.') &&
				!entry.name.startsWith('index') &&
				entry.isFile()
		)
		.map((entry) => slugify(stripExtension(entry.name)));
}

export async function getAllReleases(limit = 0) {
	const slugs = await getAllReleaseSlugs();
	return Promise.all((limit ? slugs.slice(0, limit) : slugs).map(getRelease));
}

export type Release = Awaited<ReturnType<typeof getRelease>>;
export type ReleaseList = Release[];

// All Nav Items

export async function getAllNavItems() {
	const [pkgList, releaseList] = await Promise.all([
		getAllPkgs(),
		getAllReleases(),
	]);
	return { pkgList, releaseList };
}
export type NavItems = Awaited<ReturnType<typeof getAllNavItems>>;
