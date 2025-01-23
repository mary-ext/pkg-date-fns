/**
 * represents a day of the week as a numeric value (0 = Sunday, 6 = Saturday).
 */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * returns the Unix timestamp in milliseconds for a given date.
 * @param date the date to convert.
 * @returns the Unix timestamp in milliseconds.
 */
/*#__NO_SIDE_EFFECTS__*/
export const toUnixMilliseconds = (date: Date): number => {
	return date.getTime();
};

/**
 * returns the Unix timestamp in seconds for a given date
 * @param date the date to convert.
 * @returns the Unix timestamp in seconds.
 */
/*#__NO_SIDE_EFFECTS__*/
export const toUnixSeconds = (date: Date): number => {
	return Math.floor(toUnixMilliseconds(date) / 1_000);
};

/**
 * converts a date to an ISO 8601 date string (YYYY-MM-DD) in local timezone
 * @param date the date to format
 * @returns the formatted date string
 */
/*#__NO_SIDE_EFFECTS__*/
export const toISODateString = (date: Date): string => {
	return date.toLocaleDateString('sv-SE');
};

/**
 * converts a date to an ISO 8601 datetime string (YYYY-MM-DDTHH:mm:ss.sss) in local timezone
 * @param date the date to format
 * @returns the formatted datetime string
 */
/*#__NO_SIDE_EFFECTS__*/
export const toISODateTimeString = (date: Date): string => {
	return date.toLocaleString('sv-SE').replace(' ', 'T') + '.' + ('' + getMilliseconds(date)).padStart(3, '0');
};

/**
 * returns the milliseconds portion of a given date.
 * @param date the date to extract from.
 * @returns the milliseconds portion of the date.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getMilliseconds = (date: Date): number => {
	return date.getMilliseconds();
};

/**
 * returns the seconds portion of a given date.
 * @param date the date to extract from.
 * @returns the seconds portion of the date.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getSeconds = (date: Date): number => {
	return date.getSeconds();
};

/**
 * returns the minutes portion of a given date.
 * @param date the date to extract from.
 * @returns the minutes portion of the date.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getMinutes = (date: Date): number => {
	return date.getMinutes();
};

/**
 * returns the hours portion of a given date.
 * @param date the date to extract from.
 * @returns the hours portion of the date.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getHours = (date: Date): number => {
	return date.getHours();
};

/**
 * returns the day of the week for a given date (0 = Sunday, 6 = Saturday).
 * @param date the date to extract from.
 * @returns the day of the week as a number.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getDayOfWeek = (date: Date): DayOfWeek => {
	return date.getDay() as DayOfWeek;
};

/**
 * returns the day of the month for a given date.
 * @param date the date to extract from.
 * @returns the day of the month as a number.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getDayOfMonth = (date: Date): number => {
	return date.getDate();
};

/**
 * returns the month portion of a given date (0 = January, 11 = December).
 * @param date the date to extract from.
 * @returns the month as a number.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getMonth = (date: Date): number => {
	return date.getMonth();
};

/**
 * returns the year portion of a given date.
 * @param date the date to extract from.
 * @returns the year as a number.
 */
/*#__NO_SIDE_EFFECTS__*/
export const getYear = (date: Date): number => {
	return date.getFullYear();
};

/**
 * checks if a date is before another date.
 * @param date the date to compare.
 * @param compare the date to compare against.
 * @returns true if first date is before the second, false otherwise.
 */
/*#__NO_SIDE_EFFECTS__*/
export const isBeforeDate = (date: Date, compare: Date): boolean => {
	return date !== compare && toUnixMilliseconds(date) < toUnixMilliseconds(compare);
};

/**
 * checks if a date is after another date.
 * @param date the date to compare.
 * @param compare the date to compare against.
 * @returns true if the first date is after the second, false otherwise.
 */
/*#__NO_SIDE_EFFECTS__*/
export const isAfterDate = (date: Date, compare: Date): boolean => {
	return date !== compare && toUnixMilliseconds(date) > toUnixMilliseconds(compare);
};

/**
 * checks if two dates are exactly the same.
 * @param a the first date to compare.
 * @param b the second date to compare.
 * @returns true if the two dates are the same, false otherwise.
 */
/*#__NO_SIDE_EFFECTS__*/
export const isSameDate = (a: Date, b: Date): boolean => {
	return a === b || toUnixMilliseconds(a) === toUnixMilliseconds(b);
};

/**
 * checks if two dates fall on the same calendar day.
 * @param a the first date to compare.
 * @param b the second date to compare.
 * @returns true if the two dates fall on the same calendar day, false otherwise.
 */
