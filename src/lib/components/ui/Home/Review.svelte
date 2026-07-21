<script lang="ts">
	import Star from "@lucide/svelte/icons/star";
	import X from "@lucide/svelte/icons/x";
	import Check from "@lucide/svelte/icons/check";
	import ArrowDown from "@lucide/svelte/icons/arrow-down";

	const testimonial = {
		rating: 5,
		quote: `"We were burning thousands of dollars on Google Workspace accounts and constantly fighting deliverability fires that literally cost us clients. This custom email infrastructure completely flipped the script. We stopped playing IT support and watched our internal call bookings soar. Even better, the setup is so robust that we’ve actually packaged it into an entirely new, highly profitable revenue stream for our agency."`,
		author: {
			name: "Cesar Rodriguez",
			title: "Founder, Growth Marketing Agency",
			avatar: "",
		},
	};

	const comparison = {
		label: "INFRASTRUCTURE OVERHAUL",
		before: "Bleeding thousands on Workspaces & constant deliverability fires.",
		after: "Zero-maintenance infrastructure driving booked calls & new revenue.",
	};
</script>

<section
	class="w-full flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-slate-100"
	id="studies"
>
	<div class="max-w-7xl w-full flex flex-col items-center space-y-10">
		<!-- Main Card Container -->
		<div
			class="w-full grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-slate-200 overflow-hidden bg-background shadow-sm"
		>
			<!-- Left Side: Testimonial -->
			<div
				class="p-6 sm:p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white"
			>
				<div class="space-y-6">
					<!-- Rating Stars (Fixed with Array.from) -->
					<div class="flex items-center gap-1">
						{#each Array.from( { length: testimonial.rating }, ) as _}
							<Star
								class="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 fill-blue-600"
								strokeWidth="0"
							/>
						{/each}
					</div>

					<!-- Quote -->
					<p
						class="text-base sm:text-lg md:text-xl font-bold italic text-slate-900 leading-relaxed tracking-tight"
					>
						{testimonial.quote}
					</p>
				</div>

				<!-- Author Details -->
				<div class="flex items-center gap-3 pt-2">
					<div
						class="h-12 w-12 rounded-xl bg-slate-200 shrink-0 overflow-hidden flex items-center justify-center"
					>
						{#if testimonial.author.avatar}
							<img
								src={testimonial
									.author
									.avatar}
								alt={testimonial
									.author
									.name}
								class="h-full w-full object-cover"
							/>
						{/if}
					</div>
					<div class="flex flex-col">
						<span
							class="font-bold text-sm text-slate-900"
						>
							{testimonial.author
								.name}
						</span>
						<span
							class="text-xs text-slate-500 font-medium"
						>
							{testimonial.author
								.title}
						</span>
					</div>
				</div>
			</div>

			<!-- Right Side: Before & After -->
			<div
				class="p-6 sm:p-8 md:p-12 bg-blue-50/60 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center space-y-6"
			>
				<div
					class="text-xs font-bold tracking-wider text-blue-600 uppercase"
				>
					{comparison.label}
				</div>

				<div
					class="flex flex-col items-center gap-3 w-full"
				>
					<!-- Before Card -->
					<div
						class="w-full bg-white border border-red-200/80 rounded-xl p-4 flex items-start justify-between gap-3 shadow-xs"
					>
						<span
							class="text-xs sm:text-sm md:text-base font-semibold text-red-600 leading-snug"
						>
							{comparison.before}
						</span>
						<X
							class="h-5 w-5 text-red-500 shrink-0 stroke-[2.5] mt-0.5"
						/>
					</div>

					<!-- Down Arrow -->
					<ArrowDown
						class="h-4 w-4 text-slate-400 my-1"
					/>

					<!-- After Card -->
					<div
						class="w-full bg-white border border-emerald-200/80 rounded-xl p-4 flex items-start justify-between gap-3 shadow-xs"
					>
						<span
							class="text-xs sm:text-sm md:text-base font-semibold text-slate-900 leading-snug"
						>
							{comparison.after}
						</span>
						<Check
							class="h-5 w-5 text-emerald-500 shrink-0 stroke-[2.5] mt-0.5"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- Subtext Footer -->
		<p
			class="text-xs sm:text-sm text-slate-500 text-center max-w-2xl px-4 font-medium leading-relaxed"
		>
			Built for agencies and operational B2B companies (10-100
			people) where leaders are drowning in spreadsheets.
		</p>
	</div>
</section>
