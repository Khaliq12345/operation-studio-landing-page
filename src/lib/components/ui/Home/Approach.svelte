<script lang="ts">
	import * as Item from "$lib/components/ui/item/index.js";
	import CheckCircle2 from "@lucide/svelte/icons/check-circle-2";

	// Main features list
	const features = [
		{
			title: "Precision Reliability",
			description:
				"Database-backed tools that don't crash when you add more rows.",
			icon: CheckCircle2,
		},
		{
			title: "Process Alignment",
			description:
				"We match your existing vocabulary and workflows—no learning curve for the team.",
			icon: CheckCircle2,
		},
		{
			title: "Seamless Scaling",
			description:
				"Infrastructure that grows from 10 users to 100 without breaking a sweat.",
			icon: CheckCircle2,
		},
	];

	// Single array powering both cards with theme options
	const comparisonCards = [
		{
			title: "Our Approach",
			variant: "dark",
			items: [
				{
					label: "Custom Logic",
					value: "Unlimited",
					highlight: true,
				},
				{
					label: "Reliability",
					value: "99.9% Uptime",
					highlight: true,
				},
				{
					label: "Data Integrity",
					value: "Strict Validation",
					highlight: true,
				},
			],
		},
		{
			title: "Standard SaaS",
			variant: "light",
			items: [
				{
					label: "Features",
					value: "Fixed / Rigid",
					highlight: false,
				},
				{
					label: "Workflow",
					value: "You adapt to them",
					highlight: false,
				},
			],
		},
	];
</script>

<section
	class="min-h-[75vh] w-full flex items-center py-16 px-6 md:px-12 bg-slate-100"
	id="solution"
>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto"
	>
		<!-- Left Side: Main Heading & Feature List -->
		<div class="flex flex-col space-y-8">
			<h2
				class="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
			>
				Software built for how you work, not a SaaS you
				have to bend around.
			</h2>

			<div class="flex flex-col gap-6">
				{#each features as feature}
					<Item.Root
						class="flex items-start gap-4 p-0 border-0 bg-transparent shadow-none"
					>
						<div
							class="text-emerald-500 mt-1 shrink-0"
						>
							<svelte:component
								this={feature.icon}
								class="h-6 w-6"
							/>
						</div>
						<Item.Content class="space-y-1">
							<Item.Title
								class="text-lg font-bold tracking-tight"
							>
								{feature.title}
							</Item.Title>
							<Item.Description
								class="text-sm text-muted-foreground leading-relaxed"
							>
								{feature.description}
							</Item.Description>
						</Item.Content>
					</Item.Root>
				{/each}
			</div>
		</div>

		<!-- Right Side: Dynamic Looped Comparison Cards -->
		<div class="flex flex-col gap-6 w-full">
			{#each comparisonCards as card}
				<div
					class="p-6 md:p-8 rounded-2xl border space-y-6 transition-all {card.variant ===
					'dark'
						? 'bg-slate-950 text-slate-50 border-slate-800 shadow-xl'
						: 'bg-slate-50 text-slate-900 border-slate-200 shadow-sm'}"
				>
					<!-- Header -->
					<div
						class="text-xs font-semibold tracking-wider uppercase {card.variant ===
						'dark'
							? 'text-slate-400'
							: 'text-slate-500'}"
					>
						{card.title}
					</div>

					<!-- List Items -->
					<div
						class="divide-y {card.variant ===
						'dark'
							? 'divide-slate-800'
							: 'divide-slate-200'}"
					>
						{#each card.items as item}
							<div
								class="py-3 flex justify-between items-center text-sm"
							>
								<span
									class={card.variant ===
									"dark"
										? "text-slate-200"
										: "text-slate-600"}
								>
									{item.label}
								</span>
								<span
									class="font-medium {item.highlight
										? 'text-emerald-400'
										: card.variant ===
											  'dark'
											? 'text-slate-100'
											: 'text-slate-500'}"
								>
									{item.value}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
