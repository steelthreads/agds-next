import { ComponentType, forwardRef, Fragment, ReactNode } from 'react';
import { LinkProps, useLinkComponent } from '@ag.ds-next/core';
import { IconProps } from '@ag.ds-next/icon';
import { LoadingDots } from '@ag.ds-next/loading';
import {
	buttonStyles,
	ButtonSize,
	ButtonVariant,
	iconSize,
	loadingSize,
} from './styles';
import { BaseButton, BaseButtonProps } from './BaseButton';

type CommonButtonProps = {
	/** If true, the button will stretch to the fill the width of its container/ */
	block?: boolean;
	/** The icon to display before the buttons children. */
	iconBefore?: ComponentType<IconProps>;
	/** The icon to display after the buttons children. */
	iconAfter?: ComponentType<IconProps>;
	/** When true, the button will display a loading indicator. */
	loading?: boolean;
	/** Text to read out to assistive technologies when button is loading. */
	loadingLabel?: string;
	/** The size of the button/ */
	size?: ButtonSize;
	/** The variant of the button. */
	variant?: ButtonVariant;
};

export type ButtonProps = CommonButtonProps & BaseButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{
			type = 'button',
			block = false,
			iconBefore: IconBefore,
			iconAfter: IconAfter,
			children,
			size = 'md',
			loading = false,
			loadingLabel = 'Busy',
			variant = 'primary',
			...props
		},
		ref
	) {
		const styles = buttonStyles({ block, size, variant });
		return (
			<BaseButton ref={ref} css={styles} type={type} {...props}>
				{IconBefore ? (
					<IconBefore size={iconSize[size]} weight="regular" />
				) : null}
				{loading ? (
					<Fragment>
						<HiddenText>{children}</HiddenText>
						<CenteredLoading aria-label={loadingLabel} size={size} />
					</Fragment>
				) : (
					children
				)}
				{IconAfter ? (
					<IconAfter size={iconSize[size]} weight="regular" />
				) : null}
			</BaseButton>
		);
	}
);

export type ButtonLinkProps = CommonButtonProps & LinkProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	function ButtonLink(
		{
			children,
			block = false,
			iconBefore: IconBefore,
			iconAfter: IconAfter,
			size = 'md',
			loading,
			loadingLabel = 'Busy',
			variant = 'primary',
			...props
		},
		ref
	) {
		const styles = buttonStyles({ block, size, variant });
		const Link = useLinkComponent();
		return (
			<Link ref={ref} css={styles} {...props}>
				{IconBefore ? (
					<IconBefore size={iconSize[size]} weight="regular" />
				) : null}
				{loading ? (
					<Fragment>
						<HiddenText>{children}</HiddenText>
						<CenteredLoading aria-label={loadingLabel} size={size} />
					</Fragment>
				) : (
					children
				)}
				{IconAfter ? (
					<IconAfter size={iconSize[size]} weight="regular" />
				) : null}
			</Link>
		);
	}
);

const HiddenText = ({ children }: { children: ReactNode }) => (
	<span css={{ visibility: 'hidden' }}>{children}</span>
);

const CenteredLoading = ({
	'aria-label': ariaLabel,
	size,
}: {
	'aria-label': string;
	size: ButtonSize;
}) => (
	<LoadingDots
		aria-label={ariaLabel}
		aria-live="assertive"
		size={loadingSize[size]}
		css={{
			position: 'absolute',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
		}}
	/>
);
