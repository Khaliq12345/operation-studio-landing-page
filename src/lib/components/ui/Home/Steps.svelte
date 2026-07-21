<script lang="ts">
	import * as Card from "$lib/components/ui/card";

	const steps = [
		{
			number: "01",
			title: "Map & Audit",
			subtitle: "Deep-dive operational review",
			description:
				"We audit your current messy workflows, identifying bottlenecks, manual data entry points, and single points of failure.",
			highlights: [
				"Bottleneck Analysis",
				"Tech Stack Review",
				"Process Blueprint",
			],
		},
		{
			number: "02",
			title: "Rapid Build",
			subtitle: "Deploying custom automation",
			description:
				"We design and deploy your custom tool in weeks, not months. You get a fully functional beta version in days to test live.",
			highlights: [
				"Custom Architecture",
				"Iterative Betas",
				"API Integrations",
			],
		},
		{
			number: "03",
			title: "Scale & Trust",
			subtitle: "Long-term operational resilience",
			description:
				"A system your team actually trusts and can grow with. Fully documented, containerized, and backed by ongoing support.",
			highlights: [
				"Full Documentation",
				"Team Onboarding",
				"Containerized Stability",
			],
		},
	];
</script>

<section
	class="min-h-[75vh] w-full flex flex-col items-center justify-center px-2 md:px-6 py-20 bg-background border-t border-border/40 relative overflow-hidden"
	id="process"
>
	<div
		class="max-w-6xl w-full flex flex-col items-center space-y-16 relative z-10"
	>
		<!-- Heading Area -->
		<div class="text-center space-y-4 max-w-2xl">
			<h2
				class="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground"
			>
				A 3–Step Journey to Order
			</h2>
			<p class="text-muted-foreground text-sm md:text-base">
				From chaotic operational bottlenecks to
				seamless, automated systems built for scale.
			</p>
		</div>

		<!-- Steps Grid using shadcn-svelte Cards -->
		<div
			class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full"
		>
			{#each steps as step, i}
				<Card.Root
					class="group flex flex-col justify-between bg-card/40 hover:bg-card/80 border-border/60 hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-md relative p-2"
				>
					<Card.Header class="space-y-4 pt-3">
						<div
							class="flex items-center justify-between"
						>
							<div
								class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 font-bold text-base group-hover:scale-105 transition-transform"
							>
								{step.number}
							</div>
							<span
								class="text-xs font-mono text-muted-foreground/60"
								>Milestone {i +
									1}/3</span
							>
						</div>

						<div>
							<Card.Title
								class="text-xl font-bold text-foreground mb-1"
							>
								{step.title}
							</Card.Title>
							<p
								class="text-xs font-medium text-blue-500"
							>
								{step.subtitle}
							</p>
						</div>

						<Card.Description
							class="text-sm text-muted-foreground leading-relaxed"
						>
							{step.description}
						</Card.Description>
					</Card.Header>

					<Card.Content
						class="pt-4 pb-2 border-t border-border/40 mt-auto"
					>
						<div
							class="flex flex-wrap gap-2"
						>
							{#each step.highlights as highlight}
								<span
									class="text-[11px] font-medium px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border/50"
								>
									{highlight}
								</span>
							{/each}
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
