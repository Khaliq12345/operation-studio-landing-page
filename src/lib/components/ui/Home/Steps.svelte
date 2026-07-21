<script lang="ts">
	const steps = [
		{
			number: "01",
			title: "Map",
			description:
				"We audit your current messy workflows, identifying bottlenecks and single points of failure.",
		},
		{
			number: "02",
			title: "Build",
			description:
				"We design and deploy your custom tool in weeks, not months. You get a beta version in days.",
		},
		{
			number: "03",
			title: "Scale",
			description:
				"A system your team actually trusts and can grow with. Fully documented and supported.",
		},
	];
</script>

<section
	class="min-h-[75vh] w-full flex flex-col items-center justify-center px-6 py-16 bg-background border-t-2"
	id="process"
>
	<div class="max-w-6xl w-full flex flex-col items-center space-y-16">
		<!-- Heading -->
		<h2
			class="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground text-center"
		>
			A 3–Step Journey to Order
		</h2>

		<!-- Steps Grid -->
		<div
			class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full"
		>
			{#each steps as step}
				<div
					class="flex flex-col items-center text-center space-y-4 px-4"
				>
					<!-- Number Badge -->
					<div
						class="w-14 h-14 rounded-xl bg-blue-100/80 border border-blue-400 flex items-center justify-center text-blue-600 font-bold text-lg"
					>
						{step.number}
					</div>

					<!-- Step Title -->
					<h3
						class="text-2xl font-bold text-foreground"
					>
						{step.title}
					</h3>

					<!-- Step Description -->
					<p
						class="text-sm text-muted-foreground leading-relaxed max-w-xs"
					>
						{step.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