/*#__NO_SIDE_EFFECTS__*/
export const isSameCalendarDate = (a: Date, b: Date): boolean => {
	if (a === b) {
		return true;
	}

	return (
		getDayOfMonth(a) === getDayOfMonth(b) &&
		getMonth(a) === getMonth(b) &&
		getYear(a) === getYear(b)
	);
};

/**
 * checks if two dates fall in the same calendar month.
 * @param a the first date to compare.
 * @param b the second date to compare.
 * @returns true if the two dates are in the same month, false otherwise.
 */
/*#__NO_SIDE_EFFECTS__*/
export const isSameCalendarMonth = (a: Date, b: Date): boolean => {
	if (a === b) {
		return true;
	}

	return (
		getMonth(a) === getMonth(b) &&
		getYear(a) === getYear(b)
	);
};

/**
 * checks if two dates fall in the same calendar year.
 * @param a the first date to compare.
 * @param b the second date to compare.
 * @returns true if the two dates are in the same year, false otherwise.
 */
/*#__NO_SIDE_EFFECTS__*/
export const isSameCalendarYear = (a: Date, b: Date): boolean => {
	if (a === b) {
		return true;
	}

	return getYear(a) === getYear(b);
};

/**
 * returns the earlier of two dates.
 * @param a the first date to compare.
 * @param b the second date to compare.
 * @returns the earlier of the two dates.
 */
/*#__NO_SIDE_EFFECTS__*/
export const min = (a: Date, b: Date): Date => {
	return isBeforeDate(a, b) ? a : b;
};

/**
 * returns the later of two dates.
 * @param a the first date to compare.
 * @param b the second date to compare.
 * @returns the later of the two dates.
 */
/*#__NO_SIDE_EFFECTS__*/
export const max = (a: Date, b: Date): Date => {
	return isAfterDate(a, b) ? a : b;
};

/**
 * clamps a date between a minimum and maximum range.
 * @param date the date to clamp.
 * @param min the minimum allowable date.
 * @param max the maximum allowable date.
 * @returns the clamped date.
 */
/*#__NO_SIDE_EFFECTS__*/
export const clamp = (
	date: Date,
	min: Date | undefined,
	max: Date | undefined,
): Date => {
	if (min !== undefined && isBeforeDate(date, min)) {
		return min;
	}

	if (max !== undefined && isAfterDate(date, max)) {
		return max;
	}

	return date;
};

/**
 * creates a copy of a given date.
 * @param date the date to clone.
 * @returns a new date object with the same value as the input date.
 */
/*#__NO_SIDE_EFFECTS__*/
export const cloneDate = (date: Date): Date => {
	return new Date(date);
};

/**
 * returns the start of the day for a given date.
 * @param date the date to find the start of the day for.
 * @returns a new date set to the start of the day.
 */
/*#__NO_SIDE_EFFECTS__*/
export const startOfDay = (date: Date): Date => {
	const d = cloneDate(date);

	d.setHours(0, 0, 0, 0);
	return d;
};

/**
 * returns the end of the day for a given date.
 * @param date the date to find the end of the day for.
 * @returns a new date set to the end of the day.
 */
/*#__NO_SIDE_EFFECTS__*/
export const endOfDay = (date: Date): Date => {
	const d = cloneDate(date);

	d.setHours(23, 59, 59, 999);
	return d;
};

/**
 * returns the start of the week for a given date.
 * @param date the date to find the start of the week for.
 * @returns a new date set to the start of the week.
 */
/*#__NO_SIDE_EFFECTS__*/
export const startOfWeek = (date: Date): Date => {
	const d = cloneDate(date);

	d.setDate(getDayOfMonth(d) - getDayOfWeek(d));
	d.setHours(0, 0, 0, 0);
	return d;
};

/**
 * returns the end of the week for a given date.
 * @param date the date to find the end of the week for.
 * @returns a new date set to the end of the week.
 */
/*#__NO_SIDE_EFFECTS__*/
export const endOfWeek = (date: Date): Date => {
	const d = cloneDate(date);

	d.setDate(getDayOfMonth(d) + (6 - getDayOfWeek(d)));
	d.setHours(23, 59, 59, 999);
	return d;
};

/**
 * returns the start of the month for a given date.
 * @param date the date to find the start of the month for.
 * @returns a new date set to the start of the month.
 */
/*#__NO_SIDE_EFFECTS__*/
export const startOfMonth = (date: Date): Date => {
	const d = cloneDate(date);

	d.setDate(1);
	d.setHours(0, 0, 0, 0);
	return d;
};

/**
 * returns the end of the month for a given date.
 * @param date the date to find the end of the month for.
 * @returns a new date set to the end of the month.
 */
