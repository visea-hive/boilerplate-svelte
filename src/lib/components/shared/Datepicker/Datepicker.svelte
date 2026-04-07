<script lang="ts" module>
	import { type DateValue } from "@internationalized/date";

	export type DatepickerType = "single" | "multiple" | "range";

	export type DatepickerProps = {
		type?: DatepickerType;
		value?: any; 
		placeholder?: string;
		label?: string;
		error?: string;
		class?: string;
		disabled?: boolean;
		onchange?: (date: any) => void;
	};
</script>

<script lang="ts">
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Calendar as CalendarPrimitive, RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import { 
		getLocalTimeZone, 
		today, 
		CalendarDate, 
		DateFormatter
	} from "@internationalized/date";
	import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronDown } from "lucide-svelte";

	let {
		type = "single",
		value = $bindable(),
		placeholder = "Pilih tanggal",
		label,
		error,
		class: className,
		disabled = false,
		onchange
	}: DatepickerProps = $props();

	const df = new DateFormatter("id-ID", {
		dateStyle: "long",
	});

	const dfShort = new DateFormatter("id-ID", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});

	// Reactive derived for placeholder initial value logic
	const initialPlaceholder = () => {
		if (type === "range" && value?.start) return value.start;
		if (type === "multiple" && Array.isArray(value) && value.length > 0) return value[0];
		if (type === "single" && value) return value;
		return today(getLocalTimeZone());
	};

	let calendarPlaceholder = $state<DateValue>(initialPlaceholder());

	function formatDisplayValue(val: any) {
		if (!val) return placeholder;
		
		if (type === "single") {
			return df.format(val.toDate(getLocalTimeZone()));
		}
		
		if (type === "multiple") {
			if (!Array.isArray(val) || val.length === 0) return placeholder;
			if (val.length === 1) return df.format(val[0].toDate(getLocalTimeZone()));
			return `${val.length} tanggal dipilih`;
		}
		
		if (type === "range") {
			if (!val.start) return placeholder;
			if (!val.end) return dfShort.format(val.start.toDate(getLocalTimeZone()));
			return `${dfShort.format(val.start.toDate(getLocalTimeZone()))} - ${dfShort.format(val.end.toDate(getLocalTimeZone()))}`;
		}
		
		return placeholder;
	}

	function handleValueChange(v: any) {
		value = v;
		if (onchange) onchange(v);
	}

	const months = [
		{ value: 1, label: "Jan" }, { value: 2, label: "Feb" }, { value: 3, label: "Mar" },
		{ value: 4, label: "Apr" }, { value: 5, label: "Mei" }, { value: 6, label: "Jun" },
		{ value: 7, label: "Jul" }, { value: 8, label: "Agu" }, { value: 9, label: "Sep" },
		{ value: 10, label: "Okt" }, { value: 11, label: "Nov" }, { value: 12, label: "Des" }
	];

	const currentYear = today(getLocalTimeZone()).year;
	const years = Array.from({ length: 101 }, (_, i) => currentYear - 50 + i).map(y => ({
		value: y, label: y.toString()
	}));

	function setMonth(month: number) {
		calendarPlaceholder = new CalendarDate(calendarPlaceholder.year, month, 1);
	}

	function setYear(year: number) {
		calendarPlaceholder = new CalendarDate(year, calendarPlaceholder.month, 1);
	}
</script>

