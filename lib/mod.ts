export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const getUnixMs = (date: Date): number => {
	return date.getTime();
};

export const getMilliseconds = (date: Date): number => {
	return date.getMilliseconds();
};

export const getSeconds = (date: Date): number => {
	return date.getSeconds();
};

export const getMinutes = (date: Date): number => {
	return date.getMinutes();
};

export const getHours = (date: Date): number => {
	return date.getHours();
};

export const getDayOfWeek = (date: Date): DayOfWeek => {
	return date.getDay() as DayOfWeek;
};

export const getDayOfMonth = (date: Date): number => {
	return date.getDate();
};

export const getMonth = (date: Date): number => {
	return date.getMonth();
};

export const getYear = (date: Date): number => {
	return date.getFullYear();
};

export const isDatetimeBefore = (date: Date, compare: Date): boolean => {
	return date !== compare && getUnixMs(date) < getUnixMs(compare);
};

export const isDatetimeAfter = (date: Date, compare: Date): boolean => {
	return date !== compare && getUnixMs(date) > getUnixMs(compare);
};

export const isDatetimeSame = (a: Date, b: Date): boolean => {
	return a === b || getUnixMs(a) === getUnixMs(b);
};

export const isDateSame = (a: Date, b: Date): boolean => {
	if (a === b) {
		return true;
	}

	return getDayOfMonth(a) === getDayOfMonth(b) && getMonth(a) === getMonth(b) && getYear(a) === getYear(b);
};

export const isMonthSame = (a: Date, b: Date): boolean => {
	if (a === b) {
		return true;
	}

	return getMonth(a) === getMonth(b) && getYear(a) === getYear(b);
};

export const isYearSame = (a: Date, b: Date): boolean => {
	if (a === b) {
		return true;
	}

	return getYear(a) === getYear(b);
};

export const min = (a: Date, b: Date): Date => {
	return isDatetimeBefore(a, b) ? a : b;
};

export const max = (a: Date, b: Date): Date => {
	return isDatetimeAfter(a, b) ? a : b;
};

export const clamp = (date: Date, min: Date | undefined, max: Date | undefined): Date => {
	if (min !== undefined && isDatetimeBefore(date, min)) {
		return min;
	}

	if (max !== undefined && isDatetimeAfter(date, max)) {
		return max;
	}

	return date;
};

export const cloneDate = (date: Date): Date => {
	return new Date(date);
};

export const startOfDay = (date: Date): Date => {
	const d = cloneDate(date);

	d.setHours(0, 0, 0, 0);
	return d;
};

export const endOfDay = (date: Date): Date => {
	const d = cloneDate(date);

	d.setHours(23, 59, 59, 999);
	return d;
};

export const startOfWeek = (date: Date): Date => {
	const d = cloneDate(date);

	d.setDate(getDayOfMonth(d) - getDayOfWeek(d));
	d.setHours(0, 0, 0, 0);
	return d;
};

export const endOfWeek = (date: Date): Date => {
	const d = cloneDate(date);

	d.setDate(getDayOfMonth(d) + (6 - getDayOfWeek(d)));
	d.setHours(23, 59, 59, 999);
	return d;
};

export const startOfMonth = (date: Date): Date => {
	const d = cloneDate(date);

	d.setDate(1);
	d.setHours(0, 0, 0, 0);
	return d;
};

export const endOfMonth = (date: Date): Date => {
	const d = cloneDate(date);

	d.setMonth(getMonth(d) + 1, 0);
	d.setHours(23, 59, 59, 999);
	return d;
};

export const startOfYear = (date: Date): Date => {
	const d = cloneDate(date);

	d.setMonth(0, 1);
	d.setHours(0, 0, 0, 0);
	return d;
};

export const endOfYear = (date: Date): Date => {
	const d = cloneDate(date);

	d.setMonth(11, 31);
	d.setHours(23, 59, 59, 999);
	return d;
};

export const addMilliseconds = (date: Date, milliseconds: number): Date => {
	const d = cloneDate(date);

	d.setMilliseconds(getMilliseconds(d) + milliseconds);
	return d;
};

export const addSeconds = (date: Date, seconds: number): Date => {
	const d = cloneDate(date);

	d.setSeconds(getSeconds(d) + seconds);
	return d;
};

export const addMinutes = (date: Date, minutes: number): Date => {
	const d = cloneDate(date);

	d.setMinutes(getMinutes(d) + minutes);
	return d;
};

export const addHours = (date: Date, hours: number): Date => {
	const d = cloneDate(date);

	d.setHours(getHours(d) + hours);
	return d;
};

export const addDays = (date: Date, days: number): Date => {
	const d = cloneDate(date);

	d.setDate(getDayOfMonth(d) + days);
	return d;
};

export const addMonths = (date: Date, months: number): Date => {
	const d = cloneDate(date);

	d.setMonth(getMonth(d) + months);
	return d;
};

export const addYears = (date: Date, years: number): Date => {
	const d = cloneDate(date);

	d.setFullYear(getYear(d) + years);
	return d;
};

export const previousDay = (date: Date, day: DayOfWeek): Date => {
	let delta = day - getDayOfWeek(date);
	if (delta >= 0) {
		delta -= 7;
	}

	return addDays(date, delta);
};

export const nextDay = (date: Date, day: DayOfWeek): Date => {
	let delta = day - getDayOfWeek(date);
	if (delta <= 0) {
		delta += 7;
	}

	return addDays(date, delta);
};
