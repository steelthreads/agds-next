import {
	forwardRef,
	createContext,
	useContext,
	PropsWithChildren,
	AnchorHTMLAttributes,
} from 'react';

const DefaultLinkComponent = forwardRef<
	HTMLAnchorElement,
	// Using `any` here because the href prop differs between routing frameworks
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	LinkProps & { href?: any }
>(function DefaultLinkComponent(props, ref) {
	return <a ref={ref} {...props} />;
});

type NativeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type LinkProps = PropsWithChildren<{
	/** Describes the anchor element to assistive technologies. */
	'aria-label'?: string;
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	/** Causes the browser to treat the linked URL as a download. */
	download?: NativeLinkProps['download'];
	/** The URL that the hyperlink points to. */
	href?: string;
	/** The ID of the hyperlink. */
	id?: string;
	/** How much of the referrer to send when following the link. */
	referrerPolicy?: NativeLinkProps['referrerPolicy'];
	/** The relationship of the linked URL as space-separated link types. */
	rel?: string;
	/** Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). */
	target?: NativeLinkProps['target'];
}>;

export const coreContext = createContext({
	linkComponent: DefaultLinkComponent,
});

export type LinkComponent = typeof DefaultLinkComponent;

export type CoreProviderProps = PropsWithChildren<{
	/** The global link component which can be configured for different routing libraries. Defaults to standard `a` tag. */
	linkComponent?: LinkComponent;
}>;

export function CoreProvider({ linkComponent, children }: CoreProviderProps) {
	return (
		<coreContext.Provider
			value={{
				linkComponent: linkComponent ?? DefaultLinkComponent,
			}}
		>
			{children}
		</coreContext.Provider>
	);
}

export function useLinkComponent() {
	const { linkComponent } = useContext(coreContext);
	return linkComponent;
}