<div class={cn("grid w-full gap-2", className)}>
	{#if label}
		<label for="datepicker-trigger" class="text-sm font-medium text-neutral-700">{label}</label>
	{/if}

	<Popover.Root>
		<Popover.Trigger
			id="datepicker-trigger"
			class={cn(
				"w-full justify-start text-left font-sans h-11 px-4 flex items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors shadow-none outline-none focus:ring-2 focus:ring-blue-500/10",
				!value && "text-neutral-400",
				error && "border-red-500 ring-red-100",
				disabled && "opacity-50 cursor-not-allowed bg-neutral-50"
			)}
			disabled={disabled}
		>
			<CalendarIcon class="mr-2 h-4 w-4 shrink-0 opacity-50" />
			<span class="truncate text-sm font-medium">
				{formatDisplayValue(value)}
			</span>
		</Popover.Trigger>
		<Popover.Content class="w-auto p-0 rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden bg-white" align="start">
			
			{#if type === "range"}
				<RangeCalendarPrimitive.Root
					bind:value={value as any}
					bind:placeholder={calendarPlaceholder}
					onValueChange={handleValueChange}
					class="p-4 bg-white font-sans"
					weekdayFormat="short"
				>
					{#snippet children({ months: calendarMonths, weekdays })}
						<div class="flex flex-col gap-6">
							<div class="flex items-center justify-between px-1 mb-2">
								<RangeCalendarPrimitive.PrevButton class="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-neutral-50 text-neutral-600 transition-colors">
									<ChevronLeft class="h-6 w-6" />
								</RangeCalendarPrimitive.PrevButton>
								<div class="flex items-center gap-2">
									<div class="relative">
										<select class="appearance-none bg-white border border-neutral-100 rounded-xl px-4 py-2 pr-10 font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500/10 cursor-pointer" value={calendarPlaceholder.month} onchange={(e) => setMonth(parseInt(e.currentTarget.value))}>
											{#each months as m (m.value)}<option value={m.value}>{m.label}</option>{/each}
										</select>
										<ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
									</div>
									<div class="relative">
										<select class="appearance-none bg-white border border-neutral-100 rounded-xl px-4 py-2 pr-10 font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500/10 cursor-pointer" value={calendarPlaceholder.year} onchange={(e) => setYear(parseInt(e.currentTarget.value))}>
											{#each years as y (y.value)}<option value={y.value}>{y.label}</option>{/each}
										</select>
										<ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
									</div>
								</div>
								<RangeCalendarPrimitive.NextButton class="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-neutral-50 text-neutral-600 transition-colors">
									<ChevronRight class="h-6 w-6" />
								</RangeCalendarPrimitive.NextButton>
							</div>

							{#each calendarMonths as month (month.value.toString())}
								<div class="flex flex-col gap-4">
									<RangeCalendarPrimitive.Grid class="w-full border-separate border-spacing-0 select-none">
										<RangeCalendarPrimitive.GridHead>
											<RangeCalendarPrimitive.GridRow class="flex w-full justify-between mb-4">
												{#each weekdays as weekday, i (i)}
													<RangeCalendarPrimitive.HeadCell class="w-10 text-center text-xs font-bold text-neutral-400 uppercase tracking-tighter">{weekday.slice(0, 2)}</RangeCalendarPrimitive.HeadCell>
												{/each}
											</RangeCalendarPrimitive.GridRow>
										</RangeCalendarPrimitive.GridHead>
										<RangeCalendarPrimitive.GridBody>
											{#each month.weeks as weekDates, i (i)}
												<RangeCalendarPrimitive.GridRow class="flex w-full justify-between mt-1">
													{#each weekDates as date (date.toString())}
														<RangeCalendarPrimitive.Cell {date} month={month.value} class="relative p-0 text-center text-sm focus-within:z-20">
															<RangeCalendarPrimitive.Day
																class={cn(
																	"h-10 w-10 p-0 font-semibold rounded-xl flex items-center justify-center transition-all relative overflow-visible",
																	"hover:bg-blue-50/50",
																	"data-selected:bg-blue-600 data-selected:text-white",
																	"data-selection-start:rounded-l-xl data-selection-start:rounded-r-none",
																	"data-selection-end:rounded-r-xl data-selection-end:rounded-l-none",
																	"data-selected:not-data-selection-start:not-data-selection-end:rounded-none data-selected:not-data-selection-start:not-data-selection-end:bg-blue-50 data-selected:not-data-selection-start:not-data-selection-end:text-blue-700",
																	"data-today:after:content-[''] data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:-translate-x-1/2 data-today:after:w-1 data-today:after:h-1 data-today:after:bg-blue-600 data-today:after:rounded-full data-selected:data-today:after:bg-white",
																	"data-outside-month:text-neutral-300 data-outside-month:pointer-events-none",
																	"data-disabled:text-neutral-200 data-disabled:line-through"
																)}
															/>
														</RangeCalendarPrimitive.Cell>
													{/each}
												</RangeCalendarPrimitive.GridRow>
											{/each}
										</RangeCalendarPrimitive.GridBody>
									</RangeCalendarPrimitive.Grid>
								</div>
							{/each}
						</div>
					{/snippet}
				</RangeCalendarPrimitive.Root>
			{:else}
				<CalendarPrimitive.Root
					type={type === "multiple" ? "multiple" : "single"}
					bind:value={value as any}
					bind:placeholder={calendarPlaceholder}
					onValueChange={handleValueChange}
					class="p-4 bg-white font-sans"
					weekdayFormat="short"
				>
					{#snippet children({ months: calendarMonths, weekdays })}
						<div class="flex flex-col gap-6">
							<div class="flex items-center justify-between px-1 mb-2">
								<CalendarPrimitive.PrevButton class="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-neutral-50 text-neutral-600 transition-colors">
									<ChevronLeft class="h-6 w-6" />
								</CalendarPrimitive.PrevButton>
								<div class="flex items-center gap-2">
									<div class="relative">
										<select class="appearance-none bg-white border border-neutral-100 rounded-xl px-4 py-2 pr-10 font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500/10 cursor-pointer" value={calendarPlaceholder.month} onchange={(e) => setMonth(parseInt(e.currentTarget.value))}>
											{#each months as m (m.value)}<option value={m.value}>{m.label}</option>{/each}
										</select>
										<ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
									</div>
									<div class="relative">
										<select class="appearance-none bg-white border border-neutral-100 rounded-xl px-4 py-2 pr-10 font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500/10 cursor-pointer" value={calendarPlaceholder.year} onchange={(e) => setYear(parseInt(e.currentTarget.value))}>
											{#each years as y (y.value)}<option value={y.value}>{y.label}</option>{/each}
										</select>
										<ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
									</div>
								</div>
								<CalendarPrimitive.NextButton class="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-neutral-50 text-neutral-600 transition-colors">
									<ChevronRight class="h-6 w-6" />
								</CalendarPrimitive.NextButton>
							</div>

							{#each calendarMonths as month (month.value.toString())}
								<div class="flex flex-col gap-4">
									<CalendarPrimitive.Grid class="w-full border-separate border-spacing-0 select-none">
										<CalendarPrimitive.GridHead>
											<CalendarPrimitive.GridRow class="flex w-full justify-between mb-4">
												{#each weekdays as weekday, i (i)}
													<CalendarPrimitive.HeadCell class="w-10 text-center text-xs font-bold text-neutral-400 uppercase tracking-tighter">{weekday.slice(0, 2)}</CalendarPrimitive.HeadCell>
												{/each}
											</CalendarPrimitive.GridRow>
										</CalendarPrimitive.GridHead>
										<CalendarPrimitive.GridBody>
											{#each month.weeks as weekDates, i (i)}
												<CalendarPrimitive.GridRow class="flex w-full justify-between mt-1">
													{#each weekDates as date (date.toString())}
														<CalendarPrimitive.Cell {date} month={month.value} class="relative p-0 text-center text-sm focus-within:z-20">
															<CalendarPrimitive.Day
																class={cn(
																	"h-10 w-10 p-0 font-semibold rounded-xl flex items-center justify-center transition-all relative",
																	"hover:bg-blue-50/50",
																	"data-selected:bg-blue-600 data-selected:text-white",
																	"data-today:after:content-[''] data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:-translate-x-1/2 data-today:after:w-1 data-today:after:h-1 data-today:after:bg-blue-600 data-today:after:rounded-full data-selected:data-today:after:bg-white",
																	"data-outside-month:text-neutral-300 data-outside-month:pointer-events-none",
																	"data-disabled:text-neutral-200 data-disabled:line-through"
																)}
															/>
														</CalendarPrimitive.Cell>
													{/each}
												</CalendarPrimitive.GridRow>
											{/each}
										</CalendarPrimitive.GridBody>
									</CalendarPrimitive.Grid>
								</div>
							{/each}
						</div>
					{/snippet}
				</CalendarPrimitive.Root>
			{/if}

		</Popover.Content>
	</Popover.Root>

	{#if error}
		<p class="text-xs text-red-500 mt-1">{error}</p>
	{/if}
</div>

<style>
	select { background-image: none; }
</style>
