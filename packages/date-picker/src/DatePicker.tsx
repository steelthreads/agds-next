import {
	ChangeEvent,
	KeyboardEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { usePopper } from 'react-popper';
import { useClickOutside, useTernaryState } from '@ag.ds-next/core';
import { Calendar, CalendarProps, CalendarRef } from './Calendar';
import { DateInput, DateInputProps } from './DatePickerInput';
import { parseDate, formatDate } from './utils';

type InputProps = Pick<
	DateInputProps,
	| 'block'
	| 'disabled'
	| 'id'
	| 'hint'
	| 'invalid'
	| 'label'
	| 'message'
	| 'required'
	| 'valid'
	| 'maxWidth'
>;

export type DatePickerProps = CalendarProps &
	InputProps & {
		value: Date | undefined;
		onChange: (day: Date | undefined) => void;
	};

export const DatePicker = ({
	value,
	onChange,
	initialMonth,
	...props
}: DatePickerProps) => {
	const calendarRef = useRef<CalendarRef>(null);
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);

	// Popper state
	const triggerRef = useRef<HTMLButtonElement>(null);
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const onFirstUpdate = useCallback(() => calendarRef.current?.focus(), []);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
		onFirstUpdate,
	});

	const onDayClick = useCallback(
		(day: Date) => {
			// Update the input field with the selected day
			setInputValue(formatDate(day));
			// Trigger the callback
			onChange(day);
			// Close the calendar and focus the calendar icon
			closeCalendar();
		},
		[onChange, closeCalendar]
	);

	const [inputValue, setInputValue] = useState(value ? formatDate(value) : '');

	const onInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			setInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			onChange(parsedDate);
		},
		[onChange]
	);

	// Update the text inputs when the value updates
	useEffect(() => {
		setInputValue(value ? formatDate(value) : '');
	}, [value]);

	// Close the calendar when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	// Close the calendar when the user presses escape
	const handleEscape = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) => {
			if (isCalendarOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				// Close the calendar and focus the calendar icon
				closeCalendar();
			}
		},
		[isCalendarOpen, closeCalendar]
	);

	return (
		<div ref={setRefEl} onKeyDown={handleEscape}>
			<DateInput
				{...props}
				value={inputValue}
				onChange={onInputChange}
				buttonRef={triggerRef}
				buttonOnClick={openCalendar}
			/>
			{isCalendarOpen ? (
				<div
					ref={setPopperEl}
					style={styles.popper}
					{...attributes.popper}
					css={{ zIndex: 1 }}
				>
					<Calendar
						ref={calendarRef}
						selectedDays={value}
						onDayClick={onDayClick}
						initialMonth={initialMonth || value}
						numberOfMonths={1}
						range={false}
					/>
				</div>
			) : null}
		</div>
	);
};
