<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import AlertCircle from "@lucide/svelte/icons/a-arrow-down";
	import History from "@lucide/svelte/icons/history";
	import UserX from "@lucide/svelte/icons/user-x";
	import FileClock from "@lucide/svelte/icons/file-clock";
	import Banknote from "@lucide/svelte/icons/banknote";

	const traps = [
		{
			title: "Critical Infrastructure nobody trusts.",
			description:
				"Spreadsheets break silently. Your team spends more time checking formulas than using data.",
			icon: AlertCircle,
		},
		{
			title: "Hours wasted on manual entry.",
			description:
				"Copy-pasting data between tabs isn't work—it's a liability. Automate the mundane tasks.",
			icon: History,
		},
		{
			title: "Single points of failure.",
			description:
				'If your "Excel Wizard" leaves or the file gets corrupted, your operation grinds to a halt.',
			icon: UserX,
		},
		{
			title: "Reporting that's out of date.",
			description:
				"By the time you compile the weekly report, the reality on the ground has already changed.",
			icon: FileClock,
		},
		{
			title: "Bleeding money on inefficiencies.",
			description:
				"Paying high hourly rates for manual data entry and bloated software subscriptions eats directly into your profit margins.",
			icon: Banknote,
		},
	];
</script>

<section
	class="min-h-[60vh] flex flex-col justify-center p-6 md:p-12 max-w-7xl mx-auto w-full"
	id="traps"
>
	<!-- Section Header -->
	<div class="max-w-4xl mb-20 space-y-2">
		<p
			class="text-blue-600 text-xs font-bold tracking-wider uppercase"
		>
			THE SPREADSHEET TRAP
		</p>
		<h2
			class="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground"
		>
			Growth is outpacing your tools
		</h2>
	</div>

	<!-- Responsive Cards Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each traps as trap}
			{@const Icon = trap.icon}
			<Card.Root
				class="w-full border flex flex-col justify-between p-5 shadow-xs transition-shadow hover:shadow-md"
			>
				<!-- Dynamic Lucide Icon Header -->
				<Card.Header class="pb-2">
					<div
						class="text-slate-900 bg-slate-100 p-3 rounded-lg w-fit"
					>
						<Icon
							class="h-6 w-6 text-slate-800"
							strokeWidth={1.75}
						/>
					</div>
				</Card.Header>

				<!-- Content -->
				<Card.Content class="space-y-2 pt-2">
					<Card.Title
						class="text-lg font-bold tracking-tight text-slate-900 leading-snug"
					>
						{trap.title}
					</Card.Title>
					<Card.Description
						class="text-sm text-muted-foreground leading-relaxed"
					>
						{trap.description}
					</Card.Description>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
