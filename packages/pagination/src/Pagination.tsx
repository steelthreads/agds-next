import { usePagination } from './usePagination';
import { PaginationContainer } from './PaginationContainer';
import { PaginationItemDirection } from './PaginationItemDirection';
import { PaginationItemSeperator } from './PaginationItemSeperator';
import { PaginationItemPage } from './PaginationItemPage';

export type PaginationProps = {
	'aria-label'?: string;
	getHref: (pageNumber: number) => string;
	currentPage: number;
	limit?: number;
	totalPages: number;
};

export function Pagination({
	'aria-label': ariaLabel = 'pagination',
	getHref,
	limit,
	currentPage,
	totalPages,
}: PaginationProps) {
	const pagination = usePagination({ currentPage, limit, totalPages });
	return (
		<PaginationContainer aria-label={ariaLabel}>
			{pagination.map((item, idx) => {
				switch (item.type) {
					case 'direction':
						return (
							<PaginationItemDirection
								key={idx}
								direction={item.direction}
								href={getHref(item.pageNumber)}
							/>
						);
					case 'page':
						return (
							<PaginationItemPage
								key={idx}
								href={getHref(item.pageNumber)}
								pageNumber={item.pageNumber}
								isActive={item.isActive}
							/>
						);
					case 'seperator':
						return <PaginationItemSeperator key={idx} />;
					default:
						return null;
				}
			})}
		</PaginationContainer>
	);
}
