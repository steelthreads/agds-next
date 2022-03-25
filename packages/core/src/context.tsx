import {
	createContext,
	useContext,
	PropsWithChildren,
	AnchorHTMLAttributes,
} from 'react';

function DefaultLinkComponent<P extends PropsWithChildren<{ href?: string }>>(
	props: P
) {
	return <a {...props} />;
}

export type LinkComponent = typeof DefaultLinkComponent;

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const coreContext = createContext({
	linkComponent: DefaultLinkComponent,
});

export type CoreProviderProps = PropsWithChildren<{
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