/*#__NO_SIDE_EFFECTS__*/
export const endOfMonth = (date: Date): Date => {
	const d = cloneDate(date);

	d.setMonth(getMonth(d) + 1, 0);
	d.setHours(23, 59, 59, 999);
	return d;
};

/**
 * returns the start of the year for a given date.
 * @param date the date to find the start of the year for.
 * @returns a new date set to the start of the year.
 */
/*#__NO_SIDE_EFFECTS__*/
export const startOfYear = (date: Date): Date => {
	const d = cloneDate(date);

	d.setMonth(0, 1);
	d.setHours(0, 0, 0, 0);
	return d;
};

/**
 * returns the end of the year for a given date.
 * @param date the date to find the end of the year for.
 * @returns a new date set to the end of the year.
 */
/*#__NO_SIDE_EFFECTS__*/
export const endOfYear = (date: Date): Date => {
	const d = cloneDate(date);

	d.setMonth(11, 31);
	d.setHours(23, 59, 59, 999);
	return d;
};

/**
 * adds a specified number of milliseconds to a date.
 * @param date the date to add milliseconds to.
 * @param milliseconds the number of milliseconds to add.
 * @returns a new date with the added milliseconds.
 */
/*#__NO_SIDE_EFFECTS__*/
export const addMilliseconds = (date: Date, milliseconds: number): Date => {
	const d = cloneDate(date);

	d.setMilliseconds(getMilliseconds(d) + milliseconds);
	return d;
};

/**
 * adds a specified number of seconds to a date.
 * @param date the date to add seconds to.
 * @param seconds the number of seconds to add.
 * @returns a new date with the added seconds.
 */
/*#__NO_SIDE_EFFECTS__*/
export const addSeconds = (date: Date, seconds: number): Date => {
	const d = cloneDate(date);

	d.setSeconds(getSeconds(d) + seconds);
	return d;
};

/**
 * adds a specified number of minutes to a date.
 * @param date the date to add minutes to.
 * @param minutes the number of minutes to add.
 * @returns a new date with the added minutes.
 */
/*#__NO_SIDE_EFFECTS__*/
export const addMinutes = (date: Date, minutes: number): Date => {
	const d = cloneDate(date);

	d.setMinutes(getMinutes(d) + minutes);
	return d;
};

/**
 * adds a specified number of hours to a date.
 * @param date the date to add hours to.
 * @param hours the number of hours to add.
 * @returns a new date with the added hours.
 */
/*#__NO_SIDE_EFFECTS__*/
export const addHours = (date: Date, hours: number): Date => {
	const d = cloneDate(date);

	d.setHours(getHours(d) + hours);
	return d;
};

/**
 * adds a specified number of days to a date.
 * @param date the date to add days to.
 * @param days the number of days to add.
 * @returns a new date with the added days.
 */
/*#__NO_SIDE_EFFECTS__*/
export const addDays = (date: Date, days: number): Date => {
	const d = cloneDate(date);

	d.setDate(getDayOfMonth(d) + days);
	return d;
};

/**
 * adds a specified number of months to a date.
 * @param date the date to add months to.
 * @param months the number of months to add.
 * @returns a new date with the added months.
 */
/*#__NO_SIDE_EFFECTS__*/
export const addMonths = (date: Date, months: number): Date => {
	const d = cloneDate(date);

	d.setMonth(getMonth(d) + months);
	return d;
};

/**
 * adds a specified number of years to a date.
 * @param date the date to add years to.
 * @param years the number of years to add.
 * @returns a new date with the added years.
 */
/*#__NO_SIDE_EFFECTS__*/
export const addYears = (date: Date, years: number): Date => {
	const d = cloneDate(date);

	d.setFullYear(getYear(d) + years);
	return d;
};

/**
 * returns the previous occurrence of a specific day of the week.
 * @param date the starting date.
 * @param day the target day of the week.
 * @returns a new date set to the previous occurrence of the specified day.
 */
/*#__NO_SIDE_EFFECTS__*/
export const previousDay = (date: Date, day: DayOfWeek): Date => {
	let delta = day - getDayOfWeek(date);
	if (delta >= 0) {
		delta -= 7;
	}

	return addDays(date, delta);
};

/**
 * returns the next occurrence of a specific day of the week.
 * @param date the starting date.
 * @param day the target day of the week.
 * @returns a new date set to the next occurrence of the specified day.
 */
/*#__NO_SIDE_EFFECTS__*/
export const nextDay = (date: Date, day: DayOfWeek): Date => {
	let delta = day - getDayOfWeek(date);
	if (delta <= 0) {
		delta += 7;
	}

	return addDays(date, delta);
};